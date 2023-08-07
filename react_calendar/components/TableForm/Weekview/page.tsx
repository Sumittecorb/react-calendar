'use client'
import demoEvents from '@/components/eventsData'
import moment from 'moment'
import React from 'react'

const WeekView = () => {
    const allData = [, "12Am", "1Am", "2AM", "3Am", "4Am", "5Am", "6Am", "7Am", "8Am", "9Am", "10Am", "11Am", "12Pm", "1Pm", "2PM", "3Pm", "4Pm", "5Pm", "6Pm", "7Pm", "8Pm", "9Pm", "10Pm", "11Pm"]
    const Days = ["Monday", "Tuesday", "WednesDay", "Thursday", "Friday", "Saturday", "Sunday"]
    return (
        <table className='border border-white w-full '>
            <thead>
                <tr className='border border-gray-600'>
                    <th className='border border-gray-600'></th>
                    {Days?.map((day, index) => {
                        return (
                            <th key={index} className='border border-gray-600 text-center'>{moment(new Date()).format("dddd MM / YYYY")}</th>
                        )
                    })}
                </tr>
            </thead>
            <tbody >
                {allData?.map((item, index) => {
                    return (
                        <tr key={index} className='border border-gray-600'>
                            <td className='border border-gray-600 text-center'>{item}</td>  {/* This is for time section constant*/}
                            {
                                demoEvents?.map((data, index) => {
                                    return (
                                        <td key={index} className='border border-gray-600 text-center p-10'>{data.title}</td>
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