import React from 'react';
import { RadialBarChart, RadialBar, Legend, ResponsiveContainer } from 'recharts';

const style = {
    top: 0,
    right: 0,
    lineHeight: '24px',
  };

const RenderRadialChart = ({ data }) => (
  <ResponsiveContainer>
    <RadialBarChart data={data} cy="60%">
      <RadialBar minAngle={15} label={{ position: 'insideStart', fill: '#fff' }} background clockWise dataKey="number of deaths" />
      <Legend iconSize={10} verticalAlign="top" align="center" />
    </RadialBarChart>
    </ResponsiveContainer>
    
);


export default RenderRadialChart

