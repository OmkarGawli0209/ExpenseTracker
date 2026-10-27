import React from 'react'
import { Pen, Trash5} from 'reicon-react'

export const Categorys = () => {
  return (
    <main className='w-full max-w-7xl mx-auto'>
      <div className='mb-6 mx-4 flex flex-col items-start gap-4  sm:flex-row sm:items-center sm:justify-between'>
        <h2 className='text-xl font-bold text-[#19233C]'>Expense Management</h2>
        
          <button className='w-fit px-4 py-2 rounded-lg text-white bg-violet-700'>AI Insights</button>

        
      </div>
      <div className='overflow-hidden  rounded-2xl border border-slate-200 bg-white  p-6'>

        <div className='flex  justify-between gap-4 sm:flex-row flex-wrap' >
          <input
            type="search"
            placeholder='Search expenses...'
            className='w-full min-w-0 rounded-lg border border-slate-300 px-4 py-3 outline-none focus:border-indigo-500 sm:max-w-xs '
          />
          <select className='w-full  min-w-0  rounded-lg border border-slate-300 bg-white px-4 py-3 sm:max-w-xs '>
            <option>All Categories</option>
            <option >Food</option>
            <option >Transport</option>
            <option >Shopping</option>
            <option >Entertainment</option>
            <option >Health</option>
            <option >Education</option>
            <option >Other</option>




          </select>
        </div>
        {/* <div className='mt-6 overflow-x-auto'>
          <table className='w-full table-fixed text-left [&_th]:py-4 [&_th]:px-4 [&_td]:px-4 [&_td]:py-4'>
           <thead>
            <tr className='border-b border-slate-200 bg-slate-50'>
              <th className='w-[20%] px-4 py-4'>EXPENSE</th>
              <th className='w-[20%] px-4 py-4'>CATEGORY</th>
              <th className='w-[20%] px-4 py-4'>DATE</th>
              <th className='w-[20%] px-4 py-4'>AMOUNT</th>
              <th className='w-[20%] px-4 py-4'>ACTIONS</th>

            </tr></thead>

            <tr >
              <td>
                Grocery Store
              </td>
              <td>
                Food
              </td>
              <td>
                10 Oct 2026
              </td>
              <td>₹1200</td>
              <td className='flex gap-3'>
                <button><Pen size={24} /></button>
                <button><Trash5 size={24} /></button>
              </td>
            </tr>



          </table>
        </div> */}
        <div className='overflow-x-auto mt-6'>
          <ol className='w-full'>
            <li></li>

          </ol>

        </div>



      </div>


    </main>
  )
}
