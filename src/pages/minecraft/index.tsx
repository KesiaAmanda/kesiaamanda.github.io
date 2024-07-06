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
                        if (event.source === iframeRef.current?.contentWindow) {
                            console.log(event);
                        }
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

    useEffect(() => {
        if (!minecraft[0].isInFocus) {
            if (iframeRef.current) {
                iframeRef.current.contentWindow?.focus();
            }
        }
    }, [minecraft]);

    return (
        <div ref={ref}>
            <Window page={minecraft} description="Minecraft" icon={theme.icons.desktop.minecraft}>
                <Container onClick={() => focus(minecraft)}>
                    <Content $maxWidth={(window.innerWidth - 5) + "px"} $maxHeight={(window.innerHeight - 55) + "px"} $page={minecraft[0]}>
                        {!(minecraft[0].isClosed) &&
                            <iframe
                                title="Minecraft"
                                ref={iframeRef}
                                src={'https://labystudio.github.io/js-minecraft/'}
                                width="100%"
                                height="100%"
                                onClick={() => focus(minecraft)}
                                onMouseDown={() => focus(minecraft)}
                                frameBorder={0}
                                onLoad={() => {
                                    if (iframeRef.current) {
                                        iframeRef.current.contentWindow?.focus();
                                    }
                                }}
                            />
                        }
                    </Content>
                </Container>
            </Window>
        </div>
    )

}

export { Minecraft };   