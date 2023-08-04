'use client'
import React, { useState } from 'react'
import TableSection from '../TableForm/page'
import moment from 'moment'

const Calendar = () => {
  const [view, setView] = useState("Week")
  const handleDate = () => {
    if (view == "Day") {
      return moment(new Date()).format("MMMM DD YYYY")
    } else if (view == "Week") {
      return moment(new Date()).format("MMM DD") + " - " + moment(new Date()).add(7,'days').format("MMM DD") + ", " + moment(new Date()).format("YYYY")
    } else {
      return moment(new Date()).format("MMMM YYYY")
    }
  }
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
            <h1 className='text-2xl'> {handleDate()}</h1>
          </div>
          <div className='px-20'>
            <button onClick={() => { setView("Month") }} className='px-7 py-2 boder border-slate-100 rounded-md ml-5 bg-slate-300'>Month</button>
            <button onClick={() => { setView("Week") }} className='px-7 py-2 boder border-slate-100 rounded-md ml-5 bg-slate-300'>Week</button>
            <button onClick={() => { setView("Day") }} className='px-7 py-2 boder border-slate-100 rounded-md ml-5 bg-slate-300'>Day</button>
          </div>
        </div>
      </div>
      <div className='border border-red-100 h-screen mt-10 bg-gray-100 w-full'>
        <TableSection view={view} />
      </div>
    </>
  )
}

export default Calendar