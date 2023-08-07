'use client'
import React, { useState } from 'react'
import TableSection from '../TableForm/page'
import moment from 'moment'

const Calendar = () => {
  const [view, setView] = useState("Week")
  const [date, setDate] = useState<any>(new Date())
  const handleDate = () => {
    if (view == "Day") {
      return moment(date).format("MMMM DD YYYY")
    } else if (view == "Week") {
      // let newSevenDate = moment(date).add(7, 'days').format("MMMM DD YYYY")
      return moment(date).format("MMM DD") + " - " + moment(date).add(7, 'days').format("MMM DD") + ", " + moment(date).format("YYYY")
    } else {
      return moment(date).format("MMMM YYYY")
    }
  }

  const handleDateChange = (type: any) => {
    const currentDate = moment();
    // Get the number of days in the current month
    const daysInCurrentMonth = currentDate.daysInMonth();

    if (view == "Day" && type == "Prev") {
      let newDate = moment(date).subtract(1, "day").format("YYYYY MM DD")
      let formatDate = new Date(newDate)
      setDate(formatDate)
    } else if (view == "Day" && type == "Next") {
      let newDate = moment(date).add(1, "day").format("YYYYY MM DD")
      let formatDate = new Date(newDate)
      setDate(formatDate)
    } else if (view == "Week" && type == "Prev") {
      let newDate = moment(date).subtract(7, "days").format("YYYYY MM DD")
      let formatDate = new Date(newDate)
      setDate(formatDate)
    } else if (view == "Week" && type == "Next") {
      let newDate = moment(date).add(7, "days").format("YYYYY MM DD")
      let formatDate = new Date(newDate)
      setDate(formatDate)
    } else if (view == "Month" && type == "Prev") {
      let newDate = moment(date).subtract(daysInCurrentMonth, "days").format("YYYYY MM DD")
      
      let formatDate = new Date(newDate)
      console.log("_____", formatDate);
      setDate(formatDate)
    } else if (view == "Month" && type == "Next") {
      let newDate = moment(date).add(daysInCurrentMonth, "days").format("YYYYY MM DD")
      let formatDate = new Date(newDate)
      setDate(formatDate)
    }
  }
  // console.log(date,">>>>>>>>>>>>");

  return (
    <>
      <div className='flex g-slate-400 w-full h-20 mt-10 relative'>
        <div className='flex justify-between items-center h-20 w-full'>
          <div className='px-20 h-10 flex flex-wrap'>
            <button onClick={() => { handleDateChange("Prev") }}
              className='px-7 py-1 h-10 border border-slate-200 rounded-md ml-5 bg-slate-100 '>
              <img src='/left-arrowcircle .svg' alt='left arrow icon' className='hover:scale-150 scale-100' />
            </button>
            <button onClick={() => { handleDateChange("Today") }} className='px-7 py-1 h-10 border border-slate-200 rounded-md ml-5 bg-slate-100 hover:bg-orange-400'>Today</button>
            <button onClick={() => { handleDateChange("Next") }}
              className='px-7 py-1 h-10 border border-slate-200 rounded-md ml-5 bg-slate-100'>
              <img src='/rightarrow .svg' alt='right arrow' className='hover:scale-150 scale-100' />
            </button>
          </div>
          <div className=''>
            <h1 className='text-2xl'> {handleDate()}</h1>
          </div>
          <div className='px-20'>
            <button onClick={() => { setView("Month") }}
              className={`px-7 py-2  rounded-md ml-5 bg-slate-100 hover:bg-orange-400 ${view == "Month" ? "bg-orange-400 border border-orange-500" : "border border-slate-200"}`}>Month</button>
            <button onClick={() => { setView("Week") }}
              className={`px-7 py-2  rounded-md ml-5 bg-slate-100 hover:bg-orange-400 ${view == "Week" ? "bg-orange-400 border border-orange-500" : "border border-slate-200"}`}>Week</button>
            <button onClick={() => { setView("Day") }}
              className={`px-7 py-2  rounded-md ml-5 bg-slate-100 hover:bg-orange-400 ${view == "Day" ? "bg-orange-400 border border-orange-500" : "border border-slate-200"}`}>Day</button>
          </div>
        </div>
      </div>
      <div className=' h-full mt-10 bg-gray-100 w-full'>
        <TableSection view={view} date={date} />
      </div>
    </>
  )
}

export default Calendar