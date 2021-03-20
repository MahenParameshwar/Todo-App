import React from 'react';
import { Route, Switch,Redirect } from 'react-router-dom';
import Home from '../Pages/Home';
import Login from '../Pages/Login';


import Register from '../Pages/Register';
import PrivateRoute from './PrivateRoute';

function Routes(props) {
    return (
        <Switch>
            <Route path="/login" exact render={()=><Login/>} />
            <Route path="/register" exact render={()=><Register/>} />
            <PrivateRoute path="/home" exact Component={Home} />
            <Route  render={() => (
                <Redirect to="/login"/>
                )}/>
            
        </Switch>
    );
}

export default Routes;