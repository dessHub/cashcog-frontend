import api from "../../utils/api";
import { flatenEmployee, getCount } from "../../utils/helpers";

export default {
  state: {
    expenses: null,
    expense: null,
    status: null,
    isFetching: false,
    isUpdating: false,
    isDeleted: false,
    success: false,
    errorMessage: null
  },
  actions: {
    async getExpenses({ commit }) {
      commit("fetchingData");
      let fetchData = {
        method: "GET",
        headers: new Headers()
      };
      let response = await api("/api/expenses", fetchData);
      response.status === 200
        ? commit("addExpensesToStore", response.data)
        : commit("fetchingExpensesFail", response.message);
    },
    async getExpense({ commit }, path) {
      commit("fetchingData");
      let fetchData = {
        method: "GET",
        headers: new Headers()
      };
      let response = await api(`/api${path}`, fetchData);
      response.status === 200
        ? commit("addExpenseToStore", response.data.Expense)
        : commit("fetchingFail", response.message);
    },
    async getExpenseByStatus({ commit }, status) {
      commit("filterData", status);
    },
    async updateExpense({ commit }, dataObj) {
      commit("updatingData");
      let payload = {
        approved: dataObj.status
      };
      let fetchData = {
        method: "PATCH",
        data: payload,
        headers: new Headers()
      };
      let response = await api(`/api${dataObj.path}`, fetchData);
      response.status === 200
        ? commit("addExpenseToStore", response.data.Expense)
        : commit("fetchingFail", response.data.message);
    },
    async deleteExpense({ commit }, path) {
      commit("updatingData");
      let fetchData = {
        method: "DELETE",
        headers: new Headers()
      };
      let response = await api(`/api${path}`, fetchData);
      response.status === 200
        ? commit("deleteSuccessful", response.data.Expense)
        : commit("fetchingFail", response.data.message);
    }
  },
  mutations: {
    addExpensesToStore(state, expenses) {
      state.expenses = expenses;
      state.isFetching = false;
      state.success = true;
      state.isUpdating = false;
      state.isDeleted = false;
    },
    addExpenseToStore(state, expense) {
      state.expense = expense;
      state.isFetching = false;
      state.success = true;
      state.isUpdating = false;
      state.isDeleted = false;
    },
    fetchingData(state) {
      state.isFetching = true;
    },
    updatingData(state) {
      state.isUpdating = true;
    },
    filterData(state, status) {
      state.status = status;
    },
    deleteSuccessful(state) {
      state.isDeleted = true;
      state.isUpdating = false;
    },
    fetchingFail(state, error) {
      state.isFetching = false;
      state.success = false;
      state.errorMessage = error;
      state.isUpdating = false;
    }
  },
  getters: {
    getExpenselist(state) {
      let obj = {
        expenses: state.expenses
          ? state.expenses.map(expense => flatenEmployee(expense))
          : state.expenses,
        pending: state.expenses ? getCount("Pending", state.expenses) : 0,
        approved: state.expenses ? getCount("Approved", state.expenses) : 0,
        declined: state.expenses ? getCount("Declined", state.expenses) : 0
      };
      return obj;
    },
    getOneExpense(state) {
      return state.expense;
    },
    expensesByStatus(state) {
      const filteredData = state.expenses
        ? state.expenses.filter(item => item.approved === state.status)
        : state.expenses;
      return filteredData
        ? filteredData.map(expense => flatenEmployee(expense))
        : filteredData;
    }
  }
};
