import { useEffect, useState } from "react";
import { Desktop, Screen, Taskbar, TaskbarButtons, Workspace } from "./styles";
import { ThemeProvider } from "styled-components";
import { darkTheme, lightTheme } from "./globals/theme";
import GlobalStyle from "./globals/style";

import { ThemeIcon } from "./components/desktop-icon/theme-icon";
import { StartButton } from "./components/taskbar-button/start-button";
import { TaskbarButton } from "./components/taskbar-button";
import { Notifications } from "./components/notification";

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
