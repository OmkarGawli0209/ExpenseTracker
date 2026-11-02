import React from 'react'
import { useExpense } from "../components/context/expenseContext"

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
  const{expenses}=useExpense();
  
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
    <div className='flex  justify-center items-center my-6'>
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

  


      

    </div>
  )
}

export default Chart