import React from 'react'
import { X } from 'reicon-react';

export const AddExpenses = ({ onClose }) => {

  return (
    <div className='fixed inset-0 flex items-center justify-center bg-black/40 p-12 gap-6'>
      <div className='w-full max-w-lg rounded-xl bg-white p-6 flex flex-col gap-4'>
        <div className="header flex justify-between border-b border-gray-100 p-5">
          <p className="font-bold ">Add New Expense</p>
          <button className="" onClick={onClose}><X size={18} /></button>
        </div>
        <div>
          <form className='flex flex-col gap-4' onSubmit={(e) => { e.preventDefault() }}>
            <label >Expense Title</label>
            <input type="text" className="w-full rounded-lg border border-gray-400 py-2 px-3 outline-none focus:border-green-500" />
            <label >Amount (₹)</label>
            <input type="number" className="w-full rounded-lg border border-gray-400 py-2 px-3 outline-none focus:border-green-500" min={0} />
            <label>Category</label>
            <select name="category" id="category" className="w-full rounded-lg border border-gray-400 py-2 px-3 outline-none">
              <option value="Food">Food</option>
              <option value="Transport">Transport</option>
              <option value="Shopping">Shopping</option>
              <option value="Entertainment">Entertainment</option>
              <option value="Health">Health</option>
              <option value="Education">Education</option>
              <option value="Other">Other</option>

            </select>

            <label >Date</label>
            <input type="date" className="w-full rounded-lg border border-gray-400 py-2 px-3 outline-none focus:border-green-500" />
            <div className="mt-5 flex justify-end gap-3">
              <button className="px-4 py-2 rounded-lg border border-green-400 text-[#059669] transition hover:bg-[#059669] hover:text-white ">Add Expense</button>
              <button className="px-4 py-2 rounded-lg border border-red-200 text-red-500 transition hover:bg-red-500 hover:text-white" type="submit" onClick={onClose}>Cancel</button>
            </div>

          </form>
        </div>


      </div>


    </div>
  )
}
