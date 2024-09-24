import React from 'react';
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer
} from 'recharts';

const Chart= () => {
  const data = [
    { "date": "2024-09-18", "day": "Wednesday", "debit": 0, "credit": 0 },
    { "date": "2024-09-17", "day": "Tuesday", "debit": 0, "credit": 0 },
    { "date": "2024-09-16", "day": "Monday", "debit": 0, "credit": 0 },
    { "date": "2024-09-15", "day": "Sunday", "debit": 0, "credit": 0 },
    { "date": "2024-09-14", "day": "Saturday", "debit": 0, "credit": 0 },
    { "date": "2024-09-13", "day": "Friday", "debit": -20, "credit": 173.6 },
    { "date": "2024-09-12", "day": "Thursday", "debit": 0, "credit": 0 },
    { "date": "2024-07-31", "day": "Wednesday", "debit": 0, "credit": 8.8 },
    { "date": "2024-07-25", "day": "Thursday", "debit": 0, "credit": 40 },
    { "date": "2024-07-22", "day": "Monday", "debit": 0, "credit": 2 },
    { "date": "2024-07-15", "day": "Monday", "debit": 0, "credit": 0.4 },
    { "date": "2024-07-09", "day": "Tuesday", "debit": 0, "credit": 250 },
    { "date": "2024-07-05", "day": "Friday", "debit": 0, "credit": 58 },
    { "date": "2024-07-04", "day": "Thursday", "debit": 0, "credit": 68.8 },
    { "date": "2024-06-26", "day": "Wednesday", "debit": 0, "credit": 2.4 },
    { "date": "2024-06-25", "day": "Tuesday", "debit": 0, "credit": 0.4 },
    { "date": "2024-06-22", "day": "Saturday", "debit": 0, "credit": 4.8 },
    { "date": "2024-06-01", "day": "Saturday", "debit": -2, "credit": 0 },
    { "date": "2024-05-31", "day": "Friday", "debit": -74.3, "credit": 60 },
    { "date": "2024-05-29", "day": "Wednesday", "debit": -12, "credit": 4.8 },
    { "date": "2024-05-28", "day": "Tuesday", "debit": -45, "credit": 88.2 },
    { "date": "2024-05-27", "day": "Monday", "debit": -8, "credit": 14.4 },
    { "date": "2024-05-26", "day": "Sunday", "debit": -126, "credit": 0 },
    { "date": "2024-05-24", "day": "Friday", "debit": 0, "credit": 124.8 },
    { "date": "2024-05-22", "day": "Wednesday", "debit": 0, "credit": 36 }
  ];


  const last7DaysData = data.slice(0, 7).reverse(); // Take only the last 7 entries and reverse them for chronological order

  const transformedData = last7DaysData.map(item => ({
    ...item,
    debit: Math.abs(item.debit), // convert debit to absolute value for display
  }));

  return (
    <ResponsiveContainer width="100%" height={400}>
      <BarChart data={transformedData} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
        <CartesianGrid strokeDasharray="3 3" />
   
        <XAxis dataKey="day" />
        <YAxis />
        <Tooltip />
        <Legend />
      
        <Bar dataKey="debit" name="Debit" fill="#ff7300" />
        <Bar dataKey="credit" name="Credit" fill="#387908" />
      </BarChart>
    </ResponsiveContainer>
  );
}

export default Chart;
