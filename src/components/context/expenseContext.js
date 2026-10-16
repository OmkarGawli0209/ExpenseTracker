import  {createContext,useContext } from "react";
export const expenses = createContext({
  expense:[
    {
      id:1,
      title:"Burger",
      category:"Food",
      amount:0,
      date:"02/09/2005"

    }
  ],
  addExpense:()=>{},
  updateExpense:()=>{},
  deleteExpense:(id)=>{},
  
});
export const ExpenseContextProvider = expenses.Provider;
export const useExpense = () =>{
  return useContext(expenses);
}