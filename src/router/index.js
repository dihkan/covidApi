import { createRouter, createWebHistory } from "vue-router";
import anaSayfa from "../components/anaSayfa.vue";
import covid from "../components/covid.vue";
const history = createWebHistory();

const routes = [{
        path: "/",
        component: anaSayfa,
        name: "anaSayfa",
    },
    {
        path: "/covid",
        component: covid,
        name: "covid",
    },
];

const router = createRouter({ routes, history });

export default router;