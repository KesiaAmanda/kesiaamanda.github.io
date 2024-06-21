import { TaskbarButtonProps } from "../../../types/TaskbarTypes";
import { Content } from "./styles";


function Button({ onClick, description, isSelected }: TaskbarButtonProps) {

    const handleClick = () => {
        onClick();
    };

    return (
        <Content $isSelected={isSelected}>
            <button
                onMouseDown={handleClick}
                onTouchCancel={handleClick}
            >
                <span>{description}</span>
            </button>
        </Content>
    )

}

export { Button };

