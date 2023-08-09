import moment from 'moment'
import React from 'react'

const SingleDayView = ({selectedDate}:any) => {
    const allData = ["12Am", "1Am", "2AM", "3Am", "4Am", "5Am", "6Am", "7Am", "8Am", "9Am", "10Am", "11Am", "12Pm", "1Pm", "2PM", "3Pm", "4Pm", "5Pm", "6Pm", "7Pm", "8Pm", "9Pm", "10Pm", "11Pm"]
    const Days = ["Monday"]
    return (
        <table className='border border-white w-full'>
            <thead>
                <tr className='border border-gray-200'>
                    <th className='border border-gray-200'></th>
                    <th className='border border-gray-200'>{moment(new Date(selectedDate)).format("dddd")}</th>
                </tr>
            </thead>
            <tbody >
                {allData?.map((item, index) => {
                    return (
                        <tr key={index} className='border border-gray-200'>
                            <td className='border border-gray-200 w-20 text-center'>{item}</td>  {/* This is for time section constant*/}
                            <td className='border border-gray-200 text-center p-4'>{"title"}</td>
                        </tr>
                    )
                })}
            </tbody>
        </table>
    )
}

export default SingleDayView