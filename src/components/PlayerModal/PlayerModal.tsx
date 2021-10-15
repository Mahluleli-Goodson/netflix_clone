import "./styles.scss";
import React from 'react';
import Modal from "../Modal/Modal";
import useCustomContext from "../../hooks/CustomContext";
import {ModalContext} from "../../contexts/ModalContext";
import {IModalProviderValues} from "../../interfaces/IModalProviderValues";
import useFetchVideo from "../../hooks/FetchVideo";

const PlayerModal = () => {
    const {setShowModal, mediaItem, setMediaItem}: IModalProviderValues = useCustomContext(ModalContext);
    const {videoURL} = useFetchVideo(mediaItem);

    console.log("pmod",videoURL)

    return (
        <Modal>
            <div className="min-h-[500px] max-w-[900px] w-full mx-5 bg-black rounded-md overflow-hidden">
                <div className="w-full overflow-y-hidden relative">
                    <iframe src={videoURL} frameBorder={0} title={mediaItem.toString()} className="nc-player-modal__iframe"/>
                    <div className="absolute bottom-0 h-[50px] bg-gradient-to-t from-black w-full" />
                </div>
                <button onClick={() => {
                    setShowModal(false);
                    setMediaItem(0);
                }} className="bg-red-500 m-10">CLOSE</button>
            </div>
        </Modal>
    );
};

export default PlayerModal;
