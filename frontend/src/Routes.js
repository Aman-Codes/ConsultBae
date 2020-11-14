import React, { Fragment } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Home from './components/Home/Home';
import ChampionCV from './components/ChampionCV/ChampionCV';

const Routes = () => {
    return (
        <Fragment>
            <BrowserRouter>
                <Switch>
                    <Route exact path="/" component={Home} />
                    <Route exact path="/championcv" component={ChampionCV} />
                </Switch>
            </BrowserRouter>
        </Fragment>   
    );
};

export default Routes;