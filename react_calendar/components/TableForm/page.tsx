'use client'
import MonthView from './MonthView/page'
import SingleDayView from './SingleDayView'
import WeekView from './Weekview/page'
const TableSection = () => {
    return (
        <div className='mx-2'>
            <WeekView />
            {/* <SingleDayView />
            <MonthView /> */}
        </div >
    )
}

export default TableSection