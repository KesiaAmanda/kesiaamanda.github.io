import { WindowAddressProps } from "../../../types/WindowTypes";
import { SmallButtom } from "../buttons/small-button";
import { Icon } from "../window/styles";
import { Content, Navigator } from "./styles";
import { useTheme } from "styled-components";

function WindowAddress({ path }: WindowAddressProps) {
    const theme = useTheme();

    return (
        <Content>
            <span>Address</span>
            <Navigator>
                <p>{path}</p>
                <SmallButtom onClick={() => { }} icon={<Icon $icon={theme.icons.window.arrow} />}></SmallButtom>
            </Navigator>
        </Content>
    )

}

export { WindowAddress };