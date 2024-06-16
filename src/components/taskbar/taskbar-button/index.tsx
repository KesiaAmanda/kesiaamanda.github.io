import { Button } from "../button";
import { Content } from "./styles";
import { usePages } from "../../../hooks/usePages";
import { DefaultButtonProps } from "../../../types/ButtonTypes";


function TaskbarButton({ page, description, icon }: DefaultButtonProps) {
    const { minimize, open } = usePages();

    const handleClick = () => {
        if (page[0].isInFocus) {
            minimize(page);
        } else {
            open(page);
        }
    };

    return (
        <Content closed={page[0].isClosed} icon={icon}>
            <Button isSelected={page[0].isInFocus} description={description} onClick={handleClick} />
        </Content>
    )

}

export { TaskbarButton };