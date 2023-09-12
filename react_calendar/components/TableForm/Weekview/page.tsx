'use client'
import { handleFunctionForBack, handleTimeDuration } from '@/components/CommenFunction/page'
import { TimeSlots } from '@/components/TimeSlots'
import moment from 'moment'
import React, { useEffect, useState } from 'react'

const WeekView = ({ selectedDate }: any) => {
    const [dayList, setDayList] = useState<any>([])
    const [eventsData, setEventsData] = useState<any>([])
    useEffect(() => {
        getDateList(selectedDate)
        if (localStorage.eventsData) {
            let newData = JSON.parse(localStorage.eventsData)
            let newFormateData = newData?.map((items: any) => {
                return ({
                    ...items, dayBetweenStartAndEnd: handleFunctionForBack(items?.startDate, items?.endDate),
                    BackGroundHeight: handleTimeDuration(items?.startTime, items?.endTime)
                })
            })
            setEventsData(newFormateData)
        }
    }, [selectedDate])

    const getDateList = (selectedDate: any) => {
        let daysDate = [];
        for (let i = 0; i <= 6; i++) {
            let formateDate = new Date(selectedDate); // here i'm using dynamic date coming from props
            formateDate.setDate(formateDate.getDate() + i);
            const month = moment(formateDate).format("MM")
            const day = moment(formateDate).format("ddd")
            const newDate = moment(formateDate).format("DD")
            let _localFormateDate = moment(formateDate).format("L")
            const formattedDate = `${day} ${newDate} / ${month}`;
            let newObj = {
                datesForHead: formattedDate,
                datesForEvents: _localFormateDate
            }
            daysDate.push(newObj)
        }
        setDayList(daysDate)
    }
    // *****this function is check if day is == new day then print title else hide them ****
    const handleCheckDay = (date: any, startDate: any) => {
        if (moment(date).format("dddd") == moment(new Date()).format("dddd") || moment(startDate).format("L") == date) {
            return true
        } else {
            return false
        }
    }
    return (
        <table className='border border-white w-full'>
            <thead className='sticky top-0'>
                <tr className='border border-gray-200'>
                    <th className='border border-gray-200'></th>
                    {dayList?.map((day: any, index: any) => {
                        return (
                            <th key={index} className='border border-gray-200 text-center'>{day?.datesForHead}</th>
                        )
                    })}
                </tr>
            </thead>
            <tbody >
                {TimeSlots?.map((Time, index) => {
                    return (
                        <tr key={index} className='border border-gray-200'>
                            <td className='border border-gray-200 text-center'>{Time}</td>  {/* This is for time section constant*/}
                            {dayList?.map((day: any, index: any) => {
                                console.log("day", day);

                                const array1 = eventsData?.filter((events: any) => (handleFunctionForBack(moment(events?.startDate).format("L"), moment(events?.endDate).format("L"))?.includes(day?.datesForEvents)))
                                let _checkTime = array1?.filter((time: any) => (time?.startTime?.substring(0, 2) == Time?.substring(0, 2)))
                                return (
                                    <>
                                        <td key={index} className='h-32 w-15 text-center border border-gray-200 relative'>
                                            {array1?.length > 0 && _checkTime?.length > 0 &&
                                                array1?.map((events: any, index: any) => {
                                                    return (
                                                        <p key={index} className='text-white bg-sky-600 h-full absolute left-0 top-0 rounded-md'
                                                            style={{ width: `${events?.dayBetweenStartAndEnd?.includes(day?.datesForEvents) * 100}%`, height: `${events?.BackGroundHeight * 100}%` }}
                                                        >
                                                            <span className={`${handleCheckDay(day?.datesForEvents, events?.startDate) ? "" : "invisible"}`}>{events?.title}</span>
                                                        </p>)
                                                })}
                                        </td>
                                    </>
                                )
                            })}
                        </tr>
                    )
                })}
            </tbody>
        </table>
    )
}

export default WeekView