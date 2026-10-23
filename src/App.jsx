import { useEffect, useState } from 'react'
import { ExpenseContextProvider } from './components/context/expenseContext';

import './App.css'
import Chart from './components/Chart'
import Header from './components/Header';
import { ExpenseInfo } from './components/ExpenseInfo';
import { Categorys } from './components/Categorys';

function App() {
  const[expenses,setExpenses]=useState([]);
  const [income,setIncome] = useState(0);
  const TotalExpense = expenses.reduce(
    (sum,expense)=> sum+ expenses.amount,0
  );
  const balance= income - TotalExpense;
  console.log(balance);
  console.log(TotalExpense);
 
  return (
    <>
    <ExpenseContextProvider value={{income,setIncome,TotalExpense,balance}}>
    <Header/>
    <ExpenseInfo />
   <Categorys/>
    </ExpenseContextProvider>
    
     </>
  )
}

export default App
