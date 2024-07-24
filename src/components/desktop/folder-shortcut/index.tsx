import { FolderShortcutProps } from "../../../types/DesktopTypes";
import { Content } from "./styles";


function FolderShortcut({
    icon,
    description,
    onClick }: FolderShortcutProps) {

    return (
        <Content onDoubleClick={() => onClick ? onClick() : () => { }}>
            <img draggable="false" src={icon} alt={description} />
            <p>{description}</p>
        </Content>
    )

}

export { FolderShortcut };

