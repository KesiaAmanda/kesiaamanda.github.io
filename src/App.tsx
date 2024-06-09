import { useEffect, useState } from "react";
import { Desktop, Screen, Taskbar, TaskbarButtons, Workspace } from "./styles";
import { ThemeProvider } from "styled-components";
import { darkTheme, lightTheme } from "./globals/theme";
import GlobalStyle from "./globals/style";

import { ThemeIcon } from "./components/desktop-icon/theme-icon";
import { StartButton } from "./components/taskbar-button/start-button";
import { TaskbarButton } from "./components/taskbar-button";
import { Notifications } from "./components/notification";
import { AboutMeIcon } from "./components/desktop-icon/about-me-icon";
import { WelcomeIcon } from "./components/desktop-icon/welcome-icon";
import { TrainingIcon } from "./components/desktop-icon/training-icon";
import { SkillsIcon } from "./components/desktop-icon/skills-icon";
import { MusicPlayerIcon } from "./components/desktop-icon/music-player-icon";
import { CreditsIcon } from "./components/desktop-icon/credits-icon";
import { Welcome } from "./pages/welcome";

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
            <WelcomeIcon></WelcomeIcon>
            <AboutMeIcon></AboutMeIcon>
            <TrainingIcon></TrainingIcon>
            <SkillsIcon></SkillsIcon>
            <MusicPlayerIcon></MusicPlayerIcon>
            <CreditsIcon></CreditsIcon>

          </Workspace>
          {/* pages */}
          <Welcome></Welcome>


        </Desktop>
        <Taskbar>
          {/* buttons */}
          <StartButton />
          <TaskbarButtons>
            <TaskbarButton isSelected={false} description="Bem-vindo" onClick={() => { }} />
            <TaskbarButton isSelected={false} description="Sobre mim" onClick={() => { }} />
            <TaskbarButton isSelected={false} description="Formação" onClick={() => { }} />
            <TaskbarButton isSelected={false} description="Linguagens e Ferramentas" onClick={() => { }} />
            <TaskbarButton isSelected={false} description="Rádio" onClick={() => { }} />
            <TaskbarButton isSelected={false} description="Créditos" onClick={() => { }} />
          </TaskbarButtons>
          <Notifications />

        </Taskbar>
      </Screen>
    </ThemeProvider>
  );
}

export default App;
