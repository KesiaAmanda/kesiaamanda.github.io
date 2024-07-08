import { Window } from "../../components/windows/window";
import { Container, Content } from "./styles";
import { usePages } from "../../hooks/usePages";
import { useOutsideClick } from "../../hooks/useOutsideClick";
import { useTheme } from "styled-components";
import { useEffect, useRef } from "react";


function Minecraft() {
    const theme = useTheme();
    const iframeRef = useRef<HTMLIFrameElement>(null);
    const { minecraft, focus, removeFocus } = usePages();

    const ref = useOutsideClick(() => {
        removeFocus()
    });

    useEffect(() => {
        const iframe = iframeRef.current;
        if (minecraft[0].isInFocus)
            if (iframe) {
                const listener = (event: MessageEvent) => {
                    try {
                    } catch (error) {
                        console.error('Erro ao processar mensagem do iframe:', error);
                    }
                };

                window.addEventListener('message', listener);

                return () => {
                    window.removeEventListener('message', listener);
                };
            }

    }, [minecraft]);

    const enterGame = () => {
        if (iframeRef.current) {
            iframeRef.current.contentWindow?.focus();
        }
    };

    const handleClick = () => {
        focus(minecraft)
    };

    return (
        <div ref={ref}>
            <Window page={minecraft} description="Minecraft" icon={theme.icons.desktop.minecraft}>
                <Container onClick={() => focus(minecraft)}>
                    <Content $maxWidth={(window.innerWidth - 5) + "px"} $maxHeight={(window.innerHeight - 55) + "px"} $page={minecraft[0]}>
                        {!minecraft[0].isInFocus && <div
                            style={{
                                position: 'absolute',
                                width: '100%',
                                height: '100%',
                                zIndex: 1,
                            }}
                            onMouseDown={handleClick}
                        ></div>}

                        {!(minecraft[0].isClosed) &&
                            <iframe
                                title="Minecraft"
                                ref={iframeRef}
                                src={'https://labystudio.github.io/js-minecraft/'}
                                width="100%"
                                height="100%"
                                frameBorder={0}
                                onMouseEnter={() => enterGame()}
                            />
                        }
                    </Content>
                </Container>
            </Window>
        </div>
    )

}

export { Minecraft };   