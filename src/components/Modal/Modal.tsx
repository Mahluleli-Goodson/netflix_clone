import React, {FC} from 'react';
import ModalOverlay from "./ModalOverlay";

const Modal: FC = ({children}) => {
    return (
        <ModalOverlay>
            {children}
            <div className="y-spacer h-10"/>
        </ModalOverlay>
    );
};

export default Modal;
