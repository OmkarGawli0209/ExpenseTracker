import React, { useState } from "react";
import { CourseUp, CourseDown, Wallet5 } from "reicon-react";
import { SummaryCard } from "./SummaryCard";
import IncomePopUp from "./popup/IncomePopUp";
import { useExpense } from "./context/expenseContext";

export const ExpenseInfo = () => {
  const {income,TotalExpense,balance} = useExpense();
  const[showIncome,setShowIncome]=useState(false);

  return (
    <>
    <div className="m-5 flex flex-col gap-5 md:flex-row">
      <SummaryCard
        icon={<CourseUp size={24} color="green" />}
        bgColor={"bg-[#D3F8E8]"}
        title={"Total Income"}
        amount={income}
      >
        <button className="bg-[#059669] text-[#FFFF] rounded p-1 w-[150px]" onClick={()=>setShowIncome(true)}>
          + Set Income
        </button>
      </SummaryCard>

      <SummaryCard
        icon={<CourseDown size={24} color="red" />}
        bgColor={"bg-[#FEDBE2]"}
        title={"Total Expenses"}
        amount={TotalExpense}
      >
        <p className="text-sm text-red-500">0 transactions recorded </p>
      </SummaryCard>
      <SummaryCard
        icon={<Wallet5 size={24} color="orange" />}
        bgColor={"bg-[#FFEFBB]"}
        title={"Remaining Balance"}
        amount={balance}
      />
    </div>
    {showIncome &&(<IncomePopUp onClose={()=>setShowIncome(false)}/>)}
    </>
  );
};
