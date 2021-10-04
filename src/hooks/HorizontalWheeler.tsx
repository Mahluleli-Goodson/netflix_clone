import {MutableRefObject, useEffect, useRef, WheelEvent} from 'react';

/**
 * Add horizontal wheel scroll on mouseover to a horizontal-scrollable element, and prevent vertical scroll
 */
const useHorizontalWheeler = (): {wheelRef: MutableRefObject<any>} => {
    const wheelRef: MutableRefObject<any> = useRef(null);
    const onWheel = () => {
        const container = wheelRef.current;
        container?.addEventListener("wheel", (event: WheelEvent<HTMLDivElement>) => {
            event.preventDefault();
            container.scrollTo({
                top: 0,
                left: (container.scrollLeft + event.deltaY)
            });
        }, {passive: false});

    };

    useEffect(() => onWheel(), []);
    return {wheelRef};
};

export default useHorizontalWheeler;
