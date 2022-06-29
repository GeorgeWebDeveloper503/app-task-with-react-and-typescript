
import './App.css';

import Logo from './logo.svg'
import {useState} from 'react';

import { Task } from "./Interfaces/Task";
import TaskList from './components/taskList';
import TaskForm from './components/TaskForm';


function App() {
  
  const [tasks, settasks] = useState<Task[]>([{
    id:1,
    title:"Learn React",
    descripcion:"Descropcion Task",
    completed:false
  }]);

 
  const getCurrentTimestamp = (): number => new Date().getTime();

  const newAddTask = (task:Task) =>{
  
    // settasks([...tasks, task])
    // settasks([...tasks, {...task, id:getCurrentTimestamp, completed: false}])
    settasks([...tasks, {...task, id:(tasks.length + 1), completed: false}])
  };

  const deleteATask = (id: number): void =>{
    settasks(tasks.filter((task) => task.id !== id));
  };


  return (
    <div className='bg-dark text-white' style={{height:"100vh"}}>
      
      <nav className='navbar navbar-dark bg-primary'>
        <div className='container'>
          <a href="" className='navbar-brand'>
            <img src={Logo} alt="" style={{width:"8rem"}} />
            React and TypeScript
          </a>
        </div>
      </nav>
      
        <main className="container p-4 ">
          <div className='row'>
            <div className='col-md-4'> 
            Task Form
            <TaskForm
              newAddTask = {newAddTask}
            />
            </div>
            <div className='row col-md-8 mt-4'>
              <TaskList 
                tasks={tasks}
                deleteATask = {deleteATask}  
              /> 
            </div>
          </div>
        </main>

    </div>
  );
}

export default App;
