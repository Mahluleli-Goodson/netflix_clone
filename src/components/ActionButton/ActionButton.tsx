import {FC, HTMLAttributes} from "react";

interface IProps extends HTMLAttributes<any> {
    Icon: JSX.Element;
    title: string;
    bgColor: string;
}

const ActionButton: FC<IProps> = ({Icon, title, bgColor, className, ...rest}: IProps): JSX.Element => {
    return (
        <>
            <div
                className={`${bgColor} inline-flex min-w-32 px-5 py-3 rounded-full font-medium cursor-pointer ${className}`} {...rest}>
                {Icon} <span className="uppercase ml-2">{title}</span>
            </div>
        </>
    );
};

export default ActionButton;
