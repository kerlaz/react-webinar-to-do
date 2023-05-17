import { Component, ReactNode } from 'react'
import './App.css'
import { Header } from './components/Header'
import { Footer } from './components/Footer'
import { Task } from './components/Task'
import { nanoid } from 'nanoid'
import { TTask } from './types/task'

class App extends Component<{},{tasks: TTask[]}> {
  state = {
    tasks: [
      { text: "First task", id: "abscd"},
      { text: "Second task", id: "yiuwer8487"},
    ]
  }
  addTask = (text: string) => {
    const newTask: TTask = {
      id: nanoid(),
      text
    }
    const updatedTasks = [
      ...this.state.tasks,
      newTask
    ]
    this.setState({tasks: updatedTasks})
  }
  removeTask = (id: string) => {
    const updatedTasks = this.state.tasks.filter(task => task.id !== id);
    this.setState({tasks: updatedTasks})
  }
  render(): ReactNode {
    return (
      <div className="container task_list_empty">
        <Header />
        <section className="tasks">
            <ul id="tasksList">
              {this.state.tasks.map((task) => (
                <Task key={`task-${task.id}`} 
                taskData={task}
                remove={this.removeTask.bind(this)}/>
              ))}
            </ul>
        </section>
        <Footer addTask={this.addTask.bind(this)} />
    </div>
    )
  }
}

export default App
