import { Window } from "../../components/windows/window";
import { Container, Content } from "./styles";
import { usePages } from "../../hooks/usePages";
import { useOutsideClick } from "../../hooks/useOutsideClick";
import { useTheme } from "styled-components";
import { useCallback, useEffect, useRef } from "react";
import { useWindowSize } from "../../hooks/useWindowSize";


function Paint() {
    const theme = useTheme()
    const size = useWindowSize()
    const iframeRef = useRef<HTMLIFrameElement>(null);
    const { paint, focus, removeFocus } = usePages();

    const ref = useOutsideClick(() => {
        removeFocus()
    });

    const applyTheme = useCallback(() => {
        const iframe = iframeRef.current;
        if (iframe) {
            const iframeDocument = iframe.contentDocument;
            if (iframeDocument) {
                const root = iframeDocument.querySelector(':root') as HTMLElement;
                if (root) {
                    updateThemeVariables(root, theme);
                }
            }
        } else {
            console.log('iframe não encontrado');
        }
    }, [iframeRef, theme]);

    useEffect(() => {
        applyTheme();
    }, [theme, applyTheme]);

    const updateThemeVariables = (rootElement: HTMLElement, theme: any) => {
        rootElement.style.setProperty('--ButtonFace', theme.window.background.color);
        rootElement.style.setProperty('--Menu', theme.window.background.color);

        rootElement.style.setProperty('--ButtonText', theme.text.color);
        rootElement.style.setProperty('--WindowText', theme.text.color);
        rootElement.style.setProperty('--HilightText', theme.text.color);
        rootElement.style.setProperty('--GrayText', theme.text.color);
        rootElement.style.setProperty('--MenuText', theme.text.color);

        rootElement.style.setProperty('--ButtonDkShadow', theme.frame.shadow.black);
        rootElement.style.setProperty('--ButtonShadow', theme.frame.shadow.black);
        rootElement.style.setProperty('--ButtonHilight', theme.frame.shadow.white);
        rootElement.style.setProperty('--Scrollbar', theme.frame.shadow.white);

        rootElement.style.setProperty('--ActiveBorder', theme.frame.shadow.white);
        rootElement.style.setProperty('--Hilight', theme.start.menu.button.hover.color);
        rootElement.style.setProperty('--Scrollbar', theme.frame.shadow.white);

        rootElement.style.setProperty('--local', theme.paint);
    };


    return (
        <div ref={ref}>
            <Window page={paint} description="Paint" icon={theme.icons.desktop.paint}>
                <Container onClick={() => focus(paint)}>
                    <Content $maxWidth={(size.width - 5) + "px"} $maxHeight={(size.height - 55) + "px"} $page={paint[0]}>
                        <iframe
                            ref={iframeRef}
                            title="JS Paint"
                            src={`${process.env.PUBLIC_URL}/jspaint/index.html`}
                            width="100%"
                            height="100%"
                            frameBorder="0"
                            onLoad={() => {
                                applyTheme()
                            }}
                        />
                    </Content>
                </Container>
            </Window>
        </div>
    )

}

export { Paint };   