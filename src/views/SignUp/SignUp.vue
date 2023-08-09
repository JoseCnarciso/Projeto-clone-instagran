<template>
    <form class="form-login">
        <h2>Criar conta</h2>

        <label for="name">Nome completo</label>
        <input type="text" name="name" v-model="name" />

        <label for="email">Email</label>
        <input type="email" name="email" v-model="email" />

        <label for="password">Password</label>
        <input type="password" name="password" v-model="password" />

        <label for="verifyPassword">Confirmar password</label>
        <input type="verifyPassword" name="verifyPassword" v-model="verifyPassword" />

        <label for="sponsor">Patrocinador</label>
        <select id="sponsor" v-model="sponser">
            <option value="">Sem patrocinador</option>
            <option value="Coca-cola">Coca-Cola</option>
            <option value="toddynho"> Toddynho</option>
        </select>


        <label for="bio">Biografia</label>
        <textarea name="" id="bio" cols="30" rows="10"></textarea>

        <label id="confirmTerms">Aceita os termos de uso
            <input type="checkbox" name="confirmTerms" id="confirmTerms" v-model="confirmTerms">
        </label>

        <input id="scale" type="radio" value="1" v-model="planType" />
         <label for="scale">Scale</label>
        <input id="amador" type="radio" value="2" v-model="planType" /> 
        <label for="amador">Amador</label>
        <input id="rx" type="radio" value="3" v-model="planType" />
        <label for="rx">RX</label>
    </form>
</template>
    
<script>
export default {
    data() {
        return {
            name: '',
            email: '',
            password: '',
            verifyPassword: '',
            sponsor: '',
            bio: '',
            confirmTerms: true,
            planType: '2',




        }
    }
}
</script>
    
    
<style scoped>
.error-box {
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
    