import React from 'react';
import { Redirect,Route } from 'react-router-dom';

function PrivateRoute({Component,getReply,getUsers,...rest}) {
    const token = localStorage.getItem('token')
    
    return (
        
            token ? <Route {...rest} render={()=><Component />} />  : <Redirect to = "/login" />
        
         
        
    );
}

export default PrivateRoute;