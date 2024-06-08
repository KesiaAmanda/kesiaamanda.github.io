import { useState } from "react";
import { Desktop, Screen, Taskbar, Workspace } from "./styles";
import { ThemeProvider } from "styled-components";
import { darkTheme, lightTheme } from "./globals/theme";
import GlobalStyle from "./globals/style";

function App() {

  const [theme, setTheme] = useState('light');

  const themeToggler = () => {
    theme === 'light' ? setTheme('dark') : setTheme('light')
  }

  return (
    <ThemeProvider theme={theme === 'light' ? lightTheme : darkTheme}>
      <GlobalStyle />
      <Screen>
        <Desktop>
          <Workspace>
            <button onClick={themeToggler}>Switch Theme</button>
            {/* desktop icons */}
          </Workspace>
          {/* pages */}
        </Desktop>

        {/* icons */}
        <Taskbar>
        </Taskbar>
      </Screen>
    </ThemeProvider>
  );
}

export default App;
