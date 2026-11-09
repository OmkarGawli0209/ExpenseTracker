import { useEffect, useState } from 'react'
import { ExpenseContextProvider } from './components/context/expenseContext';

import './App.css'
import Chart from './components/Chart'
import Header from './components/Header';
import { ExpenseInfo } from './components/ExpenseInfo';
import { Categorys } from './components/Categorys';

function App() {
  const[expenses,setExpenses]=useState(()=>{
    const savedExpense = localStorage.getItem("expenses");
    return savedExpense ? JSON.parse(savedExpense) :[];
  });
  const [income,setIncome] = useState(()=>{
    const savedIncome = localStorage.getItem("income");
    return savedIncome ? JSON.parse(savedIncome) : 0;
  });
  const TotalExpense = expenses.reduce(
    (sum,expenses)=> sum+ expenses.amount,0
  );
  const balance= income - TotalExpense;
  // console.log(balance);
  // console.log(TotalExpense);
  const addExpense = (expense) => {
    setExpenses((prev)=>[...prev,expense]);
    

  }
  useEffect(() => {
   localStorage.setItem('expenses',JSON.stringify(expenses))
    
  }, [expenses])

  useEffect(() => {
   localStorage.setItem('income',JSON.stringify(income))
    
  }, [income])
  
 
  return (
    <>
    <ExpenseContextProvider value={{income,setIncome,TotalExpense,balance,addExpense,expenses}}>
    <Header/>
    <ExpenseInfo />
     <Chart/>
    <Categorys/>
    
    </ExpenseContextProvider>
    
    
     </>
  )
}

export default App
