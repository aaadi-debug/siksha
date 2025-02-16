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

const PointBar = ({ data, barConfig, lineConfig }) => {
    return (
        <ResponsiveContainer width="100%" height={400}>
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
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Legend />

                {/* Render bars dynamically */}
                {barConfig.map((bar, index) => (
                    <Bar key={index} dataKey={bar.dataKey} barSize={20} fill={bar.color} />
                ))}

                {/* Render lines dynamically */}
                {lineConfig && lineConfig.map((line, index) => (
                    <Line key={index} type="monotone" dataKey={line.dataKey} stroke={line.color} />
                ))}
            </ComposedChart>
        </ResponsiveContainer>
    );
};

export default PointBar;
