import moment from 'moment';
import React, { JSX } from 'react';
import DataPicker from './DataPicker/Datapicker';

const genitiveMonths = [
  'января',
  'февраля',
  'марта',
  'апреля', 
  'мая', 
  'июня', 
  'июля', 
  'августа',
  'сентября', 
  'октября', 
  'ноября', 
  'декабря'
];

moment.fn.genitive = function (this: moment.Moment): {month: string} {
  return {month: genitiveMonths[this.month()]}
}


export default function Calendar({date}: { date: moment.Moment }): JSX.Element {
  const capitalize = (str) => str.charAt(0).toUpperCase() + str.slice(1);
  const { month } = date.genitive() 

    return <>
      <div className="ui-datepicker">
        <div className="ui-datepicker-material-header">
          <div className="ui-datepicker-material-day">{capitalize(date.format('dddd'))}</div>
          <div className="ui-datepicker-material-date">
            <div className="ui-datepicker-material-day-num">{date.format('D')}</div>
            <div className="ui-datepicker-material-month">{month}</div>
          <div className="ui-datepicker-material-year">{date.format('yyyy')}</div>
          </div>
        </div>
        <div className="ui-datepicker-header">
          <div className="ui-datepicker-title">
            <span className="ui-datepicker-month">{capitalize(date.format('MMMM'))}</span>&nbsp;<span className="ui-datepicker-year">{date.format('yyyy')}</span>
          </div>
        </div>
        <table className="ui-datepicker-calendar">
          <colgroup>
            <col></col>
            <col></col>
            <col></col>
            <col></col>
            <col></col>
            <col className="ui-datepicker-week-end"></col>
            <col className="ui-datepicker-week-end"></col>
          </colgroup>
          <thead>
            <tr>
              <th scope="col" title="Понедельник">Пн</th>
              <th scope="col" title="Вторник">Вт</th>
              <th scope="col" title="Среда">Ср</th>
              <th scope="col" title="Четверг">Чт</th>
              <th scope="col" title="Пятница">Пт</th>
              <th scope="col" title="Суббота">Сб</th>
              <th scope="col" title="Воскресенье">Вс</th>
            </tr>
          </thead>
          <DataPicker date={date}/>
          </table>
        </div> 
    </>
  

}

