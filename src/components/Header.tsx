import { useState } from "react";
import { toggleTheme } from "../services/theme";

export const Header = () => {
    const [darkTheme,setDarkTheme] = useState<boolean>(false);
    const [user, setUser] = useState<string>("Vasya");

    const onToggleTheme = () => {
        toggleTheme(darkTheme);
        setDarkTheme(!darkTheme);
    }
    const onChangeUser = (name: string) => {
        setUser(name)
    }
    return (
        <header>
            <div className="theme_toogle">
                <button className="theme_toogle_btn" onClick={() => onToggleTheme()}></button>
            </div>
            <span className="heading">{user}'s Day</span>
            <button onClick={()=>onChangeUser("John")}>Change user</button>
        </header>
    )
}