import React, {FC} from 'react';
import {ModalContext} from "../../contexts/ModalContext";
import useCustomContext from "../../hooks/CustomContext";
import {IModalProviderValues} from "../../interfaces/IModalProviderValues";

const ModalOverlay: FC = ({children}) => {
    const {showModal}: IModalProviderValues = useCustomContext(ModalContext);

    return (
        <div className={`${showModal ? "fixed opacity-100" : "hidden opacity-0"} transition-all top-0 h-full bg-[rgba(0,0,0,0.8)] w-full z-10`}>
            <div className="w-full h-full overflow-y-scroll py-5 px-0 sm:px-2 md:p-10">
                <div className="nc-modal-overlay__flow-control w-full flex justify-center">
                    {children}
                </div>
            </div>
        </div>
    );
};

export default ModalOverlay;
