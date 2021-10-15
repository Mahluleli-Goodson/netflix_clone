import React, {FC} from "react";
import Header from "../../components/Header/Header";
import Jumbotron from "../../components/Jumbotron/Jumbotron";
import AvailableNow from "../../components/AvailableNow/AvailableNow";
import Recommended from "../../components/Recommended/Recommended";
import PlayerModal from "../../components/PlayerModal/PlayerModal";

const Home: FC = (): JSX.Element => {

    return (
        <>
            <Header/>
            <Jumbotron/>
            <Recommended/>
            <div className="y-spacer h10 lg:h-20"/>
            <AvailableNow/>
            <div className="y-spacer h-80"/>

            <PlayerModal/>
        </>
    );
};

export default Home;
