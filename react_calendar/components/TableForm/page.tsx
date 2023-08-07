'use client'
import MonthView from './MonthView/page'
import SingleDayView from './SingleDayView'
import WeekView from './Weekview/page'
const TableSection = ({ view }: any) => {
    return (
        <div className='mx-2 h-3/4 overflow-y-scroll , scrollbar-thin , scrollbar-thumb-gray-400 , and scrollbar-track-gray-300 '>
            {view == "Week" && <WeekView />}
            {view == "Month" && <MonthView />}
            {view == "Day" && <SingleDayView />}
        </div >
    )
}

export default TableSection