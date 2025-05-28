import { useEffect, useState } from 'react';
import { getAllIncome } from '../../service/Api.js';

function AllIncome() {
  const [incomes, setIncomes] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchIncomes = async () => {
      try {
        const res = await getAllIncome();
        console.log(res);
        setIncomes(res.data.data || []);
      } catch (error) {
        console.error('Fetch income error:', error);
        setError('Failed to load income data.');
      } finally {
        setLoading(false);
      }
    };
    fetchIncomes();
  }, []);

  if (loading) {
    return <p className='text-center mt-10 text-lg text-gray-600'>Loading...</p>;
  }

  if (error) {
    return <p className='text-center mt-10 text-red-600'>{error}</p>;
  }

  return (
    <div className='max-w-5xl mx-auto mt-20 p-6 space-y-4'>
      <h1 className='text-2xl font-bold text-gray-800 mb-6'>All Income</h1>

      {incomes.length === 0 ? (
        <p className='text-gray-600'>No income records found.</p>
      ) : (
        incomes.map((income) => (
          <div
            key={income._id}
            className='bg-white p-4 rounded-lg shadow-md border-l-4 border-green-500'
          >
            <div className='flex justify-between items-center mb-2'>
              <span className='font-semibold text-lg text-gray-800'>₹{income.amount}</span>
              <span className='text-sm text-gray-500'>
                {new Date(income.createdAt).toLocaleDateString('en-IN', {
                  year: 'numeric',
                  month: 'short',
                  day: 'numeric',
                })}
              </span>
            </div>

            <div className='text-gray-700 mb-1'>
              <strong>Source:</strong> {income.source}
            </div>
            <div className='text-gray-600 text-sm'>
              <strong>Notes:</strong> {income.notes || 'N/A'}
            </div>
          </div>
        ))
      )}
    </div>
  );
}

export default AllIncome;
