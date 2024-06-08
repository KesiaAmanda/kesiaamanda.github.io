import { useState } from "react";
import { Desktop, Screen, Taskbar, Workspace } from "./styles";
import { ThemeProvider } from "styled-components";
import { darkTheme, lightTheme } from "./globals/theme";

function App() {

  const [theme, setTheme] = useState('light');

  const themeToggler = () => {
    theme === 'light' ? setTheme('dark') : setTheme('light')
  }

  return (
    <ThemeProvider theme={theme === 'light' ? lightTheme : darkTheme}>
      <Screen>
        <Desktop>
          <Workspace>
            <button onClick={themeToggler}>Switch Theme</button>
            {/* desktop icons */}
          </Workspace>
          {/* pages */}
        </Desktop>
        <Taskbar>
          {/* icons */}
        </Taskbar>
      </Screen>
    </ThemeProvider>
  );
}

export default App;
