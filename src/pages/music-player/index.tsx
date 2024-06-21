import { Window } from "../../components/windows/window";
import { BoxTitle, Buttons, Container, Content, Divider, Icon, Image, ProgressBar, ProgressBarBox, Title, Volume, VolumeBox, VolumeInput } from "./styles";
import { usePages } from "../../hooks/usePages";
import { useOutsideClick } from "../../hooks/useOutsideClick";
import { useTheme } from "styled-components";
import { WindowMenu } from "../../components/windows/menu";
import { MediumButtom } from "../../components/windows/buttons/medium-button";
import { useEffect, useState } from "react";
import YouTube, { YouTubeEvent } from "react-youtube";

import play from '../../assets/icons/player/iconmonstr-play.svg';
import pause from '../../assets/icons/player/iconmonstr-pause.svg';
import stop from '../../assets/icons/player/iconmonstr-stop.svg';
import previous from '../../assets/icons/player/iconmonstr-media-previous.svg';
import next from '../../assets/icons/player/iconmonstr-media-next.svg';
import volume from '../../assets/icons/player/iconmonstr-audio.svg';

function MusicPlayer() {
    // const playlistId = 'PLUO8mnyUG2EIpm1PymeZmMT7sH8UJky6c';
    // const playlistId = 'PL91KhE7INCB3pz2F4rriUbOeqVeWLA1cl'; // ID da playlist do YouTube
    const playlistId = 'PLorwxKPZJphyI8AH5Cm6dS-_Wqz6HWPr7'; // ID da playlist do YouTube

    const theme = useTheme()
    const [value, setValue] = useState(2)
    const [title, setTitle] = useState()
    const [progress, setProgress] = useState("")

    const [player, setPlayer] = useState<any>(null);

    const { musicPlayer, focus, removeFocus } = usePages();

    const ref = useOutsideClick(() => {
        removeFocus()
    });

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setValue(parseInt(event.target.value));
        player.setVolume(parseInt(event.target.value));
    };

    const onReady = (event: YouTubeEvent<any>) => {
        console.log('event');

        setPlayer(event.target);
        event.target.setShuffle(true);
        event.target.unMute();
        event.target.setVolume(value);
    };

    const onStateChange = (event: YouTubeEvent<any>) => {
        if (event.data === YouTube.PlayerState.PLAYING) {
            setInterval(updateProgressBar, 100);
        }
        console.log('oi');

        getVideoTitle();
    };

    const updateProgressBar = () => {
        const currentTime = player?.getCurrentTime();
        const duration = player?.getDuration();
        setProgress(((currentTime || 0) / (duration || 1)) * 92 + '%')
    };


    const getVideoTitle = () => {
        const videoTitle = player?.getVideoData().title || '...';
        setTitle(videoTitle);
        console.log('titulo');
    };

    return (
        <div ref={ref}>
            <Window page={musicPlayer} description="Rádio" icon={theme.icon.musicPlayer} notMaximizeable={true}>
                <WindowMenu notSearchable={true} />
                <Container page={musicPlayer[0]} onClick={() => { focus(musicPlayer) }}>
                    <Content page={musicPlayer[0]} >
                        <YouTube
                            videoId={playlistId}
                            opts={{
                                height: '0',
                                width: '0',
                                playerVars: {
                                    listType: 'playlist',
                                    list: playlistId,
                                    loop: 1,
                                }
                            }}
                            onReady={onReady}
                            onStateChange={onStateChange}
                        />
                        <Image />
                        <BoxTitle>
                            <Title>{title || '...'}</Title>
                            <Title>{title || '...'}</Title>
                        </BoxTitle>
                        <ProgressBarBox><ProgressBar margin={progress} /></ProgressBarBox>
                        <Buttons>
                            <MediumButtom onClick={() => player?.playVideo()} icon={<Icon icon={play} />} />
                            <MediumButtom onClick={() => player?.pauseVideo()} icon={<Icon icon={pause} />} />
                            <MediumButtom onClick={() => player?.stopVideo()} icon={<Icon icon={stop} />} />
                            <Divider />
                            <MediumButtom onClick={() => player?.previousVideo()} icon={<Icon icon={previous} />} />
                            <MediumButtom onClick={() => player?.nextVideo()} icon={<Icon icon={next} />} />
                            <Divider />
                            <MediumButtom isDisabled={true} onClick={() => { }} icon={<Icon icon={volume} />} />
                            <VolumeBox>
                                <Volume />
                                <VolumeInput
                                    type="range"
                                    value={value} min={0} max={15}
                                    onChange={handleChange}
                                />
                            </VolumeBox>
                        </Buttons>
                    </Content>
                </Container>
            </Window>
        </div>
    )

}

export { MusicPlayer }; 