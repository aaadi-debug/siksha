// This graph is for placement tab
import React from 'react';
import {
  ComposedChart,
  Line,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from 'recharts';

const placement = [
  {
    name: '2023',
    PPOs: 407,
    // pv: 800,
    // amt: 500,
  },
  {
    name: '2022',
    PPOs: 227,
    // pv: 967,
    // amt: 500,
  },
  {
    name: '2021',
    PPOs: 186,
    // pv: 1098,
    // amt: 500,
  },
  {
    name: '2020',
    PPOs: 170,
    // pv: 1200,
    // amt: 500,
  },
  {
    name: '2019',
    PPOs: 135,
    // pv: 1108,
    // amt: 500,
  },
  {
    name: '2018',
    PPOs: 114,
    // pv: 680,
    // amt: 500,
  },
  {
    name: '2017',
    PPOs: 73,
    // pv: 680,
    // amt: 500,
  },
];

const Graphs = () => {
    return (
        <ResponsiveContainer width="100%" height={400}>
            <ComposedChart
                data={placement}
                margin={{
                top: 20,
                right: 20,
                bottom: 20,
                left: 20,
                }}
            >
                <CartesianGrid stroke="#f5f5f5" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Bar dataKey="PPOs" barSize={20} fill="#3D52A0" />
                <Line type="monotone" dataKey="PPOs" stroke="#3D52A0" />
            </ComposedChart>
        </ResponsiveContainer>
    )
}

export default Graphs
