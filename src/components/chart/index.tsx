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

const Chart= ({datas}:any) => {

  const data = datas;



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
