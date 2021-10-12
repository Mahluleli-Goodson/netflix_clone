import {FC} from "react";
import Slider from "../Slider/Slider";
import SliderProvider from "../../contexts/SliderContext";
import JumbotronContent from "./JumbotronContent";

const Jumbotron: FC = (): JSX.Element => {

    return (
        <SliderProvider>
            <Slider>
                <JumbotronContent/>
            </Slider>
        </SliderProvider>
    );
};

export default Jumbotron;
