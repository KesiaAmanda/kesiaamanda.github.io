import { IconProps } from "../../types/DesktopIconsTypes";
import { Content } from "./styles";


function Icon({
    icon,
    description,
    onClick }: IconProps) {

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

export { Icon };

