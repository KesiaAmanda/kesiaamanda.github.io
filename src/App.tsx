import { useEffect, useState } from "react";
import { Desktop, Pages, Screen, Taskbar, Workspace } from "./styles";
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
import { Paint } from "./pages/paint";
import { Minecraft } from "./pages/minecraft";
import { PrairieKing } from "./pages/prairie-king";
import { Boot } from "./pages/boot";

function App() {
  const [isDark, setIsDark] = useState<boolean>(false);
  const [isLoading, setIsLoading] = useState(true);

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
        <Boot state={isLoading} setState={setIsLoading} />
        <Screen>
          <Desktop>
            <Workspace $loading={isLoading}>
              {/* desktop icons */}
              <ThemeShortcut onClick={setIsDark} isDark={isDark} />
              <Shortcuts />
            </Workspace>

            {/* pages */}
            <Pages $loading={isLoading}>
              <Welcome />
              <AboutMe />
              <Training />
              <MusicPlayer />
              <Skills />
              <Credits />
              <Paint />
              <Minecraft />
              <PrairieKing />
            </Pages>
          </Desktop>

          <Taskbar>
            {/* buttons */}
            <StartButton />
            <TaskbarButtons $loading={isLoading} />
            <Notifications />
          </Taskbar>

        </Screen>
      </ThemeProvider>
    </PagesContextProvider>
  );
}

export default App;
