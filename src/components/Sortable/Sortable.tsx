import React, {FC} from 'react';
import SmartDropDown from "../SmartDropDown/SmartDropDown";

const sortList: { value: string, title: string }[] = [
    {value: "latest", title: "Latest"},
    {value: "rating", title: "Rating"},
    {value: "title", title: "Title"},
    {value: "year-ascending", title: "Year ascending"},
    {value: "year-descending", title: "Year descending"},
];

const Sortable: FC = (): JSX.Element => {
    return (
        <section className="flex flex-col sm:flex-row items-center">
            <span className="mr-6 text-gray-500">Sort By:</span>
            <span className="h-2" />
            <SmartDropDown options={sortList}/>
        </section>
    );
};

export default Sortable;
