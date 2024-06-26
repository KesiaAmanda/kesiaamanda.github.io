import { WindowAddressProps } from "../../../types/WindowTypes";
import { SmallButtom } from "../buttons/small-button";
import { Icon } from "../window/styles";
import { Content, Navigator } from "./styles";

import minimizeIcon from '../../../assets/icons/window/iconmonstr-arrow.svg'

function WindowAddress({ path }: WindowAddressProps) {

    return (
        <Content>
            <span>Address</span>
            <Navigator>
                <span>{path}</span>
                <SmallButtom onClick={() => { }} icon={<Icon $icon={minimizeIcon} />}></SmallButtom>
            </Navigator>
        </Content>
    )

}

export { WindowAddress };