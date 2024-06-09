import { useEffect, useState } from "react";
import { Box, Clock, Content, Volume } from "./styles";
import { Divider } from "../taskbar-button/styles";


function Notifications() {
    const [time, setTime] = useState('')

    const handleClick = (e: any) => {
        switch (e.detail) {
            case 3:
                window.open('https://youtu.be/dQw4w9WgXcQ', '_blank')
        }
    };

    useEffect(() => {
        setInterval(() => {
            const dateObject = new Date()

            const hour = dateObject.getHours()
            const minute = dateObject.getMinutes()

            const currentTime = (hour < 10 ? '0' + hour : hour) + ':' + (minute < 10 ? '0' + minute : minute)

            setTime(currentTime)
        }, 1000)

    }, [])

    return (
        <Content>
            <Divider />
            <Box>
                <Volume onClick={handleClick} />
                <Clock>{time}</Clock>
            </Box>
        </Content>
    )

}

export { Notifications };