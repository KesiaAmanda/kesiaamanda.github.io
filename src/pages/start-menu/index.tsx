import { Content, Divider, Item, Menu, Text } from "./styles";
import { usePages } from "../../hooks/usePages";
import { StartMenuProps } from "../../types/TaskbarTypes";


function StartMenu({ isSelected, onClick }: StartMenuProps) {
    const { welcome, aboutMe, training, credits, skills, open } = usePages();

    const handleWelcomeClick = () => {
        onClick();
        open(welcome);
    }

    const handleAboutMeClick = () => {
        onClick();
        open(aboutMe);
    }

    const handleTrainingClick = () => {
        onClick();
        open(training);
    }

    const handleCreditsClick = () => {
        onClick();
        open(credits);
    }

    const handleSkillsClick = () => {
        onClick();
        open(skills);
    }

    const handleClose = (e: any) => {
        onClick();
    };

    return (
        <Content $isSelected={isSelected}>
            <Menu>
                <Text>
                    #<span>Menu</span>
                </Text>
            </Menu>
            <Item onClick={handleWelcomeClick}>Bem-vindo</Item>
            <Item onClick={handleAboutMeClick}>Sobre mim</Item>
            <Item onClick={handleTrainingClick}>Formação</Item>
            <Item onClick={handleSkillsClick}>Linguagens e...</Item>
            <Item onClick={handleCreditsClick}>Créditos</Item>
            <Divider />
            <Item onClick={handleClose} $isShutdown={true}>Sh<span>u</span>t Down</Item>
        </Content>
    )

}

export { StartMenu };

