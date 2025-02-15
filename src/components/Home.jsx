import React from 'react';
import Adphoto from '../../src/images/Ad.png';
import Book from '../../src/images/book.png';
import Photo1 from '../../src/images/Home_image1.jpg';
import Photo2 from '../../src/images/Home_image2.png';

function Home() {

  const redirectToLink = () => {
    const externalLink =
      "https://www.lifehack.org/articles/featured/an-introduction-to-expense-tracking.html"; // Replace with your external link
    window.open(externalLink, "_blank");
  };

  const article2 = () => {
    const externalLink = "https://ieeexplore.ieee.org/document/8628070";
    window.open(externalLink, "_blank");
  };

  const article3 = () => {
    const externalLink =
      "https://www.freshbooks.com/hub/accounting/expense-tracking";
    window.open(externalLink, "_blank");
  };

  return (
    <>
      {/* Ad Banner */}
      <div className="w-full flex justify-center">
        <img src={Adphoto} alt="Ad" className="w-full max-w-[1300px] h-auto md:h-[400px]" />
      </div>

      {/* Section Title */}
      <div className="text-center py-10">
        <h2 className="text-2xl md:text-3xl font-bold">The Tools for Your Goals</h2>
        <p>Spend less to save more, invest in your dreams, and secure a brighter future. Your financial discipline sets a powerful example for others</p>
      </div>

      {/* Features Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 px-4 md:px-10">

        {/* Feature Box 1 */}
        <div className=" p-6 rounded-lg shadow-lg text-center">
          <img src={Book} alt="Book" className="w-16 mx-auto mb-4" />
          <h3 className="text-lg font-semibold">Learn. Track. Improve.</h3>
          <p className="mt-2">
            Keeping a digital diary helps you understand your habits and
            increases your likelihood of hitting your goals.
          </p>
        </div>

        {/* Feature Box 2 */}
        <div className="p-6 rounded-lg shadow-lg text-center">
          <img src={Book} alt="Book" className="w-16 mx-auto mb-4" />
          <h3 className="text-lg font-semibold">Read Articles.</h3>
          <p className="mt-2">
            Track expenses effortlessly with our website – financial clarity,
            budgeting made simple, and a brighter financial future.
          </p>
        </div>

        {/* Feature Box 3 */}
        <div className="p-6 rounded-lg shadow-lg text-center">
          <img src={Book} alt="Book" className="w-16 mx-auto mb-4" />
          <h3 className="text-lg font-semibold">Stay Motivated.</h3>
          <p className="mt-2">
            Track your expenses with us and stay motivated on your financial journey.
          </p>
        </div>
      </div>

      <hr className="my-10 border-gray-300" />

      <div className="text-center py-10">
        <h2 className="text-2xl md:text-3xl font-bold">Article & Inspiration</h2>
        <p>"Track expenses efficiently with our articles, gain financial control,
        and make smarter money decisions effortlessly."</p>
      </div>

      {/* Section 1 */}
      <div className="flex flex-col md:flex-row items-center gap-8 md:gap-16">
        <div className="md:w-7/12">
          <h2 className="text-2xl md:text-3xl font-bold leading-tight">
            What is Expense Tracking? How Will it Help Your Business?
          </h2>
          <p className="mt-4 text-lg text-gray-700">
            Expense tracking involves monitoring, recording, and analyzing all
            financial expenditures within a business. It helps businesses manage
            costs, identify areas for savings, and make informed decisions for
            improved financial health and profitability.
          </p>
          <button
            className="bg-blue-500 text-white py-2 px-4 rounded-lg mt-4 hover:bg-blue-600 transition-colors"
            onClick={article3}
          >
            Read here
          </button>
        </div>
        <div className="md:w-5/12">
          <img src={Photo1} alt="Expense Tracking" className="w-full h-auto rounded-lg shadow-lg" />
        </div>
      </div>

      <hr className="my-10 border-gray-300" />

      {/* Section 2 */}
      <div className="flex flex-col-reverse md:flex-row items-center gap-8 md:gap-16">
        <div className="md:w-5/12">
          <img src={Photo2} alt="Smart Tracking" className="w-full h-auto rounded-lg shadow-lg" />
        </div>
        <div className="md:w-7/12">
          <h2 className="text-2xl md:text-3xl font-bold leading-tight">
            A Smart Approach to Track Everyday Expense.
          </h2>
          <p className="mt-4 text-lg text-gray-700">
            Tracking everyday expenses is a smart financial practice that
            involves monitoring and recording daily spending. This approach
            enables better budgeting, financial awareness, and achieving
            long-term financial goals.
          </p>
          <button
            className="bg-blue-500 text-white py-2 px-4 rounded-lg mt-4 hover:bg-blue-600 transition-colors"
            onClick={article2}
          >
            Read here
          </button>
        </div>
      </div>

      <hr className="my-10 border-gray-300" />

      {/* Section 3 */}
      <div className="flex flex-col md:flex-row items-center gap-8 md:gap-16">
        <div className="md:w-7/12">
          <h2 className="text-2xl md:text-3xl font-bold leading-tight">
            An Introduction to Expense Tracking.
          </h2>
          <p className="mt-4 text-lg text-gray-700">
            Expense tracking is the art of monitoring and recording your
            financial transactions. It empowers individuals and businesses to
            gain control over their spending, make informed financial decisions,
            and achieve their savings goals.
          </p>
          <button
            className="bg-blue-500 text-white py-2 px-4 rounded-lg mt-4 hover:bg-blue-600 transition-colors"
            onClick={redirectToLink}
          >
            Read here
          </button>
        </div>
        <div className="md:w-5/12">
          <img src={Photo1} alt="Expense Tracking" className="w-full h-auto rounded-lg shadow-lg" />
        </div>
      </div>

      <hr className="my-10 border-gray-300" />

    </>
  );
}

export default Home;
