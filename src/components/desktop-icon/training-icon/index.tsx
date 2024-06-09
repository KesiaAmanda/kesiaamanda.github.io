import { DesktopIcon } from "..";
import icon from '../../../assets/icons/desktop/console.png'


function TrainingIcon() {

    const handleClick = () => {
        // onClick();
    }

    return (
        <DesktopIcon icon={icon} description='Formação' onClick={(handleClick)} />
    )

}

export { TrainingIcon };

