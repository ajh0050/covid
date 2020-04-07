import React from 'react';
import { RadialBarChart, RadialBar, Legend, Tooltip } from 'recharts';

const style = {
    top: 0,
    left: 700,
    lineHeight: '24px',
  };

const RenderRadialChart = ({ data }) => (
<RadialBarChart width={700} height={700} cx={300} cy={300} innerRadius={40} outerRadius={280} barSize={20} data={data}>
        <RadialBar minAngle={15} label={{ position: 'insideStart', fill: '#fff' }} background clockWise dataKey="number of deaths" />
        <Legend iconSize={10} width={120} height={140} layout="vertical" verticalAlign="middle" wrapperStyle={style} />
    </RadialBarChart>
);


export default RenderRadialChart