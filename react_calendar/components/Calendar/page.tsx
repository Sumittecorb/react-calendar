import React from 'react'
import TableSection from '../TableForm/page'

const Calendar = () => {
  return (
    <>
      <div className='flex g-slate-400 w-full h-20 mt-10 relative'>
        <div className='flex justify-between items-center h-20 w-full'>
          <div className='px-20'>
            <button className='px-7 py-2 boder border-slate-100 rounded-md ml-5 bg-slate-300'>Prev</button>
            <button className='px-7 py-2 boder border-slate-100 rounded-md ml-5 bg-slate-300'>Today</button>
            <button className='px-7 py-2 boder border-slate-100 rounded-md ml-5 bg-slate-300'>Next</button>
          </div>
          <div className=''>
            <h1 className='text-2xl'> Aug 2 - Aug 07  2023</h1>
          </div>
          <div className='px-20'>
            <button className='px-7 py-2 boder border-slate-100 rounded-md ml-5 bg-slate-300'>Month</button>
            <button className='px-7 py-2 boder border-slate-100 rounded-md ml-5 bg-slate-300'>Week</button>
            <button className='px-7 py-2 boder border-slate-100 rounded-md ml-5 bg-slate-300'>Day</button>
          </div>
        </div>
      </div>
      <div className='border border-red-100 h-screen mt-20 bg-gray-300 w-full'>
        <TableSection />
      </div>
    </>
  )
}

export default Calendar