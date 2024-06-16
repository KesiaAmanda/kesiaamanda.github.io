import { DesktopIcon } from "..";
import icon from '../../../assets/icons/desktop/program.png'
import { usePages } from "../../../hooks/usePages";


function WelcomeIcon() {
    const { welcome, open } = usePages();

    const handleClick = () => {
        open(welcome);
    }

    return (
        <DesktopIcon icon={icon} description='Bem-vindo' onClick={(handleClick)} />
    )

}

export { WelcomeIcon };

