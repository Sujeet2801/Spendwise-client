// components/BarChart.jsx
import { Bar } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  BarElement,
  CategoryScale,
  LinearScale,
  Tooltip,
  Legend,
} from 'chart.js';

ChartJS.register(BarElement, CategoryScale, LinearScale, Tooltip, Legend);

const BarChart = ({ title, labels, data, color }) => {
  const chartData = {
    labels,
    datasets: [
      {
        label: title,
        data,
        backgroundColor: color || 'rgba(75, 192, 192, 0.6)',
        borderRadius: 6,
      },
    ],
  };

  return (
    <div className='bg-white shadow-md rounded-2xl p-4'>
      <h2 className='text-lg font-semibold mb-2 text-gray-700'>{title}</h2>
      <Bar data={chartData} />
    </div>
  );
};

export default BarChart;
