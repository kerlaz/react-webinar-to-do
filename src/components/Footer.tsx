import { FC, useState } from "react";

export const Footer: FC<{ addTask: (text: string) => void }> = ({ addTask }) => {
    const [task, setTask] = useState("")
    
    const onSubmit = (e: any) => {
        e.preventDefault();
        if (!task || task.length < 3) return;
        addTask(task);
        setTask("");
    }
    return (
        <footer>
            <form id="new_task_form" onSubmit={e => onSubmit(e)}>
                <input type="text" name="new_task_input"
                    id="new_task_input" placeholder="Create New Task"
                    value={task}
                    onChange={e => setTask(e.target.value)}
                />
                <button id="new_task_input_btn" type="submit"></button>
            </form>
        </footer>
    )
}