import { useState } from "react";
import { Content, Divider, Item, Menu, Text } from "./styles";
import { StartMenuProps } from "../../types/StartMenu";


function StartMenu({ isSelected }: StartMenuProps) {

    return (
        <Content isSelected={isSelected}>
            <Menu>
                <Text>
                    #<span>Menu</span>
                </Text>
            </Menu>
            <Item>Bem-vindo</Item>
            <Item>Sobre mim</Item>
            <Item>Formação</Item>
            <Item>Linguagens e...</Item>
            <Item>Créditos</Item>
            <Divider />
            <Item isShutdown={true}>Sh<span>u</span>t Down</Item>
        </Content>
    )

}

export { StartMenu };

