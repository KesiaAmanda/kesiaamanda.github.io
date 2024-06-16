import { Window } from "../../components/windows/window";
import { Container, Content, Cursor, Text } from "./styles";
import { usePages } from "../../hooks/usePages";
import { useOutsideClick } from "../../hooks/useOutsideClick";
import { useEffect, useState } from "react";
import { useTheme } from "styled-components";

const hr = "===============================================================================================";
const speed = 20;

function Training() {
    const theme = useTheme()
    const { training, focus, removeFocus } = usePages();

    const [displayText, setDisplayText] = useState<string>('');
    const [isWritten, setIsWritten] = useState<boolean>(false);
    const [isDone, setIsDone] = useState<boolean>(false);
    const [sawMore, setSawMore] = useState<boolean>(false);

    const delay = (ms: number) => new Promise(resolve => setTimeout(resolve, ms));

    const ref = useOutsideClick(() => {
        removeFocus()
    });

    useEffect(() => {
        setInterval(() => {

        }, 1000)

    }, [])


    const typeWriter = async (text: string[], timeout: number) => {
        let newText = displayText;
        for (let i = 0; i < text.length; i++) {
            const line = text[i];
            for (let j = 0; j < line.length; j++) {
                newText += line[j];
                setDisplayText(newText);
                await delay(timeout);
            }
            if (i < text.length - 1) {
                newText += '\n';
                setDisplayText(newText);
            }
        }
    };

    const textWriter = async () => {
        if (!isWritten) {
            setIsWritten(true);
            await typeWriter([
                "C:> type formação.txt", hr,
                "█▀▀ █▀█ █▀█ █▀▄▀█ ▄▀█ █▀▀ ▄▀█ █▀█",
                "█▀░ █▄█ █▀▄ █░▀░█ █▀█ █▄▄ █▀█ █▄█", "",
                hr, "",
                "Faculdade de Tecnologia da Zona Leste",
                "Tecnólogo, Análise e Desenvolvimento de Sistemas",
                "jul de 2018 - jun de 2023", "",
                hr,
                "█▀▀ █▀▀ █▀█ ▀█▀ █ █▀▀ █ █▀▀ ▄▀█ █▀▄ █▀█ █▀",
                "█▄▄ ██▄ █▀▄ ░█░ █ █▀░ █ █▄▄ █▀█ █▄▀ █▄█ ▄█", "",
                hr, "",
                "CertiProf",
                "Scrum Foundation Professional Certificate",
                "agosto de 2019", "",
                "DIO",
                "Implementando Collections e Streams com Java,",
                "com carga horária de 6 horas.",
                "junho de 2021", "",
                "Pressione 'Enter' para ver mais..."
            ], speed);
            setIsDone(true);
        }
    };

    const seeMoreContent = async () => {
        if (isDone && !sawMore) {
            setIsDone(false);
            setSawMore(true);
            await typeWriter([
                "DIO", "Introdução ao framework Spring Boot,", "com carga horária de 2 horas.", "junho de 2021", "",
                "DIO", "Trabalhando com Branches no Github,", "com carga horária de 4 horas.", "agosto de 2021", "",
                "DIO", "Conceitos e melhores práticas com bancos de dados PostgreSQL,", "com carga horária de 9 horas.", "junho de 2021", "",
                "DIO", "Técnicas avançadas em Angular 8,", "com carga horária de 8 horas.", "julho de 2021", "",
                "DIO", "Desenvolvimento avançado em Java,", "com carga horária de 8 horas.", "junho de 2021", "",
                "DIO", "Desenvolvimento avançado em Java,", "com carga horária de 6 horas.", "junho de 2021", "",
                "DIO", "Aprenda a aplicar testes com Java,", "com carga horária de 2 horas.", "junho de 2021", "",
                "DIO", "Aplicações avançadas com Angular,", "com carga horária de 6 horas.", "agosto de 2021", "",
                "DIO", "Desenvolvimento básico em Java,", "com carga horária de 9 horas.", "junho de 2021", "",
                "DIO", "Java - Trabalhando com Collections,", "com carga horária de 6 horas.", "junho de 2021", "",
                "DIO", "Introdução ao Git e ao GitHub,", "com carga horária de 5 horas.", "junho de 2021", "",
                "DIO", "Introdução a criação de websites com HTML5 e CSS3,", "com carga horária de 6 horas.", "julho de 2021", "",
                "DIO", "Introdução ao Angular 8,", "com carga horária de 5 horas.", "julho de 2021"
            ], speed);
            setIsDone(true);
        }
    };

    useEffect(() => {
        textWriter();
    }, []);

    useEffect(() => {
        if ((training[0].isMinimized || training[0].isClosed) && !isWritten) {
            setDisplayText("")
            setIsWritten(false);
            setIsDone(false);
        }
    }, [training, setIsWritten, setIsDone, isWritten]);

    useEffect(() => {
        const handleKeyDown = (event: KeyboardEvent) => {
            if (event.key === 'Enter') {
                seeMoreContent();
            }
        };

        document.addEventListener('keydown', handleKeyDown);
        return () => {
            document.removeEventListener('keydown', handleKeyDown);
        };
    }, [seeMoreContent]);

    return (
        <div ref={ref}>
            <Window page={training} width={'1500px'} description="Formação.txt" icon={theme.icon.training}>
                <Container page={training[0]} onClick={() => { focus(training) }}>
                    <Content maxWidth={(window.innerWidth - 30) + "px"}
                        maxHeight={(window.innerHeight - 82) + "px"}
                        page={training[0]} >
                        <Text>{displayText}</Text>
                        <Cursor> |</Cursor>
                    </Content>
                </Container>
            </Window>
        </div>
    )

}

export { Training }; 