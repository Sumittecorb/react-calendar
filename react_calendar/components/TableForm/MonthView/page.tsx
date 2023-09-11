import { handleFunctionForBack } from '@/components/CommenFunction/page';
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
            let newFormateData = newData?.map((items: any) => {
                return ({
                    ...items,
                    backGroundLength: handleFunctionForBack(items?.startDate, items?.endDate),
                })
            })
            setEventsData(newFormateData)
        }
    }, [selectedDate])
    // ************************ function to get the 42 days list *****************************
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
    // *********** here we get the 42 days list of from current month  *************************
    const getDateList = (date__: any) => {
        // Get the current date
        const currentDate = new Date(date__);

        // Set the first day of the current month
        const firstDayOfMonth = new Date(currentDate.getFullYear(), currentDate.getMonth(), 1);

        // Generate 42 dates starting from the Sunday before the first day of the current month
        const dates = generateDates(firstDayOfMonth, 42);
        setDayList(dates)
    }
    //***************** */ here i'm passing mirgin pixel for every title *************
    const handlePixelInEvents = (val: any) => {
        if (val == 1) {
            return 50
        } else if (val == 2) {
            return 25
        } else if (val == 3) {
            return 10
        }
    }
    return (
        <>
            <div className='grid grid-cols-7 gap-0'>
                {weekdayData?.map((item, index) => <p key={index} className=' text-center border border-slate-200'>{item}</p>)}
            </div>
            <div className='grid grid-cols-7 gap-0'>
                {dayList?.map((day: any, index: any) => {
                    let _date1 = moment(day.date).format("L")
                    // const array1 = eventsData?.filter((events: any) => (moment(events?.startDate).format("L") == _date1))
                    const array1 = eventsData?.filter((events: any) => (handleFunctionForBack(moment(events?.startDate).format("L"), moment(events?.endDate).format("L"))?.includes(_date1)))
                    console.log("array1", array1);
                    // console.log("day", day);    
                    return (
                        <div key={index} className={`${day?.isEnable ? "" : "text-slate-400"} last-child:mt-10 border border-slate-200 h-32 w-full relative`} >
                            <h3 className='text-right'>{moment(day?.date?.toDateString()).format("DD")}</h3>
                            {array1?.length > 0 &&
                                array1?.map((data: any, index: any) => {
                                    // console.log("data", data);
                                    let newFormateDate = moment(day?.date).format("L")
                                    return (
                                        <p key={index}
                                            style={{
                                                width: "100%",
                                                marginTop: `${handlePixelInEvents(data?.backGroundLength?.length)}px`
                                            }}
                                            className={` ${data?.backGroundLength?.includes(newFormateDate) ? "bg-sky-600 text-white rounded-md border-collapse" : ""} z-10 absolute`}>
                                            <span className={`${moment(data?.startDate).format("L") == _date1 ? "" : "invisible"}`}>{data?.title}</span>
                                        </p>
                                    )
                                })}
                        </div>
                    )
                })
                }
            </div>
        </>
    )
}

export default MonthView 