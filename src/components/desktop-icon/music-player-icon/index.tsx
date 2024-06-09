import { DesktopIcon } from "..";
import icon from '../../../assets/icons/desktop/music.png'


function MusicPlayerIcon() {

    const handleClick = () => {
        // onClick();
    }

    return (
        <DesktopIcon icon={icon} description='Rádio' onClick={(handleClick)} />
    )

}

export { MusicPlayerIcon };

