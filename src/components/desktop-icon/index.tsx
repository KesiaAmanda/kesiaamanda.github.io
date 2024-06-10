import { DesktopIconProps } from "../../types/DesktopIcons";
import { Content } from "./styles";


function DesktopIcon({
    icon,
    description,
    onClick }: DesktopIconProps) {

    const handleClick = (e: any) => {
        switch (e.detail) {
            case 2:
                onClick();
                break;
        }
    };

    return (
        <Content>
            <button onClick={handleClick}>
                <img draggable="false" src={icon} alt={description} />
                <p>{description}</p>
            </button>
        </Content>
    )

}

export { DesktopIcon };

