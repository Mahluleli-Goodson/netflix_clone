import {FC} from "react";
import {SearchIcon} from "@heroicons/react/outline";
import {BellIcon} from "@heroicons/react/solid";

const Controls:FC = (): JSX.Element => {
  return (
      <>
          <div className="border-t-[0.01rem] border-gray-800 w-full lg:hidden"/>
          <div className="flex flex-wrap self-center md:self-auto justify-between items-center max-w-[300px] w-full my-2 mx-auto md:mr-0 md:ml-auto">
              <SearchIcon className="h-5 w-5 text-gray-200 mx-5 cursor-pointer"/>
              <BellIcon className="h-5 w-5 text-gray-200 mx-5 cursor-pointer"/>
              <img
                  className="w-12 h-12 rounded-full mx-5 cursor-pointer"
                  src="https://cdn.pixabay.com/photo/2016/06/06/17/05/woman-1439909_960_720.jpg"
                  alt="avatar"/>
          </div>
      </>
  );
};

export default Controls;
