import React, { useEffect, useState } from 'react'
import { Wallet5 } from 'reicon-react';
import { AddExpenses } from './popup/AddExpenses';

const Header = () => {
const[addExp,setExpen]=useState(false);
  return (
    <>
      <div className='m-3 flex gap-5 items-center justify-between font-sans bg-[#FFFFFF]'>

        <div className='flex items-center gap-2'>
          <Wallet5 size={44} color="#ffff" className='bg-[#059669] rounded-xl p-1' />
          <div>
            <h1 className='font-bold text-3xl'>Expense Tracker</h1>
            <span className='text-sm text-gray-500'>Take control of your spending</span>
          </div>
        </div>
        <button className='rounded-lg bg-[#059669] px-4 py-2 text-white  transition-all duration-200 hover:-translate-y-1'onClick={()=>setExpen(true)}>+ Add Expense</button>
      </div>
      {addExp && <AddExpenses onClose={()=>setExpen(false)}/>}
    </>
  )
}

export default Header;