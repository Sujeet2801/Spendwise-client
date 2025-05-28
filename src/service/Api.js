import axios from "axios";

const API = axios.create({
    baseURL: "/api/v1/users",
    withCredentials: true,
});

// ---------- Auth APIs ------- //
export const registerUser = (data) => API.post("/register", data)
export const loginUser = (data) => API.post("/login", data)
export const logoutUser = () => API.get("/logout")
export const getCurrentUser = () => API.get("/me")

// --------- Expense APIs ------- //
export const addExpense = (data) => API.post("/expense/add", data);
export const updateExpense = (id, data) => API.put(`/expense/update/${id}`, data);
export const deleteExpense = (id) => API.delete(`/expense/delete/${id}`);
export const getAllExpenses = () => API.get("/expenses");
export const getExpenseByCategory = (category) => API.get(`/expense/${category}`);
export const getExpenseByCategoryMonth = (category) => API.get(`/expenses/${category}`);
export const getExpenseGroupByCategory = () => API.get("/expense/group/category");

// --------- Income APIs ------- //
export const addIncome = (data) => API.post("/income/add", data);
export const updateIncome = (id, data) => API.put(`/income/update/${id}`, data);
export const deleteIncome = (id) => API.delete(`/income/delete/${id}`);
export const getAllIncome = () => API.get("/incomes");
export const getIncomeBySource = (source) => API.get(`/income/${source}`);
export const getIncomeGroupByCategory = () => API.get("/income/group/category");

// ---------- Dashboard APIs ------- //
export const getOverview = () => API.get("/overview");
export const getRecentTransactions = () => API.get("/recent-transactions");
export const getSummary = () => API.get("/summary");
export const getSpendingTrends = () => API.get("/spending-trends");
export const getTopCategories = () => API.get("/top-categories");
export const getFinancialTips = () => API.get("/financial-tips");

export default API;
