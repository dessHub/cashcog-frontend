import api from "../../utils/api";
import { flatenEmployee } from "../../utils/helpers";

export default {
  state: {
    expenses: null,
    isFetching: false,
    success: false,
    errorMessage: null
  },
  actions: {
    async getExpenses({ commit }) {
      commit("fetchingExpenses");
      let response = await api.get("api/expenses");
      // eslint-disable-next-line no-console
      console.log("data", response.data);
      response.status === 200
        ? commit("addExpensesToStore", response.data)
        : commit("fetchingExpensesFail", response.message);
    }
  },
  mutations: {
    addExpensesToStore(state, expenses) {
      state.expenses = expenses;
      state.isFetching = false;
    },
    fetchingExpenses(state) {
      state.isFetching = true;
    },
    fetchingExpensesFail(state, error) {
      state.isFetching = false;
      state.success = false;
      state.errorMessage = error;
    }
  },
  getters: {
    getExpenselist(state) {
      return state.expenses
        ? state.expenses.map(expense => flatenEmployee(expense))
        : state.expenses;
    }
  }
};
