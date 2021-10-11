import {FC} from "react";
import {ClockIcon} from "@heroicons/react/outline";
import {PlayIcon, PlusIcon, StarIcon} from "@heroicons/react/solid";
import ActionButton from "../ActionButton/ActionButton";
import Slider from "../Slider/Slider";

const Jumbotron: FC = (): JSX.Element => {
    return (
        <Slider image={"https://www.kolpaper.com/wp-content/uploads/2020/03/walking-dead-wallpaper.jpg"}>
            <div className="p-5 max-w-[700px] lg:mx-40 lg:mt-60 lg:mb-32 z-[1] text-gray-50">
                <h1 className="text-2xl lg:text-5xl font-bold">The Walking Dead</h1>
                <span className="flex pt-2"><ClockIcon className="w-5 mr-1"/> 2 h 32 min</span>
                <div className="flex py-5">
                    <span className="mr-5">2018</span> <span className="flex"><StarIcon
                    className="w-5 text-yellow-500 mr-1"/> 8.4</span>
                </div>

                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corporis dignissimos iusto pariatur quis
                    repellendus sapiente. Doloremque, iste, nam? Explicabo ipsa ipsam magni nesciunt porro praesentium
                    quaerat quod unde veniam veritatis!</p>

                <div className="my-5 flex flex-col sm:flex-row flex-wrap">
                    <ActionButton title="watch" Icon={<PlayIcon className="w-5"/>} bgColor="bg-red-600" className="max-w-[10rem]"/>
                    <span className="h-5 sm:w-5"/>
                    <ActionButton title="add list" Icon={<PlusIcon className="w-5"/>} bgColor="bg-black" className="max-w-[10rem]"/>
                </div>
            </div>
        </Slider>
    );
};

export default Jumbotron;
