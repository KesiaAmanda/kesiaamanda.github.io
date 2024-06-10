import { DesktopIcon } from "..";
import { ThemeIconProps } from "../../../types/DesktopIconsTypes";
import light from '../../../assets/icons/desktop/this_computer-day.png'
import dark from '../../../assets/icons/desktop/this_computer-night.png'


function ThemeIcon({ onClick, isDark }: ThemeIconProps) {

    const themeToggler = () => {
        onClick(!isDark);
    }

    return (
        <DesktopIcon icon={isDark ? dark : light} description={isDark ? "Modo claro" : "Modo escuro"} onClick={themeToggler} />
    )

}

export { ThemeIcon };

