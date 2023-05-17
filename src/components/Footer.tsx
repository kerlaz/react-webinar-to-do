import { Component, ReactNode } from "react";

export class Footer extends Component<{addTask: (text: string) => void}> {
    state = {
        task: "",
    }
    onChange = (e: any) => {
        this.setState({task: e.target.value})
    }
    onSubmit = (e: any) => {
        e.preventDefault();
        const newTask = this.state.task;
        if(!newTask || newTask.length < 3) return;
        console.log(newTask);
        this.props.addTask(newTask);
        this.setState({task: ""});
    }
    render(): ReactNode {
        return (
            <footer>
                <form id="new_task_form" onSubmit={e => this.onSubmit(e)}>
                    <input type="text" name="new_task_input"
                        id="new_task_input" placeholder="Create New Task"
                        value={this.state.task}
                        onChange={e => this.onChange(e)}
                        />
                    <button id="new_task_input_btn" type="submit"></button>
                </form>
            </footer>
        )
    }
}