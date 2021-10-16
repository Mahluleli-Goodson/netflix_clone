import "./styles.scss";
import React from 'react';
import Modal from "../Modal/Modal";
import useCustomContext from "../../hooks/CustomContext";
import {ModalContext} from "../../contexts/ModalContext";
import {IModalProviderValues} from "../../interfaces/IModalProviderValues";
import useFetchPlayerModalContent from "../../hooks/FetchPlayerModalContent";
import {PlayIcon, StarIcon, XCircleIcon} from "@heroicons/react/solid";
import {environment} from "../../config/env";
import ActionButton from "../ActionButton/ActionButton";
import {PlusIcon, ThumbDownIcon, ThumbUpIcon} from "@heroicons/react/outline";
import MoviesTrail from "../MoviesTrail/MoviesTrail";

const PlayerModal = () => {
    const {setShowModal, mediaItem, setMediaItem}: IModalProviderValues = useCustomContext(ModalContext);
    const {videoURL, movieDetails, recommended} = useFetchPlayerModalContent(mediaItem);
    const {title, overview, poster_path, release_date, vote_average} = movieDetails ?? {};
    const cover = `${environment.IMAGE_PATH.W500}/${poster_path}`;

    const onCloseModal = (): void => {
        setShowModal(false);
        setMediaItem(0);
    }

    return (
        <Modal>
            <div className="min-h-[500px] max-w-[900px] w-full mx-1 sm:mx-5 bg-black rounded-md overflow-hidden">
                <div className="w-full overflow-y-hidden relative">
                    <iframe src={videoURL} frameBorder={0} title={title}
                            className="nc-player-modal__iframe" allowFullScreen={false}/>
                    <div className="absolute bottom-0 h-[50px] bg-gradient-to-t from-black w-full"/>
                    <XCircleIcon onClick={onCloseModal}
                                 className="absolute w-10 right-2 top-2 text-red-600 shadow-2xl cursor-pointer"/>
                </div>

                <div className="flex py-5 mx-5 border-b-[0.001em] border-gray-900">
                    <div className="flex items-center">
                        <ActionButton
                            title="play"
                            Icon={<PlayIcon className="w-5"/>}
                            bgColor="bg-red-600"
                            className="max-w-[8rem] md:max-w-[10rem] mr-1"
                        />
                        <PlusIcon className="w-10 h-10 mx-1 border-2 border-gray-500 p-2 rounded-full cursor-pointer"/>
                        <ThumbUpIcon
                            className="w-10 h-10 mx-1 border-2 border-gray-500 p-1 pl-2 rounded-full cursor-pointer"/>
                        <ThumbDownIcon
                            className="w-10 h-10 mx-1 border-2 border-gray-500 p-1 pr-2 rounded-full cursor-pointer"/>
                    </div>
                </div>

                <div className="flex p-5 justify-between">
                    <div className="max-w-xl">
                        <h1 className="text-3xl font-bold mb-1">{title}</h1>
                        <p className="md:text-[0.92rem] lg:text-[1rem] font-light text-justify">{overview}</p>
                        <div className="flex border-t-[0.001em] border-gray-900 mt-4 pt-1 justify-end items-center">
                            <span className="mr-2 text-lg">{new Date(release_date ?? "2021").getFullYear()}</span>
                            <span className="dot-separator h-1 w-1 bg-red-600 rounded-full mr-2"/>
                            <span className="flex text-lg"><StarIcon className="w-5 text-yellow-500 mr-1 self-center"/>
                                {vote_average} / 10
                            </span>
                        </div>
                    </div>
                    <div className="hidden md:flex flex-grow flex-1 justify-center items-center px-5">
                        {
                            poster_path
                            &&
                            <img className="w-full md:min-w-[7rem] lg:min-w-[9rem] lg:w-32 rounded-md" src={cover} alt={title}/>
                        }
                    </div>
                </div>

                <h4 className="mx-5 my-2 mb-2 text-lg border-b-[0.001em] border-gray-900 font-bold">You might like</h4>
                <div className="w-full mb-10 px-5">
                    <MoviesTrail carousel movieList={recommended} coverOrientation={"landscape"}
                                 chevronBlend={"from-black"}/>
                </div>
            </div>
        </Modal>
    );
};

export default PlayerModal;
