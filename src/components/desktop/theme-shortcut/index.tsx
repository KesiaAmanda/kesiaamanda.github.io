import { ThemeShortcutProps } from "../../../types/DesktopTypes";
import { Shortcut } from "../shortcut";
import { useTheme } from "styled-components";


function ThemeShortcut({ onClick, isDark }: ThemeShortcutProps) {
    const theme = useTheme();

    const themeToggler = () => {
        onClick(!isDark);
    }

    return (
        <Shortcut icon={theme.images.icons.desktop.theme} description={isDark ? "Modo claro" : "Modo escuro"} onClick={themeToggler} />
    )

}

export { ThemeShortcut };

