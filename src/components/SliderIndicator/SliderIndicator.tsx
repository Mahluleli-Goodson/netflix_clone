import {FC, useContext} from "react";
import {SliderContext} from "../../contexts/SliderContext";

const SliderIndicator: FC = (): JSX.Element => {

    const {nextSlide, currentSlideIndex, setIntervalCounter} = useContext(SliderContext);

    const widgets: JSX.Element[] = [1, 2, 3].map((val: number, index: number) => {
            return <span
                key={index}
                className={`
                         mx-2 
                         w-14 
                         h-0.5 
                         bg-gray-50 
                         rounded-full 
                         block 
                         z-[1] 
                         cursor-pointer 
                         ${index === currentSlideIndex ? "opacity-100" : "opacity-50"}
                         `}
                onClick={() => {
                    setIntervalCounter(index);
                    nextSlide(index);
                }}
            />;
        }
    );

    return (
        <div className="flex justify-center items-center p-5">
            {widgets}
        </div>
    );
};

export default SliderIndicator;
