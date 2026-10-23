import React from 'react'

export const Categorys = () => {
  return (
    <main className='w-full max-w-7xl mx-auto'>
      <div className='mb-8 flex flex-wrap items-center gap-4 justify-between'>
        <h2 className='text-2xl font-bold text-[#19233C]'>Expense Management</h2>
        <div className='flex flex-wrap items-center gap-3'>
           <button className='p-2 rounded-lg text-white bg-violet-700'>AI Insights</button>
          
        </div>
      </div>
      <div className='overflow-hidden  rounded-2xl border border-slate-200 bg-white  p-6'>
      
       <div className='flex justify-between'><input type="search" placeholder='Search expenses...'
        className='w-full rounded-lg border border-slate-300 px-4 py-3 outline-none focus:border-indigo-500 sm:max-w-xs'
        />
        <select className='w-full rounded-lg border border-slate-300 bg-white px-4 py-3 sm:max-w-xs'>
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
        

      </div>
      

    </main>
  )
}
