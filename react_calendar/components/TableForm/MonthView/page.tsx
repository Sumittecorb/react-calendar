import demoEvents from '@/components/eventsData';
import moment from 'moment';
import React, { useEffect, useState } from 'react'

const MonthView = ({ selectedDate }: any) => {
    let weekdayData = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
    const [dayList, setDayList] = useState<any>([])

    useEffect(() => {
        getDateList(selectedDate)
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
   

    return (
        <>
            <div className='grid grid-cols-7 gap-0'>
                {weekdayData?.map((item, index) => <p key={index} className=' text-center border border-slate-200'>{item}</p>)}
            </div>
            <div className='grid grid-cols-7 gap-0'>
                {dayList?.map((day: any, index: any) => {

                    if (moment(day.date).format("YYYY/MM/DD") == moment(new Date()).format("YYYY/MM/DD")) {
                        return (
                            <div key={index} className={` ${day?.isEnable ? "" : "text-slate-400"}  border border-slate-200 h-32 `}
                            >
                                <h3 className='text-right'>{moment(day?.date?.toDateString()).format("DD")}</h3>

                                {/* {demoEvents?.map((eventDate: any, index: any) => { return (moment(day.date).format("YYYY/MM/DD") == moment(eventDate?.start).format("YYYY/MM/DD") ? <p key={index}> {eventDate?.title}</p> : console.log(">>>>PPPPPPPPPPPPPP<<", moment(day.date).format("YYYY/MM/DD"), moment(eventDate?.start).format("YYYY/MM/DD"))) })} */}
                            </div>
                        )
                    } else {
                        return (
                            <div key={index} className={` ${day?.isEnable ? "" : "text-slate-400"}  border border-slate-200 h-32 `}
                            >
                                <h3 className='text-right'>{moment(day?.date?.toDateString()).format("DD")}</h3>
                            </div>
                        )
                    }
                })
                }
            </div >
        </>
    )
}

export default MonthView 