import {FC} from "react";

const SliderIndicator: FC = (): JSX.Element => {

    const widgets: JSX.Element[] = [1, 2, 3].map((val: number, index: number) =>
        <span key={index} className={`mx-2 w-14 h-0.5 bg-gray-50 rounded-full block z-[1] cursor-pointer ${index === 1 ? "opacity-100" : "opacity-50"}`}/>
    );

    return (
        <div className="flex justify-center items-center p-5">
            {widgets}
        </div>
    );
};

export default SliderIndicator;
