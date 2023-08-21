import demoEvents from '@/components/eventsData';
import moment from 'moment';
import React, { useEffect, useState } from 'react'

const MonthView = ({ selectedDate }: any) => {

    let weekdayData = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
    const [dayList, setDayList] = useState<any>([])
    const [eventsData, setEventsData] = useState<any>([])
    useEffect(() => {
        getDateList(selectedDate)
        if (localStorage.eventsData) {
            let newData = JSON.parse(localStorage.eventsData)
            setEventsData(newData)
        }
    }, [selectedDate])
    function generateDates(startDate: any, numDays: any) {
        const dates = [];
        const oneDayInMilliseconds = 24 * 60 * 60 * 1000;
        let currentDate = new Date(startDate);

        // Find the Sunday before the startDate
        while (currentDate.getDay() !== 0) {
            currentDate = new Date(currentDate.getTime() - oneDayInMilliseconds);
        }

        // Generate dates for the required number of days
        for (let i = 0; i < numDays; i++) {
            const dateObject = {
                date: new Date(currentDate),
                isEnable: currentDate.getMonth() === startDate.getMonth(),
                // backGround: handleCheckFunction()?.includes(moment(currentDate).format("YYYY-MM-DD")) ? true : false
            };
            dates.push(dateObject);
            currentDate = new Date(currentDate.getTime() + oneDayInMilliseconds);
        }
        return dates;
    }
    const getDateList = (date__: any) => {
        // Get the current date
        const currentDate = new Date(date__);

        // Set the first day of the current month
        const firstDayOfMonth = new Date(currentDate.getFullYear(), currentDate.getMonth(), 1);

        // Generate 42 dates starting from the Sunday before the first day of the current month
        const dates = generateDates(firstDayOfMonth, 42);
        setDayList(dates)
    }
    //**************** here i'm finding all the day between start and end date ******************************** */
    function getDates(startDate: any, endDate: any) {
        const dateArray = [];
        const currentDate = new Date(startDate);

        while (currentDate <= endDate) {
            dateArray.push(new Date(currentDate));
            currentDate.setDate(currentDate.getDate() + 1);
        }
        // let newDateArr = dateArray?.map((items) => items?.toDateString())
        let newDateArr = dateArray?.map((items) => moment(items).format("YYYY/MM/DD"))
        // console.log("??????", newDateArr);
        // console.log("old", dateArray);
        return newDateArr;
    }

    // here i am checking start and end dates are includes in the array then the background color is blue else nothings
    const handleFunctionForBack = (startDate: any, endDate: any) => {
        startDate = new Date(startDate);
        endDate = new Date(endDate);
        return getDates(startDate, endDate)
    }
    return (
        <>
            <div className='grid grid-cols-7 gap-0'>
                {weekdayData?.map((item, index) => <p key={index} className=' text-center border border-slate-200'>{item}</p>)}
            </div>
            <div className='grid grid-cols-7 gap-0'>
                {dayList?.map((day: any, index: any) => {
                    let _date1 = moment(day.date).format("YYYY/MM/DD")
                    // const array1 = eventsData?.find((events: any) => (moment(events?.startDate).format("YYYY/MM/DD") == _date1))
                    const array1 = eventsData?.find((events: any) => handleFunctionForBack(moment(events?.startDate).format("YYYY/MM/DD"), moment(events?.endDate).format("YYYY/MM/DD"))?.includes(_date1))
                    // console.log("array1", array1);
                    if (array1) {
                        return (
                            <div key={index}
                                className={` ${day?.isEnable ? "" : "text-slate-400"}  border border-slate-200 h-32 overflow-hidden
                                 ${day?.date ? "bg-sky-600 text-white" : ""}`}
                            >
                                <h3 className='text-right'>{moment(day?.date?.toDateString()).format("DD")}</h3>
                                <p className=''>{array1?.title}</p>
                                <p className=''>{array1?.description}</p>
                            </div>
                        )
                    } else {
                        return (
                            <div key={index} className={` ${day?.isEnable ? "" : "text-slate-400"}  border border-slate-200 h-32  ${day?.backGround ? "bg-blue-600" : ""} `}
                            >
                                <h3 className='text-right'>{moment(day?.date?.toDateString()).format("DD")}</h3>
                            </div>
                        )
                    }
                })
                }
            </div>
        </>
    )
}

export default MonthView 