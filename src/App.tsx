import { useEffect, useState } from "react";
import { Desktop, Screen, Taskbar, Workspace } from "./styles";
import { ThemeProvider } from "styled-components";
import { darkTheme, lightTheme } from "./globals/theme";
import GlobalStyle from "./globals/style";

import { ThemeIcon } from "./components/desktop/theme-icon";
import { StartButton } from "./components/taskbar/start-button";
import { Notifications } from "./components/notification";
import { Welcome } from "./pages/welcome";
import { PagesContextProvider } from "./contexts/PagesContext";
import { AboutMe } from "./pages/about-me";
import { Training } from "./pages/training";
import { TaskbarButtons } from "./components/taskbar/taskbar-buttons";
import { DesktopIcons } from "./components/desktop/desktop-icons";

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
    <PagesContextProvider>
      <ThemeProvider theme={isDark ? darkTheme : lightTheme}>
        <GlobalStyle />
        <Screen>
          <Desktop>
            <Workspace>
              {/* desktop icons */}
              <ThemeIcon onClick={setIsDark} isDark={isDark} />
              <DesktopIcons />

            </Workspace>
            {/* pages */}
            <Welcome></Welcome>
            <AboutMe></AboutMe>
            <Training />


          </Desktop>
          <Taskbar>
            {/* buttons */}
            <StartButton />
            <TaskbarButtons />
            <Notifications />

          </Taskbar>
        </Screen>
      </ThemeProvider>
    </PagesContextProvider>
  );
}

export default App;
