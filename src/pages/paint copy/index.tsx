import { Window } from "../../components/windows/window";
import { Container, Content } from "./styles";
import { usePages } from "../../hooks/usePages";
import { useOutsideClick } from "../../hooks/useOutsideClick";

import { useTheme } from "styled-components";
import { useRef } from "react";


function PrairieKing() {
    const theme = useTheme();
    const iframeRef = useRef<HTMLIFrameElement>(null);
    const { prairieKing, focus, removeFocus } = usePages();

    const ref = useOutsideClick(() => {
        removeFocus()
    });

    return (
        <div ref={ref}>
            <Window page={prairieKing} description="Journey of the Prairie King" icon={theme.icon.prairieKing}>
                <Container onClick={() => focus(prairieKing)}>
                    <Content $maxWidth={(window.innerWidth - 5) + "px"} $maxHeight={(window.innerHeight - 55) + "px"} $page={prairieKing[0]}>
                        {!prairieKing[0].isClosed &&
                            <iframe
                                ref={iframeRef}
                                title="JS Paint"
                                src={`${process.env.PUBLIC_URL}/jsprairieking/index.html`}
                                width="100%"
                                height="100%"
                                frameBorder="0"
                                onLoad={() => {
                                    if (iframeRef.current) {
                                        iframeRef.current.contentWindow?.focus();
                                    }
                                }}
                            />}
                    </Content>
                </Container>
            </Window>
        </div>
    )

}

export { PrairieKing };   