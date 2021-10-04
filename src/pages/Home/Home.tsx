import React, {FC} from "react";
import Header from "../../components/Header/Header";
import Jumbotron from "../../components/Jumbotron/Jumbotron";
import AvailableNow from "../../components/AvailableNow/AvailableNow";
import Recommended from "../../components/Recommended/Recommended";

const Home: FC = (): JSX.Element => {
    return (
        <>
            <Header/>
            <Jumbotron/>
            <Recommended/>
            <div className="h10 lg:h-20"/>
            <AvailableNow/>
            <div className="h-80"/>
        </>
    );
};

export default Home;
