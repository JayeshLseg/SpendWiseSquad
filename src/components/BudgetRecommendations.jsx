import React from 'react';
import { easeIn, motion } from 'framer-motion';
import { Pie } from 'react-chartjs-2';

const data = {
  labels: ['Rent', 'Groceries', 'Transport', 'Utilities', 'Dining Out', 'Entertainment', 'Miscellaneous', 'Savings'],
  datasets: [
    {
      label: 'Ideal Spending',
      data: [30, 15, 10, 10, 8, 7, 10, 10],
      backgroundColor: [
        'rgba(255, 99, 132, 0.2)',
        'rgba(54, 162, 235, 0.2)',
        'rgba(255, 206, 86, 0.2)',
        'rgba(75, 192, 192, 0.2)',
        'rgba(153, 102, 255, 0.2)',
        'rgba(255, 159, 64, 0.2)',
        'rgba(199, 199, 199, 0.2)',
        'rgba(83, 102, 255, 0.2)',
      ],
      borderColor: [
        'rgba(255, 99, 132, 1)',
        'rgba(54, 162, 235, 1)',
        'rgba(255, 206, 86, 1)',
        'rgba(75, 192, 192, 1)',
        'rgba(153, 102, 255, 1)',
        'rgba(255, 159, 64, 1)',
        'rgba(199, 199, 199, 1)',
        'rgba(83, 102, 255, 1)',
      ],
      borderWidth: 1,
    },
  ],
};

const options = {
  responsive: true,
  plugins: {
    legend: {
      position: 'top',
    },
  },
};

function TransactionHistory() {
  return (
    <div className="w-full relative bg-zinc-900 text-white">
      <div className="max-w-7xl mx-auto py-10 px-5 sm:px-10 ">
        <h3 className="text-9xl mt-2 sm:ml-13 overflow-hidden">
          <motion.span
            initial={{ rotate: 90, y: '40%', opacity: 0 }}
            whileInView={{ rotate: 0, y: 0, opacity: 1 }}
            transition={{ easeIn, duration: 0.5, delay: 1 * 0.3 }}
            className="inline-block origin-left"
          >
            Smart Budgeting Tips
          </motion.span>
        </h3>
        <p className="mt-4 leading-none tracking-normal sm:ml-13">
          Save more, splurge smart, and enjoy life without the financial stress!
        </p>
        <div className="mt-10 w-full h-[100vh] bg-zinc-900 text-white flex justify-center items-center">
          <div className="w-full max-w-md mx-auto">
            <h2 className="text-center text-2xl font-semibold mb-4">Ideal Spending Chart</h2>
            <Pie data={data} options={options} />
          </div>
        </div>
        <div className="mt-10">
          <h3 className="text-2xl font-semibold mb-4">Ideal Spending Breakdown</h3>
          <table className="w-full text-left border-collapse">
            <thead>
              <tr>
                <th className="border-b-2 border-gray-300 py-2">Category</th>
                <th className="border-b-2 border-gray-300 py-2">Percentage</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border-b border-gray-300 py-2">Rent</td>
                <td className="border-b border-gray-300 py-2">30%</td>
              </tr>
              <tr>
                <td className="border-b border-gray-300 py-2">Groceries</td>
                <td className="border-b border-gray-300 py-2">15%</td>
              </tr>
              <tr>
                <td className="border-b border-gray-300 py-2">Transport</td>
                <td className="border-b border-gray-300 py-2">10%</td>
              </tr>
              <tr>
                <td className="border-b border-gray-300 py-2">Utilities</td>
                <td className="border-b border-gray-300 py-2">10%</td>
              </tr>
              <tr>
                <td className="border-b border-gray-300 py-2">Dining Out</td>
                <td className="border-b border-gray-300 py-2">8%</td>
              </tr>
              <tr>
                <td className="border-b border-gray-300 py-2">Entertainment</td>
                <td className="border-b border-gray-300 py-2">7%</td>
              </tr>
              <tr>
                <td className="border-b border-gray-300 py-2">Miscellaneous</td>
                <td className="border-b border-gray-300 py-2">10%</td>
              </tr>
              <tr>
                <td className="border-b border-gray-300 py-2">Savings</td>
                <td className="border-b border-gray-300 py-2">10%</td>
              </tr>
            </tbody>
          </table>
          <p className="mt-4">
            This table represents an ideal spending breakdown to help you manage your finances effectively. By allocating your income according to these categories, you can ensure that you cover all essential expenses while also saving for the future and enjoying some leisure activities.
          </p>
          
        </div>
      </div>
    </div>
  );
}

export default TransactionHistory;