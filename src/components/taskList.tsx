import { Task } from "../Interfaces/Task";
import TaskCard from "./TaskCard";


interface Props {
   tasks: Task[];
   deleteATask: (id:number) => void
}

const TaskList = ({ tasks,deleteATask }: Props) =>{

   return(
    <>
      {
         tasks.map((task)=>(

            <div className="col-md-5 pb-2">
               <TaskCard task={task} deleteATask= {deleteATask} /> 
            </div>
            
         ))
       }
    </>
   );

}

export default TaskList;