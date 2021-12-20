import React, { useState,Component,useEffect } from "react";
import axios from "axios";


function Task({ task, index, completeTask, removeTask,pres }) {

const [ts,setTs]=useState({
	title: task.title
})

const addpres = () => {
        axios.post("https://vast-ravine-20529.herokuapp.com/docdes", ts)
        .then(res => {
           
          
        })
    }

    return (
        <div
            className="task"
            style={{ textDecoration: task.completed ? "line-through" : "" }}
        >
            {task.title}

            <button style={{ background: "red" }} onClick={() => removeTask(index)}>x</button>
            
            <button onClick={addpres}>Add</button>
        </div>
    );
}

function CreateTask({ addTask }) {
	const [pres,setPres]=useState({
		medicine:"",
		time:""
	})
    const [value, setValue] = useState("");
    const [time,setTime] = useState("");



     const handleChange = e => {
        const { name, value } = e.target
        setPres({
            ...pres,
            [name]: value
        })
    }

    const handleSubmit = e => {
        e.preventDefault();
        if (!value) return;
        addTask(value);
        setValue("");
         
    }


    return (
        <form onSubmit={handleSubmit}>
            <input
            class="input1"
                type="text"
                
                name="medicine"
                value={value}
                placeholder="Add a new task"
                onChange={e => setValue(e.target.value)}
            />
        
            
        </form>
    );
}

function Docdes()
{

	const [tasksRemaining, setTasksRemaining] = useState(0);
    const [tasks, setTasks] = useState([]);

    



    useEffect(() => { setTasksRemaining(tasks.filter(task => !task.completed).length) });


    const addTask = title => {
        const newTasks = [...tasks, { title, completed: false }];
        setTasks(newTasks);

    };

    const completeTask = index => {
        const newTasks = [...tasks];
        newTasks[index].completed = true;
        setTasks(newTasks);
    };

    const removeTask = index => {
        const newTasks = [...tasks];
        newTasks.splice(index, 1);
        setTasks(newTasks);
    };
   return(
   	<div>
    <div class="docdes-card">
   <h1>John Doe</h1>
  <p class="title">CEO & Founder, Example</p>
  <p>Harvard University</p>
  <p><button>Contact</button></p>
</div>
<div class="docdes-card2">
 <div className="todo-container">
            <div className="header">Prescription medicines({tasksRemaining})</div>
            <div className="tasks">
                {tasks.map((task, index) => (
                    <Task
                    task={task}
                    index={index}
                    completeTask={completeTask}
                    removeTask={removeTask}
                    key={index}
                    />
                ))}
            </div>
            <div className="create-task" >
                <CreateTask addTask={addTask} />
            </div>
            
        </div>
   

</div>
</div>
   	);
}
  

export default Docdes;