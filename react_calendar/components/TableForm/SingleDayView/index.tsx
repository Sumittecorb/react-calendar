import moment from 'moment'
import React, { useEffect, useState } from 'react'
const SingleDayView = ({ selectedDate }: any) => {

  const hours = Array.from({ length: 24 }, (_, index) => index);
  // console.log("mohit",hours);
  // ******************* implement logic for todays case**************//

  const [eventsData, setEventsData] = useState<any>([])
  useEffect(() => {
    // getDateList(selectedDate)
    if (localStorage.eventsData) {
      let newData = JSON.parse(localStorage.eventsData)
      let newFormateData = newData?.map((items: any) => {
        return ({
          ...items,
          backGroundLength: handleFunctionForBack(items?.startDate, items?.endDate)?.length,
          BackGroundHeight: handleTimeDuration(items?.startTime, items?.endTime)
        })
      })
      // console.log("newFormateData", newFormateData);
      setEventsData(newFormateData)
    }
  }, [selectedDate])

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
    let newDateArr = dateArray?.map((items) => moment(items).format("L"))
    return newDateArr;
  }

  const handleTimeDuration = (startTime: any, endTime: any) => {
    let differenceInHr = endTime?.substring(0, 2) - startTime?.substring(0, 2)
    let diffInMin = endTime?.replace(":", "") - startTime?.replace(":", "")
    let timeInPercent = diffInMin / 100
    // console.log("start", timeInPercent);
    return timeInPercent;
  }

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

                 { array1?.map((item: any, index: any) => {
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