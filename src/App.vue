<template>  
  <!-- @submit.prevent para impedir o refresh do navegador após o click -->
  <form @submit.prevent="handlerLogin" class="form-login">
    
    <input type="email" placeholder="Email" v-model="email">
    <span v-if="errorInputEmail" class="error-box">{{ errorInputEmail }}</span>
       
    <input type="password" placeholder="Password" v-model="password">
    <span v-if="errorInputPassword" class="error-box">{{ errorInputPassword }}</span>
    
    <button type="submit">Login</button>
  </form>
</template>

<script>
  export default {
    data() {
      return {
        email: '',
        password: '',

        errorInputEmail: '',
        errorInputPassword: ''
      }
    },
    methods: {
      handlerLogin() {
        this.errorInputEmail = "";
        this.errorInputPassword = "";

        if (!this.email) this.errorInputEmail = 'Email obrigatório';             
        if (!this.password) this.errorInputPassword = 'Password obrigatório';    
        
        
      }
    }
  }
</script>


<style scoped>
 
.error-box{
  background-color: tomato;
  width: 80%;
  color: #fff;
}

 .form-login {
    margin: 40px auto;
    width: 40%;

    border-radius: 4px;
    border: 1px solid #383737;

    display: flex;
    flex-direction: column;
    gap: 20px;
    align-items: center;

    padding: 10px;

}

.input-area {
    width: 80%;

    display: flex;
    flex-direction: column;
}

.input-area input {
    width: 100%;
}

.texto-erro {
    color: red;
    margin: 4px;
}

input {
    height: 54px;
    width: 80%;
    border-radius: 8px;
    border: 1px solid #756767;
    outline: none;
}

button {
    width: 80%;
    height: 54px;
    background-color: #3578E5;

    color: white;
    font-size: 18px;
    border-radius: 8px;
    border: none;
}

button:hover {
    background-color: #286ee0;
}

.input-error {
    border-color: red;
}


</style>
