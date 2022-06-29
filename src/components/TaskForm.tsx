import { ChangeEvent, FormEvent, useState, useRef } from "react";
import { Task } from "../Interfaces/Task";

interface Props {
   newAddTask: (task:Task) => void 
}

type handleInputChange = ChangeEvent<HTMLInputElement|HTMLTextAreaElement>

const initialState = {
   title:"",
   descripcion:""
}

const TaskForm = ({newAddTask}:Props) =>{


   // save inputs value
   const [task, settask] = useState(initialState);
   
   const inputTitle = useRef<HTMLInputElement>(null);

   const handleInputChange = ({ target:{name, value}}: handleInputChange) =>{
      // console.log(target);
      // console.log(name);
      // console.log(value);
      settask({...task,[name]:value})
   };


   // const handleInputChange = ({
   //    target:{name, value},
   // }: ChangeEvent<HTMLInputElement|HTMLTextAreaElement>) =>{
      
   //    // console.log(target);
   //    console.log(name);
   //    console.log(value);
   //    settask({...task,[name]:value})
   // };


   const handleNewTask = (e:FormEvent<HTMLFormElement>) =>{
      e.preventDefault(); 
      newAddTask(task);
      settask(initialState);
      inputTitle.current?.focus();
   };


   return(
      <div className="card card-body bg-secondary text-dark">
      <h1>Add a Task</h1>

      <form onSubmit={handleNewTask}>
      {/* <form > */}
        <input
          type="text"
          placeholder="Write a Title"
          name="title"
          onChange={handleInputChange}
          className="form-control mb-3 rounded-0 shadow-none border-0"
          autoFocus
          value={task.title}
          ref={inputTitle}
        />
        <textarea
          onChange={handleInputChange}
          name="descripcion"
          className="form-control mb-3 shadow-none border-0"
          placeholder="Write a Description"
          value={task.descripcion}
        ></textarea>
        <button type="submit" className="btn btn-primary">
          Save 
          {/* <AiOutlinePlus /> */}
        </button>
      </form>
    </div>
   );

}

export default TaskForm;