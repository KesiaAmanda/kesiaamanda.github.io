import { usePages } from "../../../hooks/usePages";
import { ShortcutProps } from "../../../types/DesktopTypes";
import { Content } from "./styles";


function Shortcut({
    icon,
    description,
    page,
    onClick }: ShortcutProps) {

    const { open } = usePages();

    return (
        <Content>
            <button onDoubleClick={() => page ? open(page) : onClick && onClick()}
                onTouchStart={() => page ? open(page) : onClick && onClick()}>
                <img draggable="false" src={icon} alt={description} />
                <p>{description}</p>
            </button>
        </Content>
    )

}

export { Shortcut };

