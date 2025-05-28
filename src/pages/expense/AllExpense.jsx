import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { getAllExpenses, deleteExpense } from '../../service/Api.js';

function AllExpense() {
  const [expenses, setExpenses] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    fetchExpenses();
  }, []);

  const fetchExpenses = async () => {
    try {
      const res = await getAllExpenses();
      setExpenses(res.data.data || []);
    } catch (err) {
      console.error('Error fetching expenses:', err);
      setError('Failed to load expenses.');
    } finally {
      setLoading(false);
    }
  };

  const handleDelete = async (id) => {
    const confirm = window.confirm('Are you sure you want to delete this expense?');
    if (!confirm) return;

    try {
      await deleteExpense(id);
      setExpenses((prev) => prev.filter((expense) => expense._id !== id));
    } catch (err) {
      console.error('Delete failed:', err);
      alert('Failed to delete the expense.');
    }
  };

  const handleEdit = (id) => {
    navigate(`/edit-expense/${id}`);
  };

  if (loading) {
    return <p className='text-center mt-10 text-lg text-gray-600'>Loading...</p>;
  }

  if (error) {
    return <p className='text-center mt-10 text-red-600'>{error}</p>;
  }

  return (
    <div className='max-w-5xl mx-auto mt-20 p-6 space-y-4'>
      <h1 className='text-2xl font-bold text-gray-800 mb-6'>All Expenses</h1>

      {expenses.length === 0 ? (
        <p className='text-gray-600'>No expenses found.</p>
      ) : (
        expenses.map((expense) => (
          <div
            key={expense._id}
            className='bg-white p-4 rounded-lg shadow-md border-l-4 border-red-500'
          >
            <div className='flex justify-between items-center mb-2'>
              <span className='font-semibold text-lg text-gray-800'>₹{expense.amount}</span>
              <span className='text-sm text-gray-500'>
                {new Date(expense.createdAt).toLocaleDateString('en-IN', {
                  year: 'numeric',
                  month: 'short',
                  day: 'numeric',
                })}
              </span>
            </div>

            <div className='text-gray-700 mb-1'>
              <strong>Category:</strong> {expense.category}
            </div>
            <div className='text-gray-600 text-sm mb-2'>
              <strong>Notes:</strong> {expense.notes || 'N/A'}
            </div>

            <div className='flex gap-3'>
              <button
                onClick={() => handleEdit(expense._id)}
                className='bg-blue-500 text-white px-3 py-1 rounded hover:bg-blue-600 transition'
              >
                Edit
              </button>
              <button
                onClick={() => handleDelete(expense._id)}
                className='bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600 transition'
              >
                Delete
              </button>
            </div>
          </div>
        ))
      )}
    </div>
  );
}

export default AllExpense;
