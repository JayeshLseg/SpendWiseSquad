import React, { useState, useEffect } from "react";
import { easeIn, motion } from "framer-motion";
import { Doughnut } from "react-chartjs-2";
import Chart from 'chart.js/auto';

function Dashboard() {
  const [chartData, setChartData] = useState(null);
  const [dateInfo, setDateInfo] = useState({ numDays: 0, months: [] });
  const [selectedMonth, setSelectedMonth] = useState('');
  const [expenditureData, setExpenditureData] = useState({ total: 0, categoryWise: {} });

  const monthlyIncome = 300000; // Monthly income set to 3 lac
  const budgetSlab = {
    "Rent": 30,
    "Groceries": 15,
    "Transport": 10,
    "Utilities": 10,
    "Dining Out": 8,
    "Entertainment": 7,
    "Miscellaneous": 10,
    "Savings": 10
  };

  useEffect(() => {
    fetch('../../generated_data.json')
      .then(response => response.json())
      .then(data => {
        const categories = ["entertainment", "groceries", "transport", "dining out", "utilities", "miscellaneous"];
        const transactionDates = data.map(transaction => new Date(transaction["Transaction Date"]));
        const numDays = (Math.max(...transactionDates) - Math.min(...transactionDates)) / (1000 * 60 * 60 * 24) + 1;
        const months = [...new Set(transactionDates.map(date => date.toLocaleString('default', { month: 'long' })))];

        setDateInfo({ numDays, months });
        setSelectedMonth(months[0]); // Set the initial selected month

        const categoryAmounts = categories.map(category => {
          return data
            .filter(transaction => transaction.Category.toLowerCase() === category)
            .reduce((sum, transaction) => sum + transaction.Amount, 0);
        });

        const formattedData = {
          labels: categories,
          datasets: [
            {
              data: categoryAmounts,
              backgroundColor: ["#FF6384", "#36A2EB", "#FFCE56", "#4BC0C0", "#9966FF", "#FF9F40", "#FFCD56"],
              hoverBackgroundColor: ["#FF6384", "#36A2EB", "#FFCE56", "#4BC0C0", "#9966FF", "#FF9F40", "#FFCD56"],
            },
          ],
        };
        setChartData(formattedData);

        // Calculate total and category-wise expenditure
        const totalExpenditure = categoryAmounts.reduce((sum, amount) => sum + amount, 0);
        const categoryWiseExpenditure = categories.reduce((acc, category, index) => {
          acc[category] = Math.round(categoryAmounts[index]);
          return acc;
        }, {});
        setExpenditureData({ total: Math.round(totalExpenditure), categoryWise: categoryWiseExpenditure });
      })
      .catch(error => console.error('Error fetching data:', error));
  }, []);

  useEffect(() => {
    const fetchData = (url) => {
      fetch(url)
        .then(response => response.json())
        .then(data => {
          const categories = ["entertainment", "groceries", "transport", "dining out", "utilities", "miscellaneous"];
          const filteredData = data.filter(transaction => {
            const transactionDate = new Date(transaction["Transaction Date"]);
            return transactionDate.toLocaleString('default', { month: 'long' }) === selectedMonth;
          });

          const categoryAmounts = categories.map(category => {
            return filteredData
              .filter(transaction => transaction.Category.toLowerCase() === category)
              .reduce((sum, transaction) => sum + transaction.Amount, 0);
          });

          const formattedData = {
            labels: categories,
            datasets: [
              {
                data: categoryAmounts,
                backgroundColor: ["#FF6384", "#36A2EB", "#FFCE56", "#4BC0C0", "#9966FF", "#FF9F40", "#FFCD56"],
                hoverBackgroundColor: ["#FF6384", "#36A2EB", "#FFCE56", "#4BC0C0", "#9966FF", "#FF9F40", "#FFCD56"],
              },
            ],
          };
          setChartData(formattedData);

          // Calculate total and category-wise expenditure
          const totalExpenditure = categoryAmounts.reduce((sum, amount) => sum + amount, 0);
          const categoryWiseExpenditure = categories.reduce((acc, category, index) => {
            acc[category] = Math.round(categoryAmounts[index]);
            return acc;
          }, {});
          setExpenditureData({ total: Math.round(totalExpenditure), categoryWise: categoryWiseExpenditure });

          // Check for budget slab exceedance
          Object.keys(budgetSlab).forEach(category => {
            if (categoryWiseExpenditure[category] > (budgetSlab[category] / 100) * monthlyIncome) {
              alert(`Alert! Your expenditure on ${category} exceeds the budget slab of ${budgetSlab[category]}% of your total income.`);
            }
          });
        })
        .catch(error => console.error('Error fetching data:', error));
    };

    if (selectedMonth === "Predict for Next Month") {
      fetchData('/predict');
    } else if (selectedMonth) {
      fetchData('../../generated_data.json');
    }
  }, [selectedMonth]);

  return (
    <div id="dashboard" className="w-full relative bg-green-400">
      <div className="max-w-7xl mx-auto py-10 px-5 sm:px-10 ">
        <h3 className="text-9xl mt-4 sm:ml-13 overflow-hidden">
          <motion.span
            initial={{ rotate: 90, y: "40%", opacity: 0 }}
            whileInView={{ rotate: 0, y: 0, opacity: 1 }}
            transition={{ easeIn, duration: 0.5, delay: 1 * 0.3 }}
            className="inline-block origin-left"
          >
            My Dashboard
          </motion.span>
        </h3>
        <p className="mt-4 leading-none tracking-normal sm:ml-13">
          Get a quick snapshot of your spending habits. Make smarter financial decisions today!
        </p>
        <p className="mt-10 text-2xl leading-none tracking-normal sm:ml-13">
          The data spans {dateInfo.numDays} days and includes the following months: {dateInfo.months.join(', ')}.
        </p>
        <div className="mt-10 w-full text-white flex flex-row">
          <div className="w-1/2 mt-10">
            <label htmlFor="month-select" className="block text-xl mb-2">Select Month:</label>
            <select
              id="month-select"
              value={selectedMonth}
              onChange={(e) => setSelectedMonth(e.target.value)}
              className="text-black p-2 rounded"
            >
              {dateInfo.months.map((month, index) => (
                <option key={index} value={month}>{month}</option>
              ))}
              <option value="Predict for Next Month">Predict for Next Month</option>
            </select>
            <div className="w-1/2 mt-10">
              {chartData ? <Doughnut data={chartData} /> : <p>Loading chart...</p>}
            </div>
          </div>
          <div className="w-1/2 mt-10">
            <h3 className="text-xl mb-4">Expenditure Summary</h3>
            <table className="table-auto w-full text-black">
              <thead>
                <tr>
                  <th className="px-4 py-2">Category</th>
                  <th className="px-4 py-2">Amount (₹)</th>
                </tr>
              </thead>
              <tbody>
                {Object.keys(expenditureData.categoryWise).map((category, index) => (
                  <tr key={index}>
                    <td className="border px-4 py-2">{category}</td>
                    <td className="border px-4 py-2">₹{expenditureData.categoryWise[category]}</td>
                  </tr>
                ))}
                <tr>
                  <td className="border px-4 py-2 font-bold">Total</td>
                  <td className="border px-4 py-2 font-bold">₹{expenditureData.total}</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;