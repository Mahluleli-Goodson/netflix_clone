import {FC} from "react";
import {SearchIcon} from "@heroicons/react/outline";
import {BellIcon} from "@heroicons/react/solid";

const Controls:FC = (): JSX.Element => {
  return (
      <div className="flex justify-between items-center max-w-[300px] w-[100%]">
        <SearchIcon className="h-5 w-5 text-gray-200 mx-5 cursor-pointer"/>
        <BellIcon className="h-5 w-5 text-gray-200 mx-5 cursor-pointer"/>
        <img
            className="w-12 h-12 rounded-full mx-5 cursor-pointer"
            src="https://cdn.pixabay.com/photo/2016/06/06/17/05/woman-1439909_960_720.jpg"
            alt="avatar"/>
      </div>
  );
};

export default Controls;
