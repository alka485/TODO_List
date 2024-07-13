/* eslint-disable no-unused-vars */
import React , {useState} from "react"

const ToDoList = () => {
    const [todos, setTodos] = useState([]);
    const [inputValue, setInputValue] = useState([])

    function handleChange(e) {
        setInputValue(e.target.value);
    }

    function handleSubmit(e) {
        e.prevent.Default();
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
        <form>
            <input type="text" value={inputValue} onChange={handleChange}/>
            <button onClick={handleSubmit}>Add Todo</button>
        </form>
        <ul>
            {todos.map((todo,index) => (
            <li key={todo}>{todo}
            <button onClick={() => handleDelete(index)}>Delete</button>
            </li>
            ))}
        </ul>
    </div>
  )
}

export default ToDoList