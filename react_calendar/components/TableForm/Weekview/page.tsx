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
                    ...items, backGroundLength: handleFunctionForBack(items?.startDate, items?.endDate)?.length,
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
                                let newArr = eventsData?.filter((item: any) => (moment(item?.startDate).format("L") == day?.datesForEvents))
                                let _checkTime = newArr?.filter((time: any) => (time?.startTime?.substring(0, 2) == Time?.substring(0, 2)))
                                return (
                                    <>
                                        <td key={index} className='h-32 w-15 text-center border border-gray-200 relative'>
                                            {newArr?.length > 0 && _checkTime?.length > 0 &&
                                                newArr?.map((events: any, index: any) => {
                                                    return (
                                                        <p key={index}
                                                            className='text-white bg-sky-600 h-full absolute left-0 top-0'
                                                            style={{
                                                                width: `${events?.backGroundLength * 100}%`,
                                                                height: `${events?.BackGroundHeight * 100}%`
                                                            }}
                                                        >{events?.title}
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