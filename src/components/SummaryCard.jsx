import React from 'react'

export const 

SummaryCard = ({icon,bgColor,children,title,amount}) => {
  return (
    <div className={`flex flex-col flex-1 rounded-2xl ${bgColor} p-6 gap-2`}>
      <div className='flex justify-between'>
      <p className='font-bold'>{title}</p>
       {icon}
      </div>
      
      <h2 className='font-bold'>₹ {amount}</h2>
      {children}
    



    </div>
  )
}
