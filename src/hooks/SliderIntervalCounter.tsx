import {useCallback, useEffect, useState} from 'react';

const useSliderIntervalCounter = (maxSlides: number) => {
    const [count, setCount] = useState(0);

    const ticker = useCallback(() => {
        const timer = setInterval(() => {
            if (count + 1 >= maxSlides) {
                setCount(0);
                return;
            }

            setCount(count + 1);

        }, 10000);

        return () => {
            clearInterval(timer);
        };
    }, [count, maxSlides])

    useEffect(() => ticker(), [count, ticker]);
    return {count, setCount};
};

export default useSliderIntervalCounter;
