import { FC } from "react";
import { TTask } from "../types/task";

type TTaskProps = { taskData: TTask, remove: (id: string) => void };

export const Task: FC<TTaskProps> = ({ taskData, remove }) => {
    const onRemove = () => {
        remove(taskData.id)
    }
    return (
        <li className="task_item">
            <div className="task_check_btn" onClick={() => onRemove()}></div>
            <span className="task_bio">{taskData.text}</span>
        </li>
    )
}