import './App.css';
import React, { useState } from 'react';

function App () {
  // Initiate useState with empty array, and current state and set function to update state 
  const [todos, setTodos] = useState([]);

  // Initiate useState with empty array to track the input value
  const [input, setInput] = useState('');

  // Create a fucntion that gets an event for onClick
  const addTodo = (e) => {
    // Prevent default behaviour, prevents refresh
    e.preventDefault();

    // Use backticks for string interpolation
    console.log(`Got the input value ${input}`);

    // Use spread operator to set all setTodos array that we have and also append the one in the input
    setTodos([...todos, input]);

    // Pass emtpy string to input after new todo is added
    setInput("");
  };

  return (
    <div className="App">
      <h1>Welcome todo app</h1>

      <form>
        {/* Match value to the input above & and listener onChange that fire off an event (e, for shorthand) to track input value*/}
        <input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          type="text"></input>

        <button type="submit" onClick={addTodo}>Add todo</button>
        <h2>Todo listing</h2>

        {/* Using Array.map() method */}
        {todos.map((todo) => (
          <p>{todo}</p>
        ))}
      </form>
    </div>
  );
}

export default App;
