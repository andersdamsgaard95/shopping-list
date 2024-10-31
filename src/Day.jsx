import { useState } from 'react';
import './Day.css';
import DishInput from './DishInput';
import DishList from './DishList';
import TaskAdder from './taskAdder';
import Calender from './Calender';

export default function Day({ dayOfTheWeek, setSavedMeals, taskList, setTaskList }) {

  const [calender, setCalender] = useState([]);
  //const [taskList, setTaskList] = useState([]);

  function saveMeal(mealIndex) {
    setSavedMeals((prev) => [
        ...prev,
        taskList[mealIndex]
    ])
  }

  return (
    <div id='day-layout'>

      <h1>{dayOfTheWeek}</h1>  
      <DishInput setTaskList={setTaskList} />

      <TaskAdder 
        kindOfTask={'do shopping'}
        placeholder='where? eg Netto...' 
        setCalender={setCalender} 
      />

      <TaskAdder 
        kindOfTask={'cook'} 
        placeholder='what? eg lunch or dinner...' 
        setCalender={setCalender} 
      />

      <TaskAdder 
        kindOfTask={'eat'}
        placeholder='what? eg lunch or dinner...' 
        setCalender={setCalender} 
      />

      <DishList listHeading='Todays meals' mealList={taskList} setMealList={setTaskList} exportMeal={saveMeal} />
    
      <Calender calender={calender} />

    </div>
  );
}
