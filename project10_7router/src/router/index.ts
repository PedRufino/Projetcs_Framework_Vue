import { createRouter, createWebHashHistory, type RouteRecordRaw } from "vue-router";
import ListaTarefas from '@/views/ListaTarefas.vue';

const rotas: RouteRecordRaw[] = [
    {
        path: "/",
        name: "ListaTarefas",
        component: ListaTarefas
    }
];

        const router = createRouter({
            history: createWebHashHistory(),
            routes:rotas,
        });

        export default router;