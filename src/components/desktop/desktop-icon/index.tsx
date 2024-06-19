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
            <button onDoubleClick={() => open(page)} onTouchStart={() => open(page)}>
                <img draggable="false" src={icon} alt={description} />
                <p>{description}</p>
            </button>
        </Content>
    )

}

export { DesktopIcon };

