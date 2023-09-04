import { handleFunctionForBack, handleTimeDuration } from '@/components/CommenFunction/page';
import moment from 'moment'
import React, { useEffect, useState } from 'react'
const SingleDayView = ({ selectedDate }: any) => {

  const hours = Array.from({ length: 24 }, (_, index) => index);
  // ******************* implement logic for todays case**************//

  const [eventsData, setEventsData] = useState<any>([])
  useEffect(() => {
    if (localStorage.eventsData) {
      let newData = JSON.parse(localStorage.eventsData)
      let newFormateData = newData?.map((items: any) => {
        return ({
          ...items,
          backGroundLength: handleFunctionForBack(items?.startDate, items?.endDate)?.length,
          BackGroundHeight: handleTimeDuration(items?.startTime, items?.endTime)
        })
      })
      setEventsData(newFormateData)
    }
  }, [selectedDate])

  let _todaysDate = moment(selectedDate).format("L")
  const array1 = eventsData?.filter((events: any) => (moment(events?.startDate).format("L") == _todaysDate))

  return (
    <table className='border border-white w-full'>
      <thead>
        <tr className='border border-gray-200'>
          <th className='border border-gray-200 w-32 text-center'>Time</th>
          <th className='border border-gray-200'>Event</th>
        </tr>
      </thead>
      <tbody>
        {hours.map((hour) => (
          <tr key={hour} className='border border-gray-200'>
            <td className='border border-gray-200 w-32 text-center'>{hour}:00</td>
            <td className='border border-gray-200 text-center'>

              {array1?.map((item: any, index: any) => {
                if (item?.startTime?.substring(0, 2) == hour) {
                  return (
                    <div key={index}
                      className='border border-slate-200 text-slate-400'>
                      <p
                        style={{ height: `${item?.BackGroundHeight * 3}%` }}
                        className='bg-blue-600 text-white absolute w-[73%]'>
                        {item?.title}
                      </p>
                    </div>
                  )
                } else {
                  <div key={index}
                    className='border border-slate-200 text-slate-400'>
                  </div>
                }
              })
              }
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  )
}

export default SingleDayView