import React from 'react'
import {
  PieChart,
  Pie,
  Tooltip,
  Legend,
  BarChart,
  CartesianGrid,
  XAxis,YAxis,Bar
} from "recharts";
const Chart = () => {
  const data = [
    {name:"Food", value:5000,fill:"#0088FE"},
    {name:"Transport",value:200,fill:"#00C49F"},
     { name: "Shopping", value: 3000 ,fill:"#FFBB28"},
  { name: "Bills", value: 4000, fill:"#FF8042"},
  ];
  const COLORS = [
  "#0088FE",
  "#00C49F",
  "#FFBB28",
  "#FF8042",
];
const data2= [
  { month: "Jan", expenses: 5000 },
  { month: "Feb", expenses: 7000 },
  { month: "Mar", expenses: 4000 },
  { month: "Apr", expenses: 8000 },
  { month: "May", expenses: 6000 },
];

  return (
    <div className='flex  justify-evenly'>
   <PieChart width={400} height={300}>
      <Pie
        data={data}
        dataKey="value"
        nameKey="name"
        cx="50%"
        cy="50%"
        outerRadius={120}
       
     />
      
    




     

      <Tooltip />// This gives you information when you hover over a slice.
     
      <Legend />// labels
    </PieChart>

  <BarChart width={500} height={300} data={data2}>
      <CartesianGrid strokeDasharray="3 3" />

      <XAxis dataKey="month" />

      <YAxis />

      <Tooltip />

      <Bar
        dataKey="expenses"
        fill="#8884d8"
      />
    </BarChart>


      

    </div>
  )
}

export default Chart