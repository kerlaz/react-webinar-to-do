import { Component, ReactNode } from "react";
import { TTask } from "../types/task";

export class Task extends Component<{taskData: TTask, remove: (id: string) => void}> {
    onRemove = () => {
        // console.log(this.props.id)
        this.props.remove(this.props.taskData.id)
    }
    render(): ReactNode {
        return (
            <li className="task_item">
                <div className="task_check_btn" onClick={()=>this.onRemove()}></div>
                <span className="task_bio">{this.props.taskData.text}</span>
            </li>
        )
    }
}