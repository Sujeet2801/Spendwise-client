import { useState } from 'react';
import { addIncome } from '../../service/Api.js';
import { useNavigate } from 'react-router-dom';

const AddIncomePage = () => {
  const [formData, setFormData] = useState({
    source: '',
    amount: '',
    date: '',
    notes: '',
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const payload = { ...formData, amount: parseFloat(formData.amount) };
      await addIncome(payload);
      alert('Income added successfully');
      navigate('/dashboard');
    } catch (err) {
      console.error(err);
      alert('Failed to add income');
    }
  };

  return (
    <div
      className='pt-24 pb-6 bg-gradient-to-br from-purple-600 to-blue-500 flex items-center
    justify-center px-4'
    >
      <div className='max-w-md w-full bg-white rounded-xl shadow-2xl p-8'>
        <h2 className='text-3xl font-bold text-center text-gray-800 mb-6'>Add Income</h2>
        <form onSubmit={handleSubmit} className='space-y-5'>
          <input
            name='source'
            type='text'
            placeholder='Source'
            value={formData.source}
            onChange={handleChange}
            required
            className='w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none 
            focus:ring-2 focus:ring-purple-500'
          />
          <input
            name='amount'
            type='number'
            placeholder='Amount'
            value={formData.amount}
            onChange={handleChange}
            required
            className='w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none 
            focus:ring-2 focus:ring-purple-500'
          />
          <input
            name='date'
            type='date'
            value={formData.date}
            onChange={handleChange}
            required
            className='w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none 
            focus:ring-2 focus:ring-purple-500'
          />
          <textarea
            name='notes'
            placeholder='Notes (optional)'
            value={formData.notes}
            onChange={handleChange}
            className='w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none 
            focus:ring-2 focus:ring-purple-500'
          />
          <button
            type='submit'
            className='w-full bg-green-600 hover:bg-green-700 text-white font-semibold py-2 
            px-4 rounded-lg transition duration-300'
          >
            Add Income
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddIncomePage;
