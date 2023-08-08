import React from 'react'

const MonthView = ({date}:any) => {
    let weekdayData = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
    var daysDate = [];
    for (var i = 0; i <= 41; i++) {
       let formateDate = new Date(date); // here i'm using dynamic date coming from props
       formateDate.setDate(formateDate.getDate() + i);
        // Extract the year, month, and day from the future date
        const year = formateDate.getFullYear();
        const month = String(formateDate.getMonth() + 1).padStart(2, '0');
        const day = String(formateDate.getDate()).padStart(2, '0');
        // Format the date as "YYYY-MM-DD"
        const formattedDate = `${year}-${month}-${day}`;
        daysDate.push(formattedDate)
    }

    // let renderDateList = daysDate.map((dateList, index) => {

    //     let current_datetime = new Date(dateList + "T00:00");
    //     let t = current_datetime.toDateString().split(" ");
    //     let formatted_date = t[2] + " " + t[1];
    //     var weekday = ["Sat", "Sun", "Mon", "Tue", "Wed", "Thu", "Fri"];
    //     let day = weekday[new Date(formatted_date).getDay()];
    //     // console.log(">>>>>day", day);

    //     return (
    //         <li key={index} style={{ listStyleType: "none" }}
    //         >
    //             <h6>{day}</h6>
    //             <h6>{formatted_date}</h6>
    //         </li>
    //     );
    // });
    
    console.log("renderDateList", daysDate);

    return (
        <>
            <div className='grid grid-cols-7 gap-0'>
                {weekdayData?.map((item, index) => <p key={index} className=' text-center border border-slate-200'>{item}</p>)}
            </div>
            <div className='grid grid-cols-7 gap-0'>
                {daysDate?.map((day, index) => <div key={index} className='border border-slate-200 p-8 text-center'>{day}</div>)}
            </div>
        </>
    )
}

export default MonthView