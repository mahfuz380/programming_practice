
import CreateProduct from './components/pages/myFirstPage.vue';
import Hooks from './components/pages/basic/Hooks.vue';
import Method from './components/pages/basic/Methods.vue';

 
export const routes = [

    {
        name: 'create',
        path: '/create',
        component: CreateProduct
    },

    // vue hooks
    {
        name: 'hooks',
        path: '/hooks',
        component: Hooks
    },
    // More basic
    {
        name: 'methods',
        path: '/methods',
        component: Method
    }

];