const root: HTMLElement | null = document.querySelector(":root");

export const toggleTheme = (darkTheme: boolean) => {
    if(!root) return
    // var darkTheme = themeBtn.classList.toggle("dark");

    if (!darkTheme) {
        root.style.setProperty("--theme-transition", "1s");
        root.style.setProperty("--primary-color", "#1E1E1E");
        root.style.setProperty("--secondary-color", "#3B3B3B");
        root.style.setProperty("--text-color", "#EAEAEA");
        root.style.setProperty("--task-color", "#3B3B3B");
        root.style.setProperty("--footer-color", "#1E1E1E");
        root.style.setProperty(
            "--theme-btn",
            `url('assets/Light-theme-btn.svg')`
        );
        root.style.setProperty(
            "--container-bg",
            `url('./assets/Dark-empty.svg')`
        );
        root.style.setProperty("--filter", "invert()");
    } else {
        root.style.setProperty("transition", "1s");
        root.style.setProperty("--primary-color", "white");
        root.style.setProperty("--secondary-color", "#1E1E1E");
        root.style.setProperty("--text-color", "black");
        root.style.setProperty("--task-color", "white");
        root.style.setProperty("--footer-color", "#1E1E1E");
        root.style.setProperty(
            "--theme-btn",
            `url('assets/Dark-theme-btn.svg')`
        );
        root.style.setProperty(
            "--container-bg",
            `url('./assets/Light-empty.svg')`
        );
    }
}