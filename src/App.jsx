import { useState } from 'react';
import './App.css';
import DishInput from './DishInput';
import DishList from './DishList';
import TaskAdder from './taskAdder';
import Calender from './Calender';

function App() {

  const [taskList, setTaskList] = useState([]);
  const [calender, setCalender] = useState([]);

  return (
    <div className='app-layout'>
      <DishInput setTaskList={setTaskList} />

      <TaskAdder 
        kindOfTask={'do shopping'}
        timeInputName={'shopping'}
        placeholder='where? eg Netto...' 
        setCalender={setCalender} 
      />

      <TaskAdder 
        kindOfTask={'cook'} 
        timeInputName={'cooking'} 
        placeholder='what? eg lunch or dinner...' 
        setCalender={setCalender} 
      />

      <TaskAdder 
        kindOfTask={'eat'} 
        timeInputName={'eating'} 
        placeholder='what? eg lunch or dinner...' 
        setCalender={setCalender} 
      />

      <DishList taskList={taskList} setTaskList={setTaskList} />
      <Calender calender={calender} />
    </div>
  );
}

export default App;
