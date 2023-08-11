
export interface EventData {
  title?: string;
  start?: any;
  end?: any;
  allDay?: boolean;
  desc?: string
}

const demoEvents: EventData[] =
  [
    {
      'title': 'All Day Event very long title',
      'allDay': true,
      'start': new Date(2023, 8, 11, 0, 0, 0),
      'end': new Date(2023, 8, 11, 0, 0, 0)
    },
    {
      'title': 'Long Event',
      'start': new Date(2023, 8, 11, 0, 0, 0),
      'end': new Date(2023, 8, 11, 0, 0, 0)
    },

    {
      'title': 'DTS STARTS',
      'start': new Date(2023, 8, 13, 0, 0, 0),
      'end': new Date(2023, 8, 20, 0, 0, 0)
    },

    {
      'title': 'DTS ENDS',
      'start': new Date(2023, 10, 6, 0, 0, 0),
      'end': new Date(2023, 10, 13, 0, 0, 0)
    },

    {
      'title': 'Some Event',
      'start': new Date(2023, 3, 9, 0, 0, 0),
      'end': new Date(2023, 3, 9, 0, 0, 0)
    },
    {
      'title': 'Conference',
      'start': new Date(2023, 8, 10, 0, 0, 0),
      'end': new Date(2023, 8, 10, 0, 0, 0),
      desc: 'Big conference for important people'
    },
    {
      'title': 'Meeting',
      'start': new Date(2023, 3, 12, 10, 30, 0),
      'end': new Date(2023, 3, 12, 12, 30, 0),
      desc: 'Pre-meeting meeting, to prepare for the meeting'
    },
    // {
    //   'title': 'Lunch',
    //   'start': new Date(2015, 3, 12, 12, 0, 0, 0),
    //   'end': new Date(2015, 3, 12, 13, 0, 0, 0),
    //   desc: 'Power lunch'
    // },
    // {
    //   'title': 'Meeting',
    //   'start': new Date(2015, 3, 12, 14, 0, 0, 0),
    //   'end': new Date(2015, 3, 12, 15, 0, 0, 0)
    // },
    // {
    //   'title': 'Happy Hour',
    //   'start': new Date(2015, 3, 12, 17, 0, 0, 0),
    //   'end': new Date(2015, 3, 12, 17, 30, 0, 0),
    //   desc: 'Most important meal of the day'
    // },
    // {
    //   'title': 'Dinner',
    //   'start': new Date(2015, 3, 12, 20, 0, 0, 0),
    //   'end': new Date(2015, 3, 12, 21, 0, 0, 0)
    // },
    // {
    //   'title': 'Birthday Party',
    //   'start': new Date(2015, 3, 13, 7, 0, 0),
    //   'end': new Date(2015, 3, 13, 10, 30, 0)
    // },
    // {
    //   'title': 'Birthday Party 2',
    //   'start': new Date(2015, 3, 13, 7, 0, 0),
    //   'end': new Date(2015, 3, 13, 10, 30, 0)
    // },
    // {
    //   'title': 'Birthday Party 3',
    //   'start': new Date(2015, 3, 13, 7, 0, 0),
    //   'end': new Date(2015, 3, 13, 10, 30, 0)
    // },
    // {
    //   'title': 'Late Night Event',
    //   'start': new Date(2015, 3, 17, 19, 30, 0),
    //   'end': new Date(2015, 3, 18, 2, 0, 0)
    // },
    // {
    //   'title': 'Multi-day Event',
    //   'start': new Date(2015, 3, 20, 19, 30, 0),
    //   'end': new Date(2015, 3, 22, 2, 0, 0)
    // }
  ]
export default demoEvents