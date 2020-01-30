import mockCoins from "../mock/expenses";
import expenses from "../../../src/store/modules/expenses";
import mockExpenses from "../mock/expenses";

const { mutations, getters } = expenses;

describe("Expenses mutations", () => {
  let state;
  const {
    addExpensesToStore,
    addExpenseToStore,
    fetchingData,
    updatingData,
    filterData,
    deleteSuccessful,
    fetchingFail
  } = mutations;

  beforeEach(() => {
    state = {
      expenses: null,
      expense: null,
      status: null,
      isFetching: false,
      isUpdating: false,
      isDeleted: false,
      success: false,
      errorMessage: null
    };
  });

  it("addExpensesToStore", () => {
    const payload = mockExpenses;
    addExpensesToStore(state, payload);
    expect(state.expenses).toBeNotNull;
  });
  it("addExpenseToStore", () => {
    const payload = mockExpenses[0];
    addExpenseToStore(state, payload);
    expect(state.expense).toBeNotNull;
  });
  it("fetchingData", () => {
    fetchingData(state);
    expect(state.isFetching).toBe(true);
  });
  it("updatingData", () => {
    updatingData(state);
    expect(state.isUpdating).toBe(true);
  });
  it("deleteSuccessful", () => {
    deleteSuccessful(state);
    expect(state.isDeleted).toBe(true);
  });
  it("filterData", () => {
    filterData(state, "Pending");
    expect(state.status).toBe("Pending");
  });
  it("fetchingFail", () => {
    const payload = "Bad request";
    fetchingFail(state, payload);
    expect(state.success).toBe(false);
  });
});

// Getters edge cases
describe("Expense getters", () => {
  const { getExpenselist, getOneExpense, expensesByStatus } = getters;

  it("getExpenselist", () => {
    const state = {
      expenses: mockCoins,
      expense: null,
      status: null,
      isFetching: false,
      isUpdating: false,
      isDeleted: false,
      success: true,
      errorMessage: null
    };
    const expensesArry = getExpenselist(state);
    expect(expensesArry.expenses.length).toBeGreaterThan(0);
  });
  it("getOneExpense", () => {
    const state = {
      expenses: mockCoins,
      expense: mockCoins[0],
      status: null,
      isFetching: false,
      isUpdating: false,
      isDeleted: false,
      success: true,
      errorMessage: null
    };
    const expense = getOneExpense(state);
    expect(expense.approved).toBe("Pending");
  });
  it("expensesByStatus", () => {
    const state = {
      expenses: mockCoins,
      expense: null,
      status: "Declined",
      isFetching: false,
      isUpdating: false,
      isDeleted: false,
      success: true,
      errorMessage: null
    };
    const expenses = expensesByStatus(state);
    expect(expenses.length).toBeGreaterThan(0);
  });
});
