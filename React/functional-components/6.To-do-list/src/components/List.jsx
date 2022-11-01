import React, { useState } from "react";

const List = props => {
    const [newTask, setNewTask] = useState("")
    const [task, setTask] = useState([
        {task:"Finish to-do-list", IsDone: false, textDecoration: "none"},
        {task:"Prepare TOEFL", IsDone: false, textDecoration: "none"},
        {task:"Finish API", IsDone: false, textDecoration: "none"}
    ])

    const addNewTask = e => {
        if(newTask === ""){
            return
        }
        setTask([...task, { task: newTask, IsDone: false }])
        setNewTask("")
    }

    const deleteTask = key => {
        let index = key.i
        const temp = [...task];
        temp.splice(index, 1)
        setTask(temp)
    }

    const editStatus = (key) => {
        let index = key.i
        const temp = [...task];
        temp[index].IsDone = !temp[index].IsDone
        if(temp[index].IsDone === true){
            temp[index].textDecoration = "line-through"
        } else {
            temp[index].textDecoration = "none"
        }
        setTask(temp)
    }

    return(
        <div>
            <div>
                <label>Add new Task</label>
                <input type="text" placeholder="Enter new task" onChange={ e => setNewTask(e.target.value) } value={ newTask }/>
                <button onClick={ addNewTask }>Add</button>
            </div>
            <hr />
            <h3>Task to do for the day:</h3>
            { task.map( 
                (item, i) => 
                <div key={ i } style={{ display:"flex", alignItems:"center" }}>
                    <input type="checkbox" checked={ item.IsDone } onChange={e => editStatus({i})}/>
                    <h5 style={{ textDecoration:  item.textDecoration, color: "blue"  }}>{ item.task }</h5>
                    <button style={{ height:"25px", marginLeft:"10px" }}  onClick={ e => deleteTask({i}) } >Delete</button>
                </div>
            )}
        </div>
    )
}

export default List;