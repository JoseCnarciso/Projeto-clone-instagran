// Obrigatório este import desta maneira
import { createRouter,createWebHistory } from "vue-router";

// Importar as telas 
import Login from '../views/Login/Login.vue'
import SignUp from '../views/SignUp/SignUp.vue'
import Home from '../views/Home/Home.vue'

// Criar uma constante router 
const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes:[
        {
            // Tela inicial 
            path:'/',
            name:'Login',
            component: Login
        }, 
        {
            path:'/cadastro',
            name:'SignUp',
            component: SignUp
        },      
        {
            path:'/Home',
            name:'Home',
            component: Home
        },
    
    ]    
})
// Sempre exportar 
export default router;