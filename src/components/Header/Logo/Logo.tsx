import "./styles.scss";
import {FC} from "react";

const Logo: FC = (): JSX.Element => {
    return (
        <div className="flex flex-grow items-center">
            <img
                className="w-28"
                src="/assets/images/netflix_logo.png"
                alt="netflix clone"
            />
            <span className="nc-logo__clone-badge">concept / clone</span>
        </div>
    );
};

export default Logo;
