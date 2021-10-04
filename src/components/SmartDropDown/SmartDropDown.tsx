import React, {FC, useState} from 'react';
import {ChevronDownIcon} from "@heroicons/react/outline";

interface IOption {
    value: string;
    title: string;
}

interface ISmartDropDown {
    options: IOption[];
}

const SmartDropDown: FC<ISmartDropDown> = ({options}: ISmartDropDown) => {

    const initTitle: string = (options.length > 0) ? options[0].title : "Latest";
    const [selected, setSelected] = useState(initTitle);

    const optionSelect = (option: IOption): void => {
        setSelected(option.title);
    }

    const optionsWidget: JSX.Element[] = options?.map((option, idx) => (
        <span key={idx} className="p-3 hover:bg-gray-600" onMouseDown={() => optionSelect(option)} tabIndex={0}>
            {option.title}
        </span>
    ));

    return (
        <div className="relative min-w-[100px] py-2 px-4 rounded-full bg-red-600 group" role="button" tabIndex={0}>
            <div className="flex justify-between text-center">
                <span>{selected ?? "Select"}</span> <ChevronDownIcon className="ml-2 w-4"/>
            </div>
            {
                options
                &&
                <div
                    className="hidden focus-within:hidden group-focus:flex flex-col absolute z-10 top-10 left-0 min-w-[200px] bg-gray-700 rounded overflow-hidden">
                    {optionsWidget}
                </div>
            }
        </div>
    );
};

export default SmartDropDown;
