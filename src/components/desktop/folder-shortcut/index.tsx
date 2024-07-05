import { FolderShortcutProps } from "../../../types/DesktopTypes";
import { Content } from "./styles";


function FolderShortcut({
    icon,
    description }: FolderShortcutProps) {

    return (
        <Content>
            <img draggable="false" src={icon} alt={description} />
            <p>{description}</p>
        </Content>
    )

}

export { FolderShortcut };

