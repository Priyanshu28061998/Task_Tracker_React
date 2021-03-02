import {useState} from 'react';

const AddTask =({onAdd})=> {

    const [text,setText] = useState('');
    const [date,setDate] = useState('');
    const [reminder,setReminder] = useState(false);

    const onSubmit =(e)=> {
        e.preventDefault();
        
        if(!text){
            alert('Please add text');
            return;
        }
        onAdd({text,date,reminder});
        setText('');
        setDate('');
        setReminder(false);
    }

    return(
        <form className='add-form' onSubmit={onSubmit}>
        <div className='form-control'>
           <label>Task</label>
           <input type='text' placeholder='Add Task' value={text} onChange={(e) => setText(e.target.value)}></input>
        </div>
        <div className='form-control'>
           <label>Date & Time</label>
           <input type='text' placeholder='Add Date and Time' value={date} onChange={(e) => setDate(e.target.value)}></input>
        </div>
        <div className='form-control form-control-check'>
           <label>Set Reminder</label>
           <input type='checkbox' checked={reminder} onChange={(e) => setReminder(e.currentTarget.checked)}></input>
        </div>
        <input type='submit' className='btn btn-block' value='Save Task'></input>
        </form>
    )

}

export default AddTask;