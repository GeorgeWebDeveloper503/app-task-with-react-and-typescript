import { Task } from "../Interfaces/Task";

interface Props{
   task: Task,
   deleteATask: (id:number) => void
}


const TaskCard = ({task, deleteATask}: Props) =>{

   return(
      <div className="card card-body rounded-0 text-black">
         <h3>{task.title}</h3>
         <h3>{task.descripcion}</h3>
         <h3>{task.id}</h3>

         {/* validate
          task.id && deleteATask(task.id) 
         */}
         <button className="btn btn-danger mt-5" onClick={() => task.id && deleteATask(task.id)}  >
            Delete
         </button>
      </div>
   );

}

export default TaskCard;