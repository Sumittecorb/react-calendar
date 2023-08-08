'use client'
import demoEvents from '@/components/eventsData'
import moment from 'moment'
import React from 'react'

const WeekView = ({ date }: any) => {
    const allData = [, "12Am", "1Am", "2AM", "3Am", "4Am", "5Am", "6Am", "7Am", "8Am", "9Am", "10Am", "11Am", "12Pm", "1Pm", "2PM", "3Pm", "4Pm", "5Pm", "6Pm", "7Pm", "8Pm", "9Pm", "10Pm", "11Pm"]
    let daysDate = [];
    for (let i = 0; i <= 6; i++) {
        let formateDate = new Date(date); // here i'm using dynamic date coming from props and make then dynamic
        formateDate.setDate(formateDate.getDate() + i);
        const month = moment(formateDate).format("MM")
        const day = moment(formateDate).format("ddd")
        const newDate = moment(formateDate).format("DD")
        const formattedDate = `${day} ${newDate} / ${month}`;
        daysDate.push(formattedDate)
    }

    return (
        <table className='border border-white w-full '>
            <thead>
                <tr className='border border-gray-200'>
                    <th className='border border-gray-200'></th>
                    {daysDate?.map((day, index) => {
                        return (
                            <th key={index} className='border border-gray-200 text-center'>{day}</th>
                        )
                    })}
                </tr>
            </thead>
            <tbody >
                {allData?.map((item, index) => {
                    return (
                        <tr key={index} className='border border-gray-200'>
                            <td className='border border-gray-200 text-center'>{item}</td>  {/* This is for time section constant*/}
                            {
                                demoEvents?.map((data, index) => {
                                    return (
                                        <td key={index} className='border border-gray-200 text-center p-10'>{data.title}</td>
                                    )
                                })
                            }
                        </tr>
                    )
                })}
            </tbody>
        </table>
    )
}

export default WeekView