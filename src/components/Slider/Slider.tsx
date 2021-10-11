import {FC} from "react";
import SliderIndicator from "../SliderIndicator/SliderIndicator";

interface IProps {
    children?: JSX.Element;
    image: string;
}

const Slider: FC<IProps> = ({children, image}: IProps): JSX.Element => {
    return (
        <div
            className="min-h-[500px] bg-cover bg-top relative flex justify-center flex-col w-[100%]"
            style={{backgroundImage: `url(${image})`}}>
            <div className="absolute w-[100%] h-[100%] bg-black opacity-40"/>
            {children}
            <div className="mb-5">
                <SliderIndicator/>
            </div>
        </div>
    );
};

export default Slider;
