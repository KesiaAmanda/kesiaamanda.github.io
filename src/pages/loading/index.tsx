import { Content, AnimatedContainer, Image, LoadingContent, Cookie, Bios, Boot, Logo, BiosContent, Text } from "./styles";
import { useCallback, useEffect, useState } from "react";
import { useTheme } from "styled-components";
import { useWindowSize } from "../../hooks/useWindowSize";

const speed = 100;

function Loading() {
    const theme = useTheme()
    const size = useWindowSize()

    const delay = (ms: number) => new Promise(resolve => setTimeout(resolve, ms));

    const [isBooting, setIsBooting] = useState(true);
    const [isLoading, setIsLoading] = useState(true);
    const [loadingText, setLoadingText] = useState('Iniciando o sistema');
    const [items, setItems] = useState<string>();

    const [clicked, setClicked] = useState(false);

    const handleClick = (e: any) => {
        switch (e.detail) {
            case 3:
                window.open('https://orteil.dashnet.org/cookieclicker/', '_blank')
        }
    };

    const typeWriter = useCallback(async (timeout: number, text: string[]) => {
        let newText = '';
        for (let i = 0; i < text.length; i++) {
            newText += text[i];
            newText += '\n';
            setItems(newText);
            await delay(timeout);
        }
    }, []);

    useEffect(() => {
        let repetitions = 0;

        const interval = setInterval(() => {
            setLoadingText(prevText => prevText + '.');
            repetitions++;

            if (repetitions === 3) {
                clearInterval(interval);
            }
        }, 600);

        return () => clearInterval(interval);
    }, []);

    useEffect(() => {
        const newItems = ['BIOS Date: 02/26/09 19:53:05 Ver: 08.00.15',
            'CPU: Intel(R) Core(TM) 2 Quad CPU Q9300 @ 2.50GHz Speed 2.50 GHz',
            'Custom BIOS Support',
            '64-bit Architecture',
            'Press DEL to run Setup',
            'Press F12 for BBS POPUP',
            'Memory Clock: 1600 MHz, Tc1:8 Trcd:6 Trp:6 Tras: 20 Tref:8uS',
            'Dual Channel Mode',
            'All information displayed on this screen is fictitious.']

        const textWriter = async () => {
            await typeWriter(speed, newItems)
        };

        textWriter();

        const timeout = setTimeout(() => {
            setIsBooting(false);

            const timeout = setTimeout(() => {
                setIsLoading(false);
            }, 3000);

            return () => clearTimeout(timeout);
        }, 2200);

        return () => clearTimeout(timeout);
    }, [typeWriter]);

    return (
        <Content $maxWidth={(size.width) + "px"} $maxHeight={(size.height) + "px"} $isDisabled={isLoading} >
            {isBooting === true ?
                <Bios>
                    <Logo>
                        <AnimatedContainer>
                            <Cookie src={'https://i.seadn.io/gae/6m9Kv0sG1G5ln-pNAHFAPzVoeUlS0BBPr27FUGEdThZlCYduk6lzSr4HPnQ6QCWow_-y2LPCBIH8QZxcaw2keNNjcdjDIuaVKYpniw?auto=format&dpr=1&w=1000'}
                                onMouseDown={() => setClicked(true)}
                                onMouseUp={() => setClicked(false)}
                                $active={clicked}
                                onClick={handleClick}
                                alt="Cookie"
                            />
                        </AnimatedContainer>
                        <BiosContent>
                            <Text>www.cky.com</Text>
                            <Text>Cookie Tech</Text>
                            <Text>CKYBIOS (C) 2008 Cookie Tech, Inc.</Text>
                            <Text>This BIOS is exclusively for Kesia Amanda Portfolio R01-C2</Text>
                        </BiosContent>
                    </Logo>

                    <BiosContent>
                        {items}
                    </BiosContent>
                </Bios>
                :
                <Boot>
                    <AnimatedContainer>
                        <Image src={theme.star} alt="Star" />
                    </AnimatedContainer>
                    <LoadingContent>
                        <Text>{loadingText}</Text>
                        <img width={'200px'} src={theme.loading} alt="Loader" />
                    </LoadingContent>
                </Boot>
            }
        </Content>
    )

}

export { Loading }; 