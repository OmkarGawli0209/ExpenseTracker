import React, { useState } from "react";
import { X } from 'reicon-react';
import { useExpense } from "../context/expenseContext";


const IncomePopUp = ({ onClose }) => {
const [inputIncome,setInputIncome]=useState("");
const{setIncome}=useExpense();
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black/40 p-10">
      <div className="w-full max-w-sm rounded-xl bg-white p-6 flex flex-col gap-6">
        <div className="header flex justify-between border-b border-gray-100 p-5">
          <p className="font-bold ">Set Total Income</p>
          <button type="button" onClick={onClose}><X size={18} /></button>
        </div>

        <div >
          <form className="flex flex-col gap-4" onSubmit={
            (e)=>{e.preventDefault();
              setIncome(Number(inputIncome));
              onClose();

          }}>
            <label>Monthly Income Amount(₹)</label>
            <input type="number"
              placeholder="Enter Your Income(₹)"
              className="w-full rounded-lg border border-gray-400 py-2 px-3 outline-none focus:border-indigo-500" min={0} 
              value={inputIncome}
              onChange={(e)=>setInputIncome(e.target.value)}
              />
            <div className="mt-5 flex justify-end gap-3">
              <button className="rounded-lg bg-[#059669] px-4 py-2 text-white transition-colors hover:bg-green-900">Save Income</button>
              <button className="px-4 py-2 rounded-lg border border-red-200 text-red-500 transition hover:bg-red-500 hover:text-white" type="submit" onClick={onClose}>Cancel</button>
            </div>



          </form>
        </div>

      </div>

    </div>
  );
};

export default IncomePopUp;
