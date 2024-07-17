/* eslint-disable no-unused-vars */
import React , {useState} from "react"

const ToDoList = () => {
    const [todos, setTodos] = useState([]);
    const [inputValue, setInputValue] = useState('');
    const [message, setMessage] = useState('');

    function handleChange(e) {
        setInputValue(e.target.value);
    }

    function handleSubmit(e) {
        e.preventDefault();
        if(inputValue.trim()){
            setTodos([...todos , inputValue]);
            setInputValue('');
            setMessage('New todo added!');
            setTimeout(()=> setMessage(''),2000); // clear message after 2 sec
            //console.log('New todo added', inputValue);
        }
        else{
            setMessage("Input is empty, todo not added");
            setTimeout(() => setMessage(''),2000); // clear message 
        }
    }

    function handleDelete(index) {
        const newTodos = [...todos];
        newTodos.splice(index,1);
        setTodos(newTodos);
        setMessage("todo deleted!");
        setTimeout(()=> setMessage(''), 2000);
    }
  return (
    <div className="container">
        <form onSubmit={handleSubmit} className="todo-form">
            <input type="text"
             value={inputValue} 
             onChange={handleChange}
             placeholder="Add a new ToDO"
             className="todo-input"
             />
            <button type="submit" className="todo-button">Add Todo</button>
        </form>
        {message && <p className="message">{message}</p>}
        <ul className="list">
            {todos.map((todo,index) => (
            <li key={index} className="listItem">
                <p>{todo}</p>
            <button onClick={() => handleDelete(index)} className="deleteButton">Delete</button>
            </li>
            ))}
        </ul>
    </div>
  )
}

export default ToDoList