import React, {FC} from 'react';
import ModalOverlay from "./ModalOverlay";

const Modal: FC = ({children}) => {
    return (
        <ModalOverlay>
            {children}
        </ModalOverlay>
    );
};

export default Modal;
