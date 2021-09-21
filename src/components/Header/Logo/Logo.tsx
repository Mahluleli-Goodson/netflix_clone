import {FC} from "react";

const Logo: FC = (): JSX.Element => {
    return (
        <div className="flex flex-grow">
            <img
                className="w-28"
                src="/assets/images/netflix_logo.png"
                alt="netflix clone"
            />
        </div>
    );
};

export default Logo;
