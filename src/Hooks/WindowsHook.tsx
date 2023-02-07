import { useState } from 'react';

interface WindowSize {
    width: number;
    height: number;
}

export const WindowsHook = () => {
    const useWindowSize = (): WindowSize => {
        const [windowSize, setWindowSize] = useState<WindowSize>({
            width: window.innerWidth,
            height: window.innerHeight,
        });
    };

    return <div>WindowsHook</div>;
};
