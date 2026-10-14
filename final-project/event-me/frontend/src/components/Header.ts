import { Theme as ThemeIcon } from "./Icons"

const themeToggleId = "theme"

const Header = `
<header>
    <hgroup>
        <h1 class=".parkinsans">event me</h1>
        <p>All the events you never knew you needed to attend!</p>
    </hgroup>
    <a href="#" role="toggle" id="${themeToggleId}"  title="Toggle color scheme" >
        ${ThemeIcon}
    </a>
</header>
`

type Theme = "light" | "dark" | null

const toggleDarkMode = () => {
  const doc = document.documentElement
  const currentTheme = doc.getAttribute("data-theme") as Theme
  if (currentTheme === "dark") {
    doc.setAttribute("data-theme", "light")
  } else if (currentTheme === "light") {
    doc.setAttribute("data-theme", "dark")
  }
}

export function setupThemeToggle() {
  const themeToggle = document.getElementById(themeToggleId)
  themeToggle?.addEventListener("click", toggleDarkMode)
}

// What does this mean I wonder?
export default Header
