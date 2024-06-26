import { useEffect, useState } from "react";
import { Desktop, Screen, Taskbar, Workspace } from "./styles";
import { ThemeProvider } from "styled-components";
import { darkTheme, lightTheme } from "./globals/theme";
import GlobalStyle from "./globals/style";

import { ThemeShortcut } from "./components/desktop/theme-shortcut";
import { StartButton } from "./components/taskbar/start-button";
import { Notifications } from "./components/notification";
import { Welcome } from "./pages/welcome";
import { PagesContextProvider } from "./contexts/PagesContext";
import { AboutMe } from "./pages/about-me";
import { Training } from "./pages/training";
import { TaskbarButtons } from "./components/taskbar/taskbar-buttons";
import { Shortcuts } from "./components/desktop/shortcuts";
import { MusicPlayer } from "./pages/music-player";
import { Credits } from "./pages/credits";
import { Skills } from "./pages/skills";

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
              <ThemeShortcut onClick={setIsDark} isDark={isDark} />
              <Shortcuts />
            </Workspace>

            {/* pages */}
            <Welcome />
            <AboutMe />
            <Training />
            <MusicPlayer />
            <Skills />
            <Credits />


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
