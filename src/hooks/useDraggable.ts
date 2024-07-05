import { useState, useCallback, useEffect } from 'react';
import { Position } from '../types/WindowTypes';

export const useDraggable = (maximized: boolean, focus: () => void) => {
    const [position, setPosition] = useState<Position>();
    const [dragging, setDragging] = useState(false);
    const [offset, setOffset] = useState({ x: 0, y: 0 });

    const onMouseDown = useCallback((event: React.MouseEvent<HTMLDivElement>) => {
        setDragging(true);
        focus()
        const { clientX, clientY } = event;
        const { left, top } = event.currentTarget.getBoundingClientRect();
        setOffset({ x: clientX - left, y: clientY - top });
    }, [focus]);

    const onMouseMove = useCallback((event: MouseEvent) => {
        if (maximized)
            return

        if (dragging) {
            setPosition({
                x: event.clientX - offset.x,
                y: event.clientY - offset.y,
            });
        }
    }, [dragging, offset, maximized]);

    const onMouseUp = useCallback(() => {
        setDragging(false);
    }, []);

    useEffect(() => {
        if (dragging) {
            document.addEventListener('mousemove', onMouseMove);
            document.addEventListener('mouseup', onMouseUp);
        } else {
            document.removeEventListener('mousemove', onMouseMove);
            document.removeEventListener('mouseup', onMouseUp);
        }

        return () => {
            document.removeEventListener('mousemove', onMouseMove);
            document.removeEventListener('mouseup', onMouseUp);
        };
    }, [dragging, onMouseMove, onMouseUp]);

    return {
        position,
        onMouseDown,
    };
};
