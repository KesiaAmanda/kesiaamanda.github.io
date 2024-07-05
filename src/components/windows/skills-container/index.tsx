import { Body, Content } from "./styles";
import { InvisibleButtom } from "../buttons/invisible-button";
import { useState } from "react";
import { SkillsProps } from "../../../types/ComponentsTypes";


function SkillsContainer({ name, children }: SkillsProps) {

    const [active, setActive] = useState<boolean>(true);

    return (
        <>
            <Content onClick={() => {
                setActive(!active)
            }}>
                <InvisibleButtom active={active}></InvisibleButtom>
                <span>{name}</span>
                <div />
            </Content>
            <Body $active={active}>
                {children}
            </Body>
        </>
    )

}

export { SkillsContainer };