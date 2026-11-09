import React from 'react'
import { useExpense } from "../components/context/expenseContext"

import {
  PieChart,
  Pie,
  Tooltip,
  Legend,
  BarChart,
  CartesianGrid,
  XAxis,YAxis,Bar,ResponsiveContainer
} from "recharts";
const Chart = () => {
  const{expenses}=useExpense();
  const MonthlyExpenses=expenses.reduce((acc,expense)=>{
    let month = new Date(expense.date).toLocaleString("en-US",{month:"long"});
    acc[month] = (acc[month] || 0) + Number(expense.amount);
    return acc;

  },{});
  const monthlyData = Object.entries(MonthlyExpenses).map(
([month, total]) => ({
month,
total,
})
);
  
  const COLORS = [
  "#6366F1", // Indigo
  "#EC4899", // Pink
  "#F59E0B", // Amber
  "#10B981", // Emerald
  "#3B82F6", // Blue
  "#8B5CF6", // Purple
  "#EF4444"  // Red
];


  
    if(!expenses || expenses.length === 0){
      return(
        <div className='flex justify-center items-center p-8 text-red-500 font-bold text-2xl'>
          No Expenses Added Yet To Display Chart...
        </div>
      )
    }

    const chartdata = expenses.map((item,index)=>({
      ...item,
      fill:COLORS[index % COLORS.length]
    }));
    return (
    <div className=' my-6 grid grid-cols-1 lg:grid-cols-2 gap-6'>
      <div className='bg-white rounded-xl p-5 shadow-sm'>
        <h2 className='text-lg font-bold mb-4'>Expenses By Category</h2>
       <ResponsiveContainer width={"100%"} height={300}>

       
        <PieChart width={400} height={300}>
      <Pie
        data={chartdata}
        dataKey="amount"
        nameKey="category"
        cx="50%"
        cy="50%"
        outerRadius={120}
        
        innerRadius={60}
        
     />
      <Tooltip />
     
      <Legend />
    </PieChart>
    </ResponsiveContainer>


      </div>
     <div className='bg-white rounded-xl p-5 shadow-sm'>
      <h2 className='text-lg font-bold mb-4'>Monthly Expenses</h2>
     <ResponsiveContainer width={"100%"} height={300}>
<BarChart data={monthlyData}>
        <CartesianGrid strokeDasharray="3 3" />

        <XAxis dataKey="month" />
        <YAxis />

        <Tooltip />

        <Bar
          dataKey="total"
          barSize={50}
          fill="#6366F1"
          radius={[6, 6, 0, 0]}
        />
      </BarChart>


     </ResponsiveContainer>



     </div>

  


      

    </div>
  )
}

export default Chart