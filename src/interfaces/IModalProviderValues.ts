import {Dispatch, SetStateAction} from "react";

export interface IModalProviderValues {
    showModal: boolean;
    setShowModal: Dispatch<SetStateAction<any>>;
    mediaItem: number;
    setMediaItem: Dispatch<SetStateAction<any>>;
}
