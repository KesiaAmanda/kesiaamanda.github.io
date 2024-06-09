import { useEffect, useState } from "react";
import { Desktop, Screen, Taskbar, Workspace } from "./styles";
import { ThemeProvider } from "styled-components";
import { darkTheme, lightTheme } from "./globals/theme";
import GlobalStyle from "./globals/style";

import { ThemeIcon } from "./components/desktop-icon/theme-icon";
import { StartButton } from "./components/taskbar-button/start-button";

function App() {
  const [isDark, setIsDark] = useState<boolean>(false);

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
            {/* desktop icons */}
            <ThemeIcon onClick={setIsDark} isDark={isDark} />

          </Workspace>
          {/* pages */}

        </Desktop>
        <Taskbar>
          {/* icons */}
          <StartButton />

        </Taskbar>
      </Screen>
    </ThemeProvider>
  );
}

export default App;
