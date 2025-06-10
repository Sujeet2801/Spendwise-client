import { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { updateExpense, getAllExpenses } from '../../service/Api.js';

function EditExpense() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [expense, setExpense] = useState({ amount: '', category: '', notes: '' });
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    fetchExpense();
  }, []);

  const fetchExpense = async () => {
    try {
      const res = await getAllExpenses();
      const found = res.data.data.find((e) => e._id === id);
      if (!found) {
        setError('Expense not found.');
        return;
      }
      setExpense({
        amount: found.amount,
        category: found.category,
        notes: found.notes || '',
      });
    } catch (err) {
      console.error('Failed to fetch expense:', err);
      setError('Error fetching expense data.');
    } finally {
      setLoading(false);
    }
  };

  const handleChange = (e) => {
    setExpense({ ...expense, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await updateExpense(id, expense);
      alert('Expense updated successfully');
      navigate('/all-expenses');
    } catch (err) {
      console.error('Update failed:', err);
      alert('Failed to update expense.');
    }
  };

  if (loading) return <p className='text-center mt-10 text-lg text-gray-600'>Loading...</p>;
  if (error) return <p className='text-center mt-10 text-red-600'>{error}</p>;

  return (
    <div className='max-w-xl mx-auto mt-20 p-6 bg-white rounded shadow'>
      <h1 className='text-2xl font-bold mb-6 text-gray-800'>Edit Expense</h1>
      <form onSubmit={handleSubmit} className='space-y-4'>
        <div>
          <label className='block text-gray-700 font-medium mb-1'>Amount (₹)</label>
          <input
            type='number'
            name='amount'
            value={expense.amount}
            onChange={handleChange}
            required
            className='w-full px-4 py-2 border rounded focus:outline-none focus:ring focus:border-blue-500'
          />
        </div>

        <div>
          <label className='block text-gray-700 font-medium mb-1'>Category</label>
          <input
            type='text'
            name='category'
            value={expense.category}
            onChange={handleChange}
            required
            className='w-full px-4 py-2 border rounded focus:outline-none focus:ring focus:border-blue-500'
          />
        </div>

        <div>
          <label className='block text-gray-700 font-medium mb-1'>Notes</label>
          <textarea
            name='notes'
            value={expense.notes}
            onChange={handleChange}
            rows='3'
            className='w-full px-4 py-2 border rounded focus:outline-none focus:ring focus:border-blue-500'
          />
        </div>

        <button
          type='submit'
          className='bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition'
        >
          Update Expense
        </button>
      </form>
    </div>
  );
}

export default EditExpense;
