import {FC} from "react";
import SliderIndicator from "../SliderIndicator/SliderIndicator";

interface IProps {
    children?: JSX.Element
}

const Slider: FC<IProps> = ({children}: IProps): JSX.Element => {
    return (
        <div
            className="min-h-[500px] bg-cover bg-top relative flex justify-center flex-col"
            style={{backgroundImage: "url('https://www.kolpaper.com/wp-content/uploads/2020/03/walking-dead-wallpaper.jpg')"}}>
            <div className="absolute w-[100%] h-[100%] bg-black opacity-40"/>
            {children}
            <div className="mb-5">
                <SliderIndicator/>
            </div>
        </div>
    );
};

export default Slider;
