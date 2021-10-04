import {FC} from "react";

export interface GenreItemProps {
    title: string;
    active: boolean;
}

const GenreItem: FC<GenreItemProps> = ({title, active}: GenreItemProps): JSX.Element => {
    return (
        <span className={`min-w-[200px] inline-flex px-5 py-2 justify-center items-center rounded-full mx-2 my-2 cursor-pointer ${active ? "bg-red-600" : "bg-gray-700"}`}>
            {title}
        </span>
    );
};

export default GenreItem;
