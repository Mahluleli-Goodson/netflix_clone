import {FC} from "react";

export interface GenreItemProps {
    title: string;
}

const GenreItem: FC<GenreItemProps> = ({title}: GenreItemProps): JSX.Element => {
    return (
        <span className="min-w-[200px] inline-flex bg-gray-700 px-5 py-2 justify-center items-center rounded-full mx-2 my-2 cursor-pointer">
            {title}
        </span>
    );
};

export default GenreItem;
