import { useEffect, useState } from "react";
import { Desktop, Screen, Taskbar, Workspace } from "./styles";
import { ThemeProvider } from "styled-components";
import { darkTheme, lightTheme } from "./globals/theme";
import GlobalStyle from "./globals/style";

import { ThemeIcon } from "./components/desktop-icon/theme-icon";
import { StartButton } from "./components/taskbar/start-button";
import { Notifications } from "./components/notification";
import { AboutMeIcon } from "./components/desktop-icon/about-me-icon";
import { WelcomeIcon } from "./components/desktop-icon/welcome-icon";
import { TrainingIcon } from "./components/desktop-icon/training-icon";
import { SkillsIcon } from "./components/desktop-icon/skills-icon";
import { MusicPlayerIcon } from "./components/desktop-icon/music-player-icon";
import { CreditsIcon } from "./components/desktop-icon/credits-icon";
import { Welcome } from "./pages/welcome";
import { PagesContextProvider } from "./contexts/PagesContext";
import { AboutMe } from "./pages/about-me";
import { Training } from "./pages/training";
import { TaskbarButtons } from "./components/taskbar/taskbar-buttons";

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
              <WelcomeIcon></WelcomeIcon>
              <AboutMeIcon></AboutMeIcon>
              <TrainingIcon></TrainingIcon>
              <SkillsIcon></SkillsIcon>
              <MusicPlayerIcon></MusicPlayerIcon>
              <CreditsIcon></CreditsIcon>

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
