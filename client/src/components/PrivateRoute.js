import React from 'react';
import { Route, Redirect } from 'react-router-dom';

const PrivateRoute = ({ components: Component, ...rest}) => {
    return(
        <Route
        {...rest}
        render={props => {
            if (localStorage.getItem('token')){
                return <Component {...props}/>; //BubblesPage?
            } else{
                return <Redirect to="api/login"/>
                }
             }
         }
        />
    );
};

export default PrivateRoute;