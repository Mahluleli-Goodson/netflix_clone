import {FC, useContext} from "react";
import SliderIndicator from "../SliderIndicator/SliderIndicator";
import {environment} from "../../config/env";
import {SliderContext} from "../../contexts/SliderContext";

interface IProps {
    children?: JSX.Element;
}

const Slider: FC<IProps> = ({children}: IProps): JSX.Element => {

    const {currentContent} = useContext(SliderContext);
    const {IMAGE_PATH} = environment;

    const backdrop: string = currentContent ? currentContent.backdrop_path : "";
    const image: string = currentContent ? `${IMAGE_PATH.ORIGINAL}/${backdrop}` : "";

    return (
        <div
            className="min-h-[500px] bg-cover bg-top relative flex transition-all duration-700 justify-center flex-col w-[100%]"
            style={{backgroundImage: `url(${image})`}}>
            <div className="absolute w-[100%] h-[100%] bg-black opacity-40"/>
            {children}
            <div className="mb-5 absolute w-full bottom-1">
                <SliderIndicator/>
            </div>
            <div className="py-10 absolute w-full bg-gradient-to-t from-gray-900 to-transparent bottom-0"/>
        </div>
    );
};

export default Slider;
