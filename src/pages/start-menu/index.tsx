import { Content, Divider, Item, Menu, Text } from "./styles";
import { StartMenuProps } from "../../types/StartMenuTypes";
import { usePages } from "../../hooks/usePages";


function StartMenu({ isSelected, setIsSelected }: StartMenuProps) {
    const { welcome, setWelcome, aboutMe, setAboutMe } = usePages();

    const handleWelcomeClick = () => {
        setWelcome({ ...welcome, isMinimized: false, isInFocus: true, isClosed: false });
        setIsSelected(false);
    }

    const handleAboutMeClick = () => {
        setAboutMe({ ...aboutMe, isMinimized: false, isInFocus: true, isClosed: false });
        setIsSelected(false);
    }

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
            <Item onClick={handleWelcomeClick}>Bem-vindo</Item>
            <Item onClick={handleAboutMeClick}>Sobre mim</Item>
            <Item onClick={handleClose}>Formação</Item>
            <Item onClick={handleClose}>Linguagens e...</Item>
            <Item onClick={handleClose}>Créditos</Item>
            <Divider />
            <Item onClick={handleClose} isShutdown={true}>Sh<span>u</span>t Down</Item>
        </Content>
    )

}

export { StartMenu };

