import { ThemeShortcutProps } from "../../../types/DesktopTypes";
import light from '../../../assets/icons/desktop/this_computer-day.png'
import dark from '../../../assets/icons/desktop/this_computer-night.png'
import { Shortcut } from "../shortcut";


function ThemeShortcut({ onClick, isDark }: ThemeShortcutProps) {

    const themeToggler = () => {
        onClick(!isDark);
    }

    return (
        <Shortcut icon={isDark ? dark : light} description={isDark ? "Modo claro" : "Modo escuro"} onClick={themeToggler} />
    )

}

export { ThemeShortcut };

