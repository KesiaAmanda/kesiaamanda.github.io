import { useTheme } from "styled-components";
import { usePages } from "../../../hooks/usePages";
import { DefaultButton } from "../default-button";


function TrainingButton() {
    const { training } = usePages();
    const theme = useTheme();

    return (
        <DefaultButton page={training} description="Formação" icon={theme.icon.training} />
    )

}

export { TrainingButton };