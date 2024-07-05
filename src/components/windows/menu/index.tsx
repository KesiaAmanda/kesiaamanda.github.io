import { WindowMenuProps } from "../../../types/WindowTypes";
import { Content } from "./styles";


function WindowMenu({ notSearchable }: WindowMenuProps) {

    return (
        <Content>
            <span>File</span>
            <span>Edit</span>
            {!!!notSearchable && <span>Search</span>}
            <span>Help</span>
        </Content>
    )

}

export { WindowMenu };