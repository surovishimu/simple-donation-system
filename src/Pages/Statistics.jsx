import { useEffect, useState } from "react";
import { PieChart, Pie, Cell } from "recharts";


const Statistics = () => {
    const [myDonation, setMyDonation] = useState([]);
    useEffect(() => {
        const card = JSON.parse(localStorage.getItem("cardList"));
        setMyDonation(card);
    }, [])

    let donate = 0;
    if (myDonation) {
        donate = myDonation.length;
    }
    // const arrayLength = (myDonation.length);
    // const devidedLength = arrayLength / 12;

    const data = [
        { name: "Group A", value: 12 - donate },
        { name: "Group B", value: donate },

    ];
    const COLORS = ['#00C49F', '#FF444A'];
    const RADIAN = Math.PI / 180;
    const renderCustomizedLabel = ({ cx, cy, midAngle, innerRadius, outerRadius, percent, index }) => {
        const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
        const x = cx + radius * Math.cos(-midAngle * RADIAN);
        const y = cy + radius * Math.sin(-midAngle * RADIAN);

        return (
            <text className="text-lg font-semibold" x={x} y={y} fill="white" textAnchor={x > cx ? 'start' : 'end'} dominantBaseline="central">
                {`${(percent * 100).toFixed(0)}%`}
            </text>
        );
    };


    return (
        <div>
            <PieChart width={400} height={400} className="mx-auto">
                <Pie
                    data={data}
                    cx={200}
                    cy={200}
                    labelLine={false}
                    label={renderCustomizedLabel}
                    outerRadius={150}
                    fill="#8884d8"
                    dataKey="value"
                    strokeWidth={4}
                >
                    {data.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                    ))}
                </Pie>
            </PieChart>
            <div className="flex gap-4 md:gap-10 justify-center items-center">
                <div className="flex flex-row-reverse justify-center items-center gap-0 md:gap-2">
                    <div className="w-[80px] md:w-[100px] h-[12px] bg-[#00C49F]"></div>
                    <div><h1 className="font-semibold text-xs md:text-lg">Your Donation</h1></div>
                </div>
                <div className="flex flex-row-reverse justify-center items-center gap-0 md:gap-2">
                    <div className="w-[80px] md:w-[100px] h-[12px] bg-[#FF444A]"></div>
                    <div><h1 className="font-semibold text-xs md:text-lg ">Total Donation</h1></div>
                </div>
            </div>
        </div>
    );
};

export default Statistics;