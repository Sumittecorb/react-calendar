'use client'
import moment from "moment";
  // here i am checking start and end dates are includes in the array then the background color is blue else nothings
 export const handleFunctionForBack = (startDate: any, endDate: any) => {
    startDate = new Date(startDate);
    endDate = new Date(endDate);
    return getDates(startDate, endDate)
}
//**************** here i'm finding all the day between start and end date ******************************** */
export function getDates(startDate: any, endDate: any) {
    const dateArray = [];
    const currentDate = new Date(startDate);

    while (currentDate <= endDate) {
        dateArray.push(new Date(currentDate));
        currentDate.setDate(currentDate.getDate() + 1);
    }
    let newDateArr = dateArray?.map((items) => moment(items).format("L"))
    return newDateArr;
}
// here i'm replace colon ( ":") from time and get the difference then use for duration of the events
export const handleTimeDuration = (startTime: any, endTime: any) => {
    let differenceInHr = endTime?.substring(0, 2) - startTime?.substring(0, 2)
    let diffInMin = endTime?.replace(":", "") - startTime?.replace(":", "")
    let timeInPercent = diffInMin / 100
    return timeInPercent;
}