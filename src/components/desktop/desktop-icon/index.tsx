import { usePages } from "../../../hooks/usePages";
import { DesktopIconProps } from "../../../types/DesktopIconsTypes";
import { Content } from "./styles";


function DesktopIcon({
    icon,
    description,
    page }: DesktopIconProps) {

    const { open } = usePages();

    return (
        <Content>
            <button onClick={() => open(page)}>
                <img draggable="false" src={icon} alt={description} />
                <p>{description}</p>
            </button>
        </Content>
    )

}

export { DesktopIcon };

