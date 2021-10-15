import React, {Context, createContext, Dispatch, FC, ReactNode, SetStateAction, useEffect, useState} from "react";
import {IModalProviderValues} from "../interfaces/IModalProviderValues";

export const ModalContext: Context<IModalProviderValues | undefined> =
    createContext<IModalProviderValues | undefined>(undefined);

interface IModalProvider {
    children: ReactNode;
}

const appBody: HTMLCollectionOf<HTMLBodyElement> = document.getElementsByTagName("body");

/**
 * This Provider controls the physics related to the whole App modal parent/overlay
 * Use its context to control when it appears or disappears
 * @param children
 * @constructor
 */
const ModalProvider: FC<IModalProvider> = ({children}: IModalProvider) => {
    const [showModal, setShowModal]: [boolean, Dispatch<SetStateAction<any>>] = useState(false);
    const [mediaItem, setMediaItem]: [number, Dispatch<SetStateAction<any>>] = useState(0); // TODO: FIND A MORE RELIABLE WAY TO CONSUME ID of selected movie/tv-show

    const noScrollBody = () => {
        appBody[0].className = showModal ? "overflow-y-hidden" : "";
    }

    useEffect(noScrollBody, [showModal]);

    const providerValues: IModalProviderValues = {showModal, setShowModal, mediaItem, setMediaItem};
    return (
        <ModalContext.Provider value={providerValues}>
            {children}
        </ModalContext.Provider>
    );
};

export default ModalProvider;
