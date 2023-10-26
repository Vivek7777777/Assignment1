import { 
    PieChart,
    Pie,
    ResponsiveContainer
} from "recharts";

const Piechart = ({correctAnswer}) => {

    let restans = 15 - correctAnswer;

    const data02 = [
        {
            "name": "Group A",
            "value": restans,
            fill: '#ecf3fe'
        },
        {
            "name": "Group B",
            "value": correctAnswer,
            fill: '#438af6'
        },
    ];

    return(
        <ResponsiveContainer width="100%" height={295}>
            <PieChart className="piechart" width={300} height={250}>
                <Pie data={data02} dataKey="value" nameKey="name" cx="50%" cy="50%" innerRadius={60} outerRadius={90} label />
            </PieChart>
        </ResponsiveContainer>
    )
}


export default Piechart;