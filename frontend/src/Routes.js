import React, { Fragment } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Home from './components/Home/Home';

const Routes = () => {
    return (
        <Fragment>
            <BrowserRouter>
                <Switch>
                    <Route exact path="/" component={Home} />
                </Switch>
            </BrowserRouter>
        </Fragment>   
    );
};

export default Routes;