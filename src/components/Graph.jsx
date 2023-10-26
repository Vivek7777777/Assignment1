import {
    LineChart,
    CartesianGrid,
    XAxis,
    YAxis,
    Tooltip,
    Line,
    ReferenceDot,
    ResponsiveContainer
} from 'recharts';
import { CustomizedProps } from 'recharts';


const Lineargraph = ({ percent }) => {

    const data = [
        {
            "name": "0%",
            "uv": 4000,
            "pv": 2400,
            "amt": 240
        },
        {
            "name": "20%",
            "uv": 3000,
            "pv": 1398,
            "amt": 2210
        },
        {
            "name": "40%",
            "uv": 2000,
            "pv": 9800,
            "amt": 229
        },
        {
            "name": "60%",
            "uv": 2780,
            "pv": 3908,
            "amt": 200
        },
        {
            "name": "80%",
            "uv": 1890,
            "pv": 7900,
            "amt": 218
        },
        {
            "name": "100%",
            "uv": 2390,
            "pv": 3800,
            "amt": 500
        }
    ]

    return (
        <div className="linegraph">
            <ResponsiveContainer width="100%" height={295}>
                <LineChart data={data} margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
                    <XAxis dataKey="name" tickLine={false} />
                    <Tooltip cursor={{ strokeWidth: 2, strokeDasharray: "5 5" }} />
                    <ReferenceDot r={20} fill="red" stroke="none" />
                    <Line type="monotone" dataKey="pv" stroke="#8884d8" dot={false} />
                </LineChart>
            </ResponsiveContainer>
        </div>
    )
};


export default Lineargraph;