import React, {FC} from 'react';
import Home from "./pages/Home/Home";
import {BrowserRouter as Router, Switch} from "react-router-dom";
import {Route} from "react-router";
import Playing from "./pages/Playing/Playing";

const App: FC = (): JSX.Element => {
    return (
        <Router>
            <Switch>
                <Route exact path={"/"} component={Home}/>
                <Route exact path={"/play"} component={Playing}/>
                <Route>
                    <div className="text-8xl flex justify-center">404</div>
                </Route>
            </Switch>
        </Router>
    );
};

export default App;
