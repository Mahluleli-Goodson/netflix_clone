
import {IModalProviderValues} from "../interfaces/IModalProviderValues";
import useCustomContext from "./CustomContext";
import {ModalContext} from "../contexts/ModalContext";

const usePlayerModalHook = () => {
    const {setShowModal, setMediaItem}: IModalProviderValues = useCustomContext(ModalContext);

    const openPlayableItem = (mediaId: number): void => {
        setMediaItem(mediaId);
        setShowModal(true);
    }

    return {openPlayableItem};
};

export default usePlayerModalHook;
