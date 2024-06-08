import { useEffect, useState } from "react";
import { Desktop, Screen, Taskbar, Workspace } from "./styles";
import { ThemeProvider } from "styled-components";
import { darkTheme, lightTheme } from "./globals/theme";
import GlobalStyle from "./globals/style";

function App() {

  const [isDark, setIsDark] = useState<boolean>(false);

  const themeToggler = () => {
    setIsDark(!isDark);
  }

  useEffect(() => {
    const mq = window.matchMedia(
      "(prefers-color-scheme: dark)"
    );

    if (mq.matches) {
      setIsDark(true);
    }
  }, []);

  return (
    <ThemeProvider theme={isDark ? darkTheme : lightTheme}>
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
