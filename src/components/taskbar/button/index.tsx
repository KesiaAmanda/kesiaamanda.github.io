import { TaskbarButtonProps } from "../../../types/TaskbarButtonsTypes";
import { Content } from "./styles";


function Button({ description, onClick, isSelected }: TaskbarButtonProps) {

    const handleClick = () => {
        onClick();
    };

    return (
        <Content isSelected={isSelected}>
            <button
                // onClick={handleClick}
                onMouseDown={handleClick}
                onTouchStart={handleClick}
            >
                <span>{description}</span>
            </button>
        </Content>
    )

}

export { Button };

