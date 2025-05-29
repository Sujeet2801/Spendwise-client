import { useEffect, useState } from 'react';
import {
  getOverview,
  getCurrentUser,
  getExpenseGroupByCategory,
  getIncomeGroupByCategory,
} from '../service/Api.js';
import { useNavigate } from 'react-router-dom';
import BarChart from '../components/chart/BarChart.jsx';
import Card from '../components/Card';

const DashboardPage = () => {
  const [summary, setSummary] = useState(null);
  const [user, setUser] = useState(null);
  const [expenseCategoryData, setExpenseCategoryData] = useState([]);
  const [incomeSourceData, setIncomeSourceData] = useState([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchAll = async () => {
      try {
        const [overviewRes, userRes, expenseRes, incomeRes] = await Promise.all([
          getOverview(),
          getCurrentUser(),
          getExpenseGroupByCategory(),
          getIncomeGroupByCategory(),
        ]);

        setSummary(overviewRes.data);
        setUser(userRes.data.data);
        setExpenseCategoryData(expenseRes.data.data);
        setIncomeSourceData(incomeRes.data.data);
      } catch (err) {
        console.error('Error fetching dashboard data:', err);
      } finally {
        setLoading(false);
      }
    };

    fetchAll();
  }, []);

  if (loading) {
    return <p className='text-center mt-10 text-lg text-gray-600'>Loading...</p>;
  }

  const totalIncome = summary?.totalIncome || 0;
  const totalExpenses = summary?.totalExpenses || 0;
  const netSavings = summary?.netSavings || 0;

  return (
    <div className='min-h-screen bg-gradient-to-br from-purple-600 to-blue-500 p-6'>
      <div className='max-w-6xl mx-auto bg-white rounded-xl shadow-lg p-8 space-y-6 mt-20 mb-6'>
        <div className='flex flex-col sm:flex-row justify-between items-start sm:items-center'>
          <h1 className='text-3xl font-bold text-gray-800 mb-4 sm:mb-0'>
            Welcome, {user?.name || 'User'}
          </h1>
          <div className='flex space-x-4'>
            <button
              onClick={() => navigate('/add-income')}
              className='bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg transition'
            >
              Add Income
            </button>
            <button
              onClick={() => navigate('/add-expense')}
              className='bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded-lg transition'
            >
              Add Expense
            </button>
          </div>
        </div>

        <div className='grid grid-cols-1 sm:grid-cols-3 gap-6'>
          <Card title='Total Income' amount={totalIncome} color='green' />
          <Card title='Total Expense' amount={totalExpenses} color='red' />
          <Card title='Savings' amount={netSavings} color='blue' />
        </div>

        <div className='grid grid-cols-1 sm:grid-cols-2 gap-6 mt-6'>
          <BarChart
            title='Expenses by Category'
            labels={expenseCategoryData.map((e) => e._id)}
            data={expenseCategoryData.map((e) => e.total)}
            color='rgba(255, 99, 132, 0.6)'
          />
          <BarChart
            title='Income by Source'
            labels={incomeSourceData.map((i) => i._id)}
            data={incomeSourceData.map((i) => i.total)}
            color='rgba(54, 162, 235, 0.6)'
          />
        </div>

        <div className='flex justify-center gap-6 pt-4'>
          <button
            onClick={() => navigate('/all-expenses')}
            className='bg-purple-600 hover:bg-purple-700 text-white px-6 py-2 rounded-lg transition'
          >
            View All Expenses
          </button>
          <button
            onClick={() => navigate('/all-incomes')}
            className='bg-indigo-600 hover:bg-indigo-700 text-white px-6 py-2 rounded-lg transition'
          >
            View All Incomes
          </button>
        </div>
      </div>
    </div>
  );
};

export default DashboardPage;
