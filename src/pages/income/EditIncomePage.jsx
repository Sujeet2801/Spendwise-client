import { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { getAllIncome, updateIncome } from '../../service/Api.js';

function EditIncome() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [form, setForm] = useState({ amount: '', source: '', notes: '' });
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchIncome = async () => {
      try {
        const res = await getAllIncome();
        const income = res.data.data.find((item) => item._id === id);
        if (!income) {
          setError('Income record not found.');
          return;
        }
        setForm({
          amount: income.amount,
          source: income.source,
          notes: income.notes || '',
        });
      } catch (err) {
        console.error(err);
        setError('Error loading income data.');
      } finally {
        setLoading(false);
      }
    };

    fetchIncome();
  }, [id]);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await updateIncome(id, form);
      alert('Income updated!');
      navigate('/all-incomes');
    } catch (err) {
      console.error(err);
      alert('Failed to update income.');
    }
  };

  if (loading) return <p className="text-center mt-10 text-gray-600">Loading...</p>;
  if (error) return <p className="text-center mt-10 text-red-600">{error}</p>;

  return (
    <div className="max-w-xl mx-auto mt-20 p-6 bg-white rounded shadow">
      <h2 className="text-2xl font-bold mb-4 text-gray-800">Edit Income</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block text-sm text-gray-600 mb-1">Amount (₹)</label>
          <input
            type="number"
            name="amount"
            value={form.amount}
            onChange={handleChange}
            required
            className="w-full border px-3 py-2 rounded"
          />
        </div>
        <div>
          <label className="block text-sm text-gray-600 mb-1">Source</label>
          <input
            type="text"
            name="source"
            value={form.source}
            onChange={handleChange}
            required
            className="w-full border px-3 py-2 rounded"
          />
        </div>
        <div>
          <label className="block text-sm text-gray-600 mb-1">Notes</label>
          <textarea
            name="notes"
            value={form.notes}
            onChange={handleChange}
            rows="3"
            className="w-full border px-3 py-2 rounded"
          />
        </div>
        <button
          type="submit"
          className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700"
        >
          Update Income
        </button>
      </form>
    </div>
  );
}

export default EditIncome;
