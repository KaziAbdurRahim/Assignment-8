// import React from 'react';
// import React, { PureComponent } from 'react';
import {
  ComposedChart,
  Line,
  Area,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from 'recharts';

import { useLoaderData } from 'react-router-dom';

const Graph = () => {
  const data = useLoaderData();

  return (
    <ResponsiveContainer width="100%" height={400} className={'border-2 rounded-lg shadow-md mb-5'}> 
      <ComposedChart
        data={data}
        margin={{
          top: 20,
          right: 20,
          bottom: 20,
          left: 20,
        }}
      >
        <CartesianGrid stroke="#f5f5f5" />
        <XAxis dataKey="product_title" scale="band" /> 
        <YAxis />
        <Tooltip />
        <Legend />
        <Area type="monotone" dataKey="price" fill="#8884d8" stroke="#8884d8" />
  <Bar dataKey="price" barSize={20} fill="#413ea0" /> 
  <Line type="monotone" dataKey="rating" stroke="#ff7300" /> 
       
      </ComposedChart>
    </ResponsiveContainer>
  );
};

export default Graph;
