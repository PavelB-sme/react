import moment from 'moment';
import 'moment/dist/locale/ru';
moment.locale('ru-RU');
import Calendar from './components/Calendar';

import './App.css';
const now = moment();

function App() {

  

  
  return (
    <>
      <Calendar date={now}/>
    </>
  )
}

export default App
