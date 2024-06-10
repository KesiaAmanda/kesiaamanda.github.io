import { Content, Divider, Item, Menu, Text } from "./styles";
import { StartMenuProps } from "../../types/StartMenuTypes";


function StartMenu({ isSelected, setIsSelected }: StartMenuProps) {

    const handleClose = (e: any) => {
        setIsSelected(false);
    };

    return (
        <Content isSelected={isSelected}>
            <Menu>
                <Text>
                    #<span>Menu</span>
                </Text>
            </Menu>
            <Item onClick={handleClose}>Bem-vindo</Item>
            <Item onClick={handleClose}>Sobre mim</Item>
            <Item onClick={handleClose}>Formação</Item>
            <Item onClick={handleClose}>Linguagens e...</Item>
            <Item onClick={handleClose}>Créditos</Item>
            <Divider />
            <Item onClick={handleClose} isShutdown={true}>Sh<span>u</span>t Down</Item>
        </Content>
    )

}

export { StartMenu };

