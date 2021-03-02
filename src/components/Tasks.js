import Task from './task';


const Tasks =({tasks,onDelete,onToggle})=> {
    return (
        <>
         {tasks.map((task)=>(
             <Task task={task} onDelete={()=>onDelete(task.id)} onToggle={()=>onToggle(task.id)}/>
         ))}
        </>
    )
}

export default Tasks;