import './App.css';
import Header from "./components/header";
import Tasks from './components/Tasks';
import {useState} from 'react';
import AddTask from './components/AddTask';

function App() {

  const [showAddTask,setShowAddTask] = useState(false);

  const [tasks, setTasks] = useState([
    
  ])

  const addTask =(task)=> {
    const id=Math.floor(Math.random()*1000)+1;
    console.log(id);
    const newTask={id,...task};
    setTasks([...tasks,newTask]);
    console.log(tasks);
    console.log(newTask);
  }

  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id))
  }

  const toggleReminder = (id) => {
    setTasks(tasks.map((task)=> task.id===id ? {...task,reminder:!task.reminder} : task))
  }

  return (
    <div className="container">
      <Header onAdd={()=> setShowAddTask(!showAddTask)} showAdd={showAddTask}/>
      {showAddTask&&<AddTask onAdd={addTask}/>}
      {tasks.length>0 ? <Tasks tasks={tasks} onDelete={deleteTask} onToggle={toggleReminder}/> : 'No Task to Show'}
    </div>
  );
}

export default App;
