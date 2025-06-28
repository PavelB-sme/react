import moment, { Moment, months, now } from 'moment';
import { JSX } from 'react';
interface CalendarDay {
  day: number,
  isCurrentMonth: boolean;
  isPrevMonth: boolean;
  isToday?: boolean;
}

const getFirstDayMonth = (date: moment.Moment): number => {
  const day: number = Number(moment().startOf('month').day())
  return day === 0 ? 6 : day - 1;
}

function generateCalendarDays(date: moment.Moment): CalendarDay[] {
    const dayInMonth = date.daysInMonth();
    const firstDay = getFirstDayMonth(date);
    const previousMonth = (moment().subtract(1, 'month'));
    const lastDayPreviousMonth = Number(previousMonth.endOf('month').format('DD'));
    const today = moment();
    const days: CalendarDay[] = [];



    for (let i = firstDay - 1; i >=0; i --) {
      days.push({
        day: lastDayPreviousMonth - i,
        isCurrentMonth: false,
        isPrevMonth: true, 
      })
    }

    for(let i = 1; i <= dayInMonth; i++) {
      const isToday = date.isSame(today, 'day') && i === today.date();
      days.push({
        day: i,
        isCurrentMonth: true,
        isPrevMonth: false,
        isToday,
      })
    }

    const nextMonthDays = 42 - days.length;
    for(let i = 1; i <= nextMonthDays; i++) {
      days.push({
        day: i,
        isCurrentMonth: false,
        isPrevMonth: true,
      })
    }
    return days;
  } 

const chunkIntoWeek = (days: CalendarDay[]): CalendarDay[][] => {
  const weeks: CalendarDay[][] = [];

  for(let i = 0; i < days.length; i += 7) {
    weeks.push(days.slice(i, i + 7));
  }
  return weeks;
}  


export default function DataPicker ({date}: { date: moment.Moment }): JSX.Element {

  const days = generateCalendarDays(date);
  const weeks = chunkIntoWeek(days)
  
  console.log(weeks)  
  return (
    <>
      <tbody>
        {weeks.map((week, weekIndex) => (
          <tr key={weekIndex}>
            {week.map((dayObj, dayIndex) => (
              <td 
                key={dayIndex}
                className={`
                  ${dayObj.isToday ? "ui-datepicker-today" : ""}
                  ${dayObj.isCurrentMonth ? "" :  "ui-datepicker-other-month" }
                  
                  `}
              >
                {dayObj.day}
              </td>  
            ))}
          </tr>
        ))
        }
      </tbody>
    </>
  )
}
