import React, {
    Context,
    createContext,
    Dispatch,
    FC,
    ReactNode,
    SetStateAction,
    useCallback,
    useEffect,
    useState
} from 'react';
import useJumbotronData from "../hooks/JumbotronData";
import useSliderIntervalCounter from "../hooks/SliderIntervalCounter";
import {IMovie} from "../interfaces/IMovie";

export const SliderContext: Context<any> = createContext(null);

interface ISliderProvider {
    children: ReactNode;
}

interface ISliderContent extends IMovie {
}

/**
 * Acts as the Higher Order Component for the <Slider/> Component and all its children.
 * Wrap your slider related components and consume its data from the context
 * <SliderProvider>[...everything_else]</SliderProvider>
 * @param children
 * @constructor
 */
const SliderProvider: FC<ISliderProvider> = ({children}: ISliderProvider) => {

    const [currentSlideIndex, setCurrentSlideIndex]: [number, Dispatch<SetStateAction<any>>] = useState(0);
    const [currentContent, setCurrentContent]: [ISliderContent | undefined, Dispatch<SetStateAction<any>>] = useState();
    const {sliderContent, error} = useJumbotronData();
    const {count, setCount: setIntervalCounter} = useSliderIntervalCounter(3);

    const nextSlide = useCallback((index: number): void => {
        if (!sliderContent || sliderContent?.length === 0) {
            return;
        }

        if ((index >= sliderContent.length)) {
            setCurrentSlideIndex(0);
            return;
        }
        setCurrentSlideIndex(index);
    }, [sliderContent])

    const updateSlide = useCallback((): void => {
        if (!sliderContent) return;
        const content: ISliderContent = sliderContent[currentSlideIndex];
        setCurrentContent(content);
    }, [currentSlideIndex, sliderContent])

    const autoSlider = () => {
        nextSlide(count);
    };

    useEffect(autoSlider, [count, nextSlide])
    useEffect(() => {
        setCurrentContent(sliderContent ? sliderContent[0] : undefined);
    }, [sliderContent]);
    useEffect(() => updateSlide(), [currentSlideIndex, updateSlide]);

    const providerValue = {currentContent, error, nextSlide, currentSlideIndex, setIntervalCounter};

    return (
        <SliderContext.Provider value={providerValue}>
            {children}
        </SliderContext.Provider>
    );
};

export default SliderProvider;
