import { Window } from "../../components/windows/window";
import { Container, Content, Cursor, Text, Title } from "./styles";
import { usePages } from "../../hooks/usePages";
import { useOutsideClick } from "../../hooks/useOutsideClick";
import { useCallback, useEffect, useState } from "react";
import { useTheme } from "styled-components";

const hr = "===============================================================================================";
const speed = 5;
const seeMoreText = "Pressione 'Enter' para ver mais... "

function Training() {
    const theme = useTheme()
    const { training, focus, removeFocus } = usePages();

    const [firstParagraph, setFirstParagraph] = useState<string>('');
    const [secondParagraph, setSecondParagraph] = useState<string>('');
    const [thirdParagraph, setThirdParagraph] = useState<string>('');
    const [fourthParagraph, setFourthParagraph] = useState<string>('');
    const [fifthParagraph, setFifthParagraph] = useState<string>('');

    const [seeMore, setSeeMore] = useState<string>('');

    const [isWritten, setIsWritten] = useState<boolean>(false);
    const [isDone, setIsDone] = useState<boolean>(false);
    const [sawMore, setSawMore] = useState<boolean>(false);

    const delay = (ms: number) => new Promise(resolve => setTimeout(resolve, ms));

    const ref = useOutsideClick(() => {
        removeFocus()
    });

    const typeWriter = useCallback(async (setText: React.Dispatch<React.SetStateAction<string>>, timeout: number, text: string[]) => {
        let newText = '';
        for (let i = 0; i < text.length; i++) {
            const line = text[i];
            for (let j = 0; j < line.length; j++) {
                newText += line[j];
                setText(newText);
                await delay(timeout);
            }
            if (text[i] !== seeMoreText) {
                newText += '\n';
                setText(newText);
            }
        }
    }, []);

    const textContent = useCallback(async () => {
        if (!isWritten && !isDone) {
            setIsWritten(true);

            await typeWriter(setFirstParagraph, speed,
                ["C:> type formação.txt", hr])
            await typeWriter(setSecondParagraph, speed,
                ["█▀▀ █▀█ █▀█ █▀▄▀█ ▄▀█ █▀▀ ▄▀█ █▀█", "█▀░ █▄█ █▀▄ █░▀░█ █▀█ █▄▄ █▀█ █▄█"])
            await typeWriter(setThirdParagraph, speed,
                [hr, "", "Faculdade de Tecnologia da Zona Leste",
                    "Tecnólogo, Análise e Desenvolvimento de Sistemas", "jul de 2018 - jun de 2023", "", hr])
            await typeWriter(setFourthParagraph, speed,
                ["█▀▀ █▀▀ █▀█ ▀█▀ █ █▀▀ █ █▀▀ ▄▀█ █▀▄ █▀█ █▀", "█▄▄ ██▄ █▀▄ ░█░ █ █▀░ █ █▄▄ █▀█ █▄▀ █▄█ ▄█"])
            await typeWriter(setFifthParagraph, speed,
                [hr, "", "CertiProf", "Scrum Foundation Professional Certificate", "agosto de 2019",
                    "", "DIO", "Implementando Collections e Streams com Java,", "com carga horária de 6 horas.",
                    "junho de 2021", "", seeMoreText])
            setIsDone(true);
            setIsWritten(false);
        }
    }, [isWritten, isDone, typeWriter]);

    const seeMoreTextContent = useCallback(async () => {
        if (isDone && !sawMore && !isWritten) {
            setIsWritten(true);
            setFifthParagraph(fifthParagraph.replace(seeMoreText, ''))
            await typeWriter(setSeeMore, speed, [
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
            ]);
            setSawMore(true);
            setIsWritten(false);
        }
    }, [isDone, isWritten, sawMore, fifthParagraph, typeWriter]);

    useEffect(() => {
        const textWriter = async () => {
            if (!isWritten) {
                if (isDone) {
                    if (training[0].isMinimized || training[0].isClosed) {
                        setFirstParagraph('')
                        setSecondParagraph('')
                        setThirdParagraph('')
                        setFourthParagraph('')
                        setFifthParagraph('')
                        setSeeMore('')
                        setIsDone(false)
                        setIsWritten(false)
                        setSawMore(false)
                    } else {
                        await textContent()
                    }
                } else {
                    if (!training[0].isMinimized && !training[0].isClosed) {
                        await textContent();
                    }
                }
            }
        };

        textWriter();
    }, [training, isDone, isWritten, textContent]);

    useEffect(() => {
        const handleKeyDown = (event: KeyboardEvent) => {
            if (event.key === 'Enter') {
                seeMoreTextContent();
            }
        };

        document.addEventListener('keydown', handleKeyDown);
        return () => {
            document.removeEventListener('keydown', handleKeyDown);
        };
    }, [seeMoreTextContent]);

    return (
        <div ref={ref}>
            <Window page={training} description="Formação.txt" icon={theme.icon.training}>
                <Container page={training[0]} onClick={() => { focus(training) }}>
                    <Content maxWidth={(window.innerWidth - 30) + "px"}
                        maxHeight={(window.innerHeight - 82) + "px"}
                        page={training[0]} >
                        <Text>{firstParagraph}</Text>
                        <Title>{secondParagraph}</Title>
                        <Text>{thirdParagraph}</Text>
                        <Title>{fourthParagraph}</Title>
                        <Text>{fifthParagraph}</Text>
                        <Text>{seeMore}</Text>
                        <Cursor>|</Cursor>
                    </Content>
                </Container>
            </Window>
        </div>
    )

}

export { Training }; 