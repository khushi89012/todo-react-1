import { useState } from 'react'
import logo from './logo.svg'
import './App.css'
import {TodoInput} from './components/todoInput'
import {TodoList} from './components/todoList'

function App() {
 

  return (
    <div className="App">
      <h1>Make Your Todo </h1>
      <TodoInput />
      <TodoList />
     
    </div>
  )
}

export default App
