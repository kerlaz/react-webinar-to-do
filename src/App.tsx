import { useState } from 'react'
import './App.scss'
import { Header } from './components/Header'
import { Footer } from './components/Footer'
import { Task } from './components/Task'
import { nanoid } from 'nanoid'
import { TTask } from './types/task'

const App = () => {
  const [tasks, setTasks] = useState<TTask[]>([
    { text: "First task", id: "abscd"},
    { text: "Second task", id: "yiuwer8487"},
  ])
  const [headerVisibility,setHeaderVisibility] = useState(true);
  const toggleHeader = () => {
    setHeaderVisibility(!headerVisibility);
  };
  const addTask = (text: string) => {
    const newTask: TTask = {
      id: nanoid(),
      text
    }
    const updatedTasks = [
      ...tasks,
      newTask
    ]
    setTasks(updatedTasks)
  }
  const removeTask = (id: string) => {
    const updatedTasks = tasks.filter(task => task.id !== id);
    setTasks(updatedTasks)
  }
  return (
    <div className="container task_list_empty">
      <button onClick={toggleHeader}>Toggle Header: {headerVisibility ? "On" : "Off"}</button>
        {headerVisibility ? <Header /> : <p>mini header</p>}
        <section className={headerVisibility ? "tasks" : "tasks mini"}>
            <ul id="tasksList" style={{background: headerVisibility ? "black" : "tomato"}}>
              {tasks.map((task) => (
                <Task key={`task-${task.id}`} 
                taskData={task}
                remove={removeTask}/>
              ))}
            </ul>
        </section>
        <Footer addTask={addTask} />
    </div>
  )
}

export default App
