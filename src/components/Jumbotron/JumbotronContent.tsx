import "./styles.scss";
import React, {useContext} from 'react';
import {ClockIcon} from "@heroicons/react/outline";
import {PlayIcon, PlusIcon, StarIcon} from "@heroicons/react/solid";
import ActionButton from "../ActionButton/ActionButton";
import {SliderContext} from "../../contexts/SliderContext";
import {IMovie} from "../../interfaces/IMovie";
import UIHelper from "../../helpers/UIHelper";

interface ISliderContext {
    currentContent: IMovie
}

const JumbotronContent = () => {
    const {currentContent}: ISliderContext = useContext(SliderContext);
    let {title, release_date, vote_average, overview} = currentContent ?? {};
    const overviewWidget = UIHelper.makeOverview(overview);

    return (
        <div className="p-5 max-w-[700px] md:h-[400px] lg:mx-40 lg:mt-60 lg:mb-10 z-[1] text-gray-50">
            <h1 className="text-2xl lg:text-5xl font-bold">{title}</h1>
            <span className="flex pt-2"><ClockIcon className="w-5 mr-1"/> 2 h 32 min</span>
            <div className="flex py-5">
                <span className="mr-5">{new Date(release_date ?? "2021").getFullYear()}</span>
                <span className="flex"><StarIcon className="w-5 text-yellow-500 mr-1"/>
                    {vote_average}
                </span>
            </div>

            <section className="md:text-[1.2rem] font-light transition-all">{overviewWidget}</section>

            <div className="my-5 flex flex-col sm:flex-row flex-wrap">
                <ActionButton
                    title="watch"
                    Icon={<PlayIcon className="w-5"/>}
                    bgColor="bg-red-600"
                    className="max-w-[8rem] md:max-w-[10rem]"
                />
                <span className="h-5 sm:w-5"/>
                <ActionButton
                    title="add list"
                    Icon={<PlusIcon className="w-5"/>}
                    bgColor="bg-black"
                    className="max-w-[8rem] md:max-w-[10rem]"
                />
            </div>
        </div>
    );
};

export default JumbotronContent;
