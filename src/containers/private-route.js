import {Redirect, Route} from "react-router-dom";
import React from "react";
import {connect} from "react-redux";
import {getUsername} from "../selectors/login";
import {createStructuredSelector} from "reselect/lib/index";

const PrivateRoute = ({component: Component, username, ...rest}) => (
    <Route {...rest} render={(props) => (
        username
            ? <Component {...props} />
            : <Redirect to='/login'/>
    )}/>
);

const mapStateToProps = createStructuredSelector({
    username: getUsername(),
});


export default connect(mapStateToProps, null)(PrivateRoute);