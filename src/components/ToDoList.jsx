/* eslint-disable no-unused-vars */
import React , {useState} from "react"

const ToDoList = () => {
    const [todos, setTodos] = useState([]);
    const [inputValue, setInputValue] = useState([])

    function handleChange(e) {
        setInputValue(e.target.value);
    }
  return (
    <div>
        <form>
            <input type="text"/>
            <button>Add Todo</button>
        </form>
        <ul>
            <li>

            </li>
        </ul>
    </div>
  )
}

export default ToDoList