import React, { Fragment } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Home from './components/Home/Home';
import ChampionCV from './components/ChampionCV/ChampionCV';
import CareerCounsel from './components/CareerCounsel/CareerCounsel'; 
import Recruitment from './components/Recruitment/Recruitment';

const Routes = () => {
    return (
        <Fragment>
            <BrowserRouter>
                <Switch>
                    <Route exact path="/" component={Home} />
                    <Route exact path="/championcv" component={ChampionCV} />
                    <Route exact path="/careercounsel" component={CareerCounsel} />
                    <Route exact path="/recruitment" component={Recruitment} />
                </Switch>
            </BrowserRouter>
        </Fragment>   
    );
};

export default Routes;