const Card = ({ title, amount, color }) => {
  const textColor = {
    green: 'text-green-700',
    red: 'text-red-700',
    blue: 'text-blue-700',
  };

  return (
    <div className='rounded-2xl shadow-md p-6 bg-white'>
      <h2 className='text-xl font-semibold text-gray-700'>{title}</h2>
      <p className={`text-2xl font-bold ${textColor[color]}`}>₹ {amount.toFixed(2)}</p>
    </div>
  );
};

export default Card;
