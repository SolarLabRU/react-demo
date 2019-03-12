import React from 'react';
import PropTypes from 'prop-types';
import {logout} from "../actions/login";
import {connect} from "react-redux";
import {Button} from "reactstrap";
import history from "../utils/history";
import {createStructuredSelector} from "reselect";
import {getUsername} from "../selectors/login";

class Home extends React.PureComponent {

    /**
     * Logout processing
     */
    onLogoutClick() {
        const {logout} = this.props;
        logout();
        history.push('login');
    }

    render() {
        const {username} = this.props;
        return (
            <div className='text-center'>
                <h3>Hello, {username}!</h3>
                <Button className="btn-danger" onClick={() => this.onLogoutClick()}>Logout</Button>
            </div>
        )
    }
}

function mapDispatchToProps(dispatch) {
    return {
        logout: () => {
            dispatch(logout());
        },
    };
}

const mapStateToProps = createStructuredSelector({
    username: getUsername(),
});


Home.propTypes = {
    logout: PropTypes.func,
    username: PropTypes.oneOfType(PropTypes.string, PropTypes.bool)
};

Home = connect(
    mapStateToProps,
    mapDispatchToProps)(Home);

export default Home;