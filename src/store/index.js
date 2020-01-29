import Vue from "vue";
import Vuex from "vuex";
import expenseModule from "./modules/expenses";

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    expense: expenseModule
  }
});
