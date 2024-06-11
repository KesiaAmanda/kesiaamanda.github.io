import { DesktopIcon } from "..";
import icon from '../../../assets/icons/desktop/program.png'
import { usePages } from "../../../hooks/usePages";


function WelcomeIcon() {
    const { welcome, setWelcome } = usePages();

    const handleClick = () => {
        setWelcome({ ...welcome, isMinimized: false, isInFocus: true, isClosed: false });
    }

    return (
        <DesktopIcon icon={icon} description='Bem-vindo' onClick={(handleClick)} />
    )

}

export { WelcomeIcon };

