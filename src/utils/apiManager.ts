import axios, { AxiosResponse } from 'axios';

const BASE_URL = 'http://localhost:3323'; // Replace with your actual API base URL

interface ApiResponse<T> {
  data: T;
  status: number;
}

class ApiManager {
  private static instance: ApiManager;
  private constructor() {}

  public static getInstance(): ApiManager {
    if (!ApiManager.instance) {
      ApiManager.instance = new ApiManager();
    }
    return ApiManager.instance;
  }

  private async request<T>(method: string, url: string, data?: any): Promise<ApiResponse<T>> {
    try {
      const response: AxiosResponse<T> = await axios({
        method,
        url: `${BASE_URL}${url}`,
        data,
      });
      return { data: response.data, status: response.status };
    } catch (error) {
      throw error;
    }
  }

  // Income APIs
  async addIncome(income: any): Promise<ApiResponse<{ id: string }>> {
    return this.request<{ id: string }>('POST', '/income/income/', income);
  }

  async getIncomes(filters?: object): Promise<ApiResponse<any[]>> {
    return this.request<any[]>('GET', '/income/income/', filters);
  }

  async updateIncome(incomeId: string, income: any): Promise<ApiResponse<{ status: string }>> {
    return this.request<{ status: string }>('PATCH', `/income/income/${incomeId}`, income);
  }

  async deleteIncome(incomeId: string): Promise<ApiResponse<{ status: string }>> {
    return this.request<{ status: string }>('DELETE', `/income/income/${incomeId}`);
  }

  // Expenses APIs
  async addExpense(expense: any): Promise<ApiResponse<{ id: string }>> {
    return this.request<{ id: string }>('POST', '/expenses/expense/', expense);
  }

  async getExpenses(): Promise<ApiResponse<any[]>> {
    return this.request<any[]>('GET', '/expenses/expense/');
  }

  async updateExpense(expenseId: string, expense: any): Promise<ApiResponse<{ status: string }>> {
    return this.request<{ status: string }>('PATCH', `/expenses/expense/${expenseId}`, expense);
  }

  async deleteExpense(expenseId: string): Promise<ApiResponse<{ status: string }>> {
    return this.request<{ status: string }>('DELETE', `/expenses/expense/${expenseId}`);
  }

  // Budget APIs
  async addBudget(budget: any): Promise<ApiResponse<{ id: string }>> {
    return this.request<{ id: string }>('POST', '/budget/budget/', budget);
  }

  async getBudgets(): Promise<ApiResponse<any[]>> {
    return this.request<any[]>('GET', '/budget/budget/');
  }

  async updateBudget(budgetId: string, budget: any): Promise<ApiResponse<{ status: string }>> {
    return this.request<{ status: string }>('PATCH', `/budget/budget/${budgetId}`, budget);
  }

  async deleteBudget(budgetId: string): Promise<ApiResponse<{ status: string }>> {
    return this.request<{ status: string }>('DELETE', `/budget/budget/${budgetId}`);
  }

  // Savings APIs
  async addSavingsGoal(savingsGoal: any): Promise<ApiResponse<{ id: string }>> {
    return this.request<{ id: string }>('POST', '/savings/savings/', savingsGoal);
  }

  async getSavingsGoals(): Promise<ApiResponse<any[]>> {
    return this.request<any[]>('GET', '/savings/savings/');
  }

  async updateSavingsGoal(savingsId: string, savingsGoal: any): Promise<ApiResponse<{ status: string }>> {
    return this.request<{ status: string }>('PATCH', `/savings/savings/${savingsId}`, savingsGoal);
  }

  async deleteSavingsGoal(savingsId: string): Promise<ApiResponse<{ status: string }>> {
    return this.request<{ status: string }>('DELETE', `/savings/savings/${savingsId}`);
  }

  // Investment APIs
  async addInvestment(investment: any): Promise<ApiResponse<{ id: string }>> {
    return this.request<{ id: string }>('POST', '/investment/investment/', investment);
  }

  async getInvestments(): Promise<ApiResponse<any[]>> {
    return this.request<any[]>('GET', '/investment/investment/');
  }

  async updateInvestment(investmentId: string, investment: any): Promise<ApiResponse<{ status: string }>> {
    return this.request<{ status: string }>('PATCH', `/investment/investment/${investmentId}`, investment);
  }

  async deleteInvestment(investmentId: string): Promise<ApiResponse<{ status: string }>> {
    return this.request<{ status: string }>('DELETE', `/investment/investment/${investmentId}`);
  }

  // Method to add new API endpoints in the future
  async customRequest<T>(method: string, url: string, data?: any): Promise<ApiResponse<T>> {
    return this.request<T>(method, url, data);
  }

  // Transaction APIs
  async addTransaction(transaction: any): Promise<ApiResponse<any[]>> {
    return this.request<any[]>('POST', '/transactions/', transaction);
  }
  async allTransaction(filters: any): Promise<ApiResponse<any[]>> {
    return this.request<any[]>('GET', '/transactions/', filters);
  }
  
  async uploadTransactions(file: File): Promise<ApiResponse<any>> {
    const formData = new FormData();
    formData.append('file', file);
    console.log("Hitting upload transactions");
    return this.request<any>('POST', '/transactions/upload', formData);
  }

  // Card APIs
  async getCardData(): Promise<ApiResponse<any[]>> {
    return this.request<any[]>('POST', '/cards');
  }
}

export default ApiManager.getInstance();