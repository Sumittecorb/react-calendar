'use client'
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
            let newFormateData = newData?.map((items: any) => { return ({ ...items, backGroundLength: handleFunctionForBack(items?.startDate, items?.endDate)?.length }) })
            // console.log("newFormateData", newFormateData);
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

    // here i am checking start and end dates are includes in the array then the background color is blue else nothings
    const handleFunctionForBack = (startDate: any, endDate: any) => {
        startDate = new Date(startDate);
        endDate = new Date(endDate);
        return getDates(startDate, endDate)
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
        let newDateArr = dateArray?.map((items) => moment(items).format("L"))
        // console.log("??????", newDateArr);
        // console.log("old", dateArray);
        return newDateArr;
    }

    return (
        <table className='border border-white w-full '>
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
                                // console.log("_checkTime", _checkTime);
                                if (newArr?.length > 0 && _checkTime?.length > 0) {
                                    return (
                                        <>
                                            {newArr?.map((events: any, index: any) => {
                                                return (
                                                    <>
                                                        <td key={index} className='h-32 w-15 text-center border border-gray-200 relative'>
                                                            <p className='text-white bg-sky-600 h-full absolute left-0 top-0'
                                                                style={{
                                                                    width: `${events?.backGroundLength * 100}%`,
                                                                    //  height: `${events?.backGroundLength * 100}%`
                                                                }}
                                                            >{events?.title}</p>
                                                        </td>
                                                    </>
                                                )
                                            })}
                                        </>
                                    )
                                } else {
                                    return (
                                        <>
                                            <td key={index} className='h-32 w-15 text-center border border-gray-200 relative'> </td>
                                        </>
                                    )
                                }

                            })}
                        </tr>
                    )
                })}
            </tbody>
        </table>
    )
}

export default WeekView