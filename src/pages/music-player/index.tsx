import { Window } from "../../components/windows/window";
import { BoxTitle, Buttons, Container, Content, Divider, Icon, MusicPlayerImage, ProgressBar, ProgressBarBox, Title, Volume, VolumeBox, VolumeInput } from "./styles";
import { usePages } from "../../hooks/usePages";
import { useOutsideClick } from "../../hooks/useOutsideClick";
import { useTheme } from "styled-components";
import { WindowMenu } from "../../components/windows/menu";
import { MediumButtom } from "../../components/windows/buttons/medium-button";
import { useState } from "react";
import YouTube, { YouTubeEvent } from "react-youtube";

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
        setPlayer(event.target);
        event.target.setShuffle(true);
        event.target.unMute();
        event.target.setVolume(value);
    };

    const onStateChange = (event: YouTubeEvent<any>) => {
        if (event.data === YouTube.PlayerState.PLAYING) {
            setInterval(updateProgressBar, 100);
        }
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
    };

    return (
        <div ref={ref}>
            <Window page={musicPlayer} description="Windows Media Player" icon={theme.icons.desktop.musicPlayer} notMaximizeable={true} onClose={() => player?.stopVideo()}>
                <WindowMenu page={musicPlayer[0]} notSearchable={true} />
                <Container onClick={() => { focus(musicPlayer) }}>
                    <Content >
                        <div style={{ maxHeight: '0px', overflow: 'hidden' }}>
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
                        </div>
                        <MusicPlayerImage />
                        <BoxTitle>
                            <Title>{title || '...'}</Title>
                            <Title>{title || '...'}</Title>
                        </BoxTitle>
                        <ProgressBarBox><ProgressBar $marginLeft={progress} /></ProgressBarBox>
                        <Buttons>
                            <MediumButtom onClick={() => player?.playVideo()} icon={<Icon $icon={theme.icons.player.play} />} />
                            <MediumButtom onClick={() => player?.pauseVideo()} icon={<Icon $icon={theme.icons.player.pause} />} />
                            <MediumButtom onClick={() => player?.stopVideo()} icon={<Icon $icon={theme.icons.player.stop} />} />
                            <Divider />
                            <MediumButtom onClick={() => player?.previousVideo()} icon={<Icon $icon={theme.icons.player.previous} />} />
                            <MediumButtom onClick={() => player?.nextVideo()} icon={<Icon $icon={theme.icons.player.next} />} />
                            <Divider />
                            <MediumButtom isDisabled={true} onClick={() => { }} icon={<Icon $icon={theme.icons.player.volume} />} />
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