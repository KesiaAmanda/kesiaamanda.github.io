import { TaskbarButtonProps } from "../../types/TaskbarButtons";
import { Content } from "./styles";


function TaskbarButton({ description, onClick, isSelected }: TaskbarButtonProps) {

    const handleClick = (e: any) => {
        onClick();
    };

    return (
        <Content isSelected={isSelected}>
            <button onClick={handleClick}>
                <span>{description}</span>
            </button>
        </Content>
    )

}

export { TaskbarButton };

