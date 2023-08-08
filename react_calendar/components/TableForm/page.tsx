'use client'
import MonthView from './MonthView/page'
import SingleDayView from './SingleDayView'
import WeekView from './Weekview/page'
const TableSection = ({ view ,date}: any) => {
    return (
        <div className='mx-2 h-screen overflow-y-scroll , scrollbar-thin , scrollbar-thumb-gray-400 , and scrollbar-track-gray-300 '>
            {view == "Week" && <WeekView date={date} />}
            {view == "Month" && <MonthView date={date} />}
            {view == "Day" && <SingleDayView date={date}/>}
        </div > 
    )
}

export default TableSection