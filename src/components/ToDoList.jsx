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
  return (
    <div>
        <form>
            <input type="text" value={inputValue} onChange={handleChange}/>
            <button onClick={handleSubmit}>Add Todo</button>
        </form>
        <ul>
            <li>

            </li>
        </ul>
    </div>
  )
}

export default ToDoList