import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import Expense from "../views/Expense.vue";
import Expenses from "../views/Expenses.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "home",
    component: Home
  },
  {
    path: "/expense/:uuid",
    name: "expense",
    component: Expense
  },
  {
    path: "/expenses",
    name: "expenses",
    component: Expenses
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
