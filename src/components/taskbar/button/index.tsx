import { TaskbarButtonProps } from "../../../types/TaskbarButtonsTypes";
import { Content } from "./styles";


function Button({ description, onClick, isSelected }: TaskbarButtonProps) {

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

export { Button };

