/* eslint-disable no-unused-vars */
import React , {useState} from "react"

const ToDoList = () => {
    const [todos, setTodos] = useState([]);
    const [inputValue, setInputValue] = useState([])

    function handleChange(e) {
        setInputValue(e.target.value);
    }

    function handleSubmit(e) {
        e.preventDefault();
        setTodos([...todos , inputValue]);
        setInputValue('');
    }

    function handleDelete(index) {
        const newTodos = [...todos];
        newTodos.splice(index,1);
        setTodos(newTodos);
    }
  return (
    <div className="container">
        <form onSubmit={handleSubmit}>
            <input type="text"
             value={inputValue} 
             onChange={handleChange}
             />
            <button type="submit" >Add Todo</button>
        </form>
        <ul className="list">
            {todos.map((todo,index) => (
            <li key={index} className="listItem">
                <p>hi</p>{todo}
            <button onClick={() => handleDelete(index)} className="deleteButton">Delete</button>
            </li>
            ))}
        </ul>
    </div>
  )
}

export default ToDoList