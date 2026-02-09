import React from 'react';
import { PieChart, Pie, Cell, ResponsiveContainer, Legend, Tooltip } from 'recharts';

const PortfolioChart = ({ allocation }) => {
  const data = allocation.map(asset => ({
    name: asset.name,
    value: asset.percentage,
    color: asset.color
  }));

  const CustomTooltip = ({ active, payload }) => {
    if (active && payload && payload.length) {
      return (
        <div className="bg-white px-4 py-2 rounded-lg shadow-lg border border-gray-200">
          <p className="font-semibold text-gray-800">{payload[0].name}</p>
          <p className="text-gray-600">{payload[0].value}%</p>
        </div>
      );
    }
    return null;
  };

  const CustomLegend = ({ payload }) => {
    return (
      <div className="flex flex-wrap justify-center gap-4 mt-6">
        {payload.map((entry, index) => (
          <div key={index} className="flex items-center">
            <div
              className="w-4 h-4 rounded-full mr-2"
              style={{ backgroundColor: entry.color }}
            ></div>
            <span className="text-sm text-gray-700">
              {entry.value} ({entry.payload.value}%)
            </span>
          </div>
        ))}
      </div>
    );
  };

  return (
    <div className="w-full h-80">
      <ResponsiveContainer width="100%" height="100%">
        <PieChart>
          <Pie
            data={data}
            cx="50%"
            cy="50%"
            labelLine={false}
            label={({ name, value }) => `${value}%`}
            outerRadius={100}
            fill="#8884d8"
            dataKey="value"
          >
            {data.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={entry.color} />
            ))}
          </Pie>
          <Tooltip content={<CustomTooltip />} />
          <Legend content={<CustomLegend />} />
        </PieChart>
      </ResponsiveContainer>
    </div>
  );
};

export default PortfolioChart;