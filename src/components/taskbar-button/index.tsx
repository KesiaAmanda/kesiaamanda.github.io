import { TaskbarButtonProps } from "../../types/TaskbarButtons";
import { Content } from "./styles";


function TaskbarButton({ description, onClick }: TaskbarButtonProps) {

    const handleClick = (e: any) => {
        onClick();
    };

    return (
        <Content>
            <button onClick={handleClick}>
                <span>{description}</span>
            </button>
        </Content>
    )

}

export { TaskbarButton };

