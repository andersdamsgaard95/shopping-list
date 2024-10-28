import { useState } from 'react';
import './App.css';
import DishInput from './DishInput';
import DishList from './DishList';

function App() {

  const [taskList, setTaskList] = useState([]);

  return (
    <div className='app-layout'>
      <DishInput setTaskList={setTaskList} />
      <DishList taskList={taskList} setTaskList={setTaskList} />
    </div>
  );
}

export default App;
