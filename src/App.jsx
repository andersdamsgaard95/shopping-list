import { useState, useEffect } from 'react';
import './App.css';
import Day from './Day';
import DishList from './DishList';

function App() {
  
  const [savedMeals, setSavedMeals] = useState([]);

  const [mondayMeals, setMondayMeals] = useState([]);
  const [tuesdayMeals, setTuesdayMeals] = useState([]);
  const [wednesdayMeals, setWednesdayMeals] = useState([]);
  const [thursdayMeals, setThursdayMeals] = useState([]);
  const [fridayMeals, setFridayMeals] = useState([]);
  const [saturdayMeals, setSaturdayMeals] = useState([]);
  const [sundayMeals, setSundayMeals] = useState([]);

  //  LOAD LISTS FROM LOCAL STORAGE ON FIRST MOUNT
  useEffect(() => {
    const loadFromLocalStorage = (key, setState) => {
      const savedData = localStorage.getItem(key);
      if (savedData) setState(JSON.parse(savedData));
    };

    loadFromLocalStorage('savedMeals', setSavedMeals);
    loadFromLocalStorage('mondayMeals', setMondayMeals);
    loadFromLocalStorage('tuesdayMeals', setTuesdayMeals);
    loadFromLocalStorage('wednesdayMeals', setWednesdayMeals);
    loadFromLocalStorage('thursdayMeals', setThursdayMeals);
    loadFromLocalStorage('fridayMeals', setFridayMeals);
    loadFromLocalStorage('saturdayMeals', setSaturdayMeals);
    loadFromLocalStorage('sundayMeals', setSundayMeals);
  }, []);
  
  //  SAVE LISTS TO LOCAL STORAGE
  useEffect(() => {
    const saveToLocalStorage = (key, data) => {
      localStorage.setItem(key, JSON.stringify(data));
    };

    saveToLocalStorage('savedMeals', savedMeals);
    saveToLocalStorage('mondayMeals', mondayMeals);
    saveToLocalStorage('tuesdayMeals', tuesdayMeals);
    saveToLocalStorage('wednesdayMeals', wednesdayMeals);
    saveToLocalStorage('thursdayMeals', thursdayMeals);
    saveToLocalStorage('fridayMeals', fridayMeals);
    saveToLocalStorage('saturdayMeals', saturdayMeals);
    saveToLocalStorage('sundayMeals', sundayMeals);
  }, [
    savedMeals,
    mondayMeals,
    tuesdayMeals,
    wednesdayMeals,
    thursdayMeals,
    fridayMeals,
    saturdayMeals,
    sundayMeals
  ]);

  function addSavedMealToADay(mealIndex, day) {
    switch (day) {
      case 'Monday':
        setMondayMeals((prev) => [
        ...prev,
        savedMeals[mealIndex]
        ]);
        break;
      case 'Tuesday':
        setTuesdayMeals((prev) => [
        ...prev,
        savedMeals[mealIndex]
        ]);
        break;
      case 'Wednesday':
        setWednesdayMeals((prev) => [
        ...prev,
        savedMeals[mealIndex]
        ])
        break;
      case 'Thursday':
        setThursdayMeals((prev) => [
        ...prev,
        savedMeals[mealIndex]
        ])
        break;
      case 'Friday':
        setFridayMeals((prev) => [
        ...prev,
        savedMeals[mealIndex]
        ])
        break;
      case 'Saturday':
        setSaturdayMeals((prev) => [
        ...prev,
        savedMeals[mealIndex]
        ])
        break;
      case 'Sunday':
        setSundayMeals((prev) => [
        ...prev,
        savedMeals[mealIndex]
        ])
        break;
    }
  }
  
  return (
    <section id='app-layout'>
      <div id='days'>
        <Day 
          dayOfTheWeek={'Monday'} 
          setSavedMeals={setSavedMeals} 
          taskList={mondayMeals} 
          setTaskList={setMondayMeals} 
        />
        <Day 
          dayOfTheWeek={'Tuesday'} 
          setSavedMeals={setSavedMeals} 
          taskList={tuesdayMeals} 
          setTaskList={setTuesdayMeals} 
        />
        <Day 
          dayOfTheWeek={'Wednesday'} 
          setSavedMeals={setSavedMeals} 
          taskList={wednesdayMeals} 
          setTaskList={setWednesdayMeals} 
        />
        <Day 
          dayOfTheWeek={'Thursday'} 
          setSavedMeals={setSavedMeals} 
          taskList={thursdayMeals} 
          setTaskList={setThursdayMeals} 
        />
        <Day 
          dayOfTheWeek={'Friday'} 
          setSavedMeals={setSavedMeals} 
          taskList={fridayMeals} 
          setTaskList={setFridayMeals} 
        />
        <Day 
          dayOfTheWeek={'Saturday'} 
          setSavedMeals={setSavedMeals} 
          taskList={saturdayMeals} 
          setTaskList={setSaturdayMeals} 
        />
        <Day 
          dayOfTheWeek={'Sunday'}
          setSavedMeals={setSavedMeals} 
          taskList={sundayMeals} 
          setTaskList={setSundayMeals} 
        />
      </div>
      
      <DishList 
        listHeading='Saved meals' 
        mealList={savedMeals} 
        setMealList={setSavedMeals} 
        exportMeal={addSavedMealToADay} 
        possibleToPrioritize={true} 
      />
    </section>
  )
}

export default App;
