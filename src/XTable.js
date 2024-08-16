// XTable.js
import React, { useState } from 'react';

const XTable = () => {
  // Initial state containing the data
  const [data, setData] = useState([
    { date: "2022-09-01", views: 100, article: "Article 1" },
    { date: "2023-09-01", views: 100, article: "Article 1" },
    { date: "2023-09-02", views: 150, article: "Article 2" },
    { date: "2023-09-02", views: 120, article: "Article 3" },
    { date: "2020-09-03", views: 200, article: "Article 4" },
  ]);

  // Function to sort by date and then by views if the date is the same
  const sortByDate = () => {
    const sortedData = [...data].sort((a, b) => {
      if (a.date === b.date) {
        return b.views - a.views; // Sort by views if dates are the same
      }
      return new Date(b.date) - new Date(a.date); // Sort by date (latest first)
    });
    setData(sortedData);
  };

  // Function to sort by views and then by date if views are the same
  const sortByViews = () => {
    const sortedData = [...data].sort((a, b) => {
      if (a.views === b.views) {
        return new Date(b.date) - new Date(a.date); // Sort by date if views are the same
      }
      return b.views - a.views; // Sort by views (highest first)
    });
    setData(sortedData);
  };

  return (
    <div>
      <h1>Date and Views Table</h1>
      {/* Buttons to sort the table */}
      <button onClick={sortByDate}>Sort by Date</button>
      <button onClick={sortByViews}>Sort by Views</button>
      
      {/* Table rendering */}
      <table border="1" cellPadding="5" cellSpacing="0">
        <thead>
          <tr>
            <th>Date</th>
            <th>Views</th>
            <th>Article</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item, index) => (
            <tr key={index}>
              <td>{item.date}</td>
              <td>{item.views}</td>
              <td>{item.article}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default XTable;
