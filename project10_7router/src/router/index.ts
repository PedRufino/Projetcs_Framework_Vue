// import { createRouter, createWebHashHistory, type RouteRecordRaw } from "vue-router";
import { createRouter, createWebHistory, type RouteRecordRaw } from "vue-router";
import ListaTarefas from '@/views/ListaTarefas.vue';
import Rota from '@/views/Rota.vue';

const rotas: RouteRecordRaw[] = [
    {
        path: "/tarefas",
        name: "ListaTarefas",
        component: ListaTarefas
    },
    {
        path: "/rota",
        name: "Rota",
        component: Rota
    }
];

        const router = createRouter({
            history: createWebHistory(),
            routes:rotas,
        });

        export default router;