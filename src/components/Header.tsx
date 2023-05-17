import { Component, ReactNode } from "react";
import { toggleTheme } from "../services/theme";

export class Header extends Component {
    state = {
        darkTheme: false
    }
    onToggleTheme = () => {
        toggleTheme(this.state.darkTheme);
        this.setState({darkTheme: !this.state.darkTheme})
    }
    render(): ReactNode {
        return (
            <header>
                <div className="theme_toogle">
                    <button className="theme_toogle_btn" onClick={() => this.onToggleTheme()}></button>
                </div>
                <span className="heading">My Day</span>
            </header>
        )
    }
}