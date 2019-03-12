import React from 'react';
import {Button, Col, Form, FormGroup, Input, Label} from "reactstrap";
import PropTypes from 'prop-types';
import {connect} from "react-redux";
import {login} from "../actions/login";
import history from "../utils/history";


class Login extends React.PureComponent {
    state = {username: '', password: ''};

    /**
     * Handle input change
     * @param e event
     */
    onChange(e) {
        e.preventDefault();
        const {name, value} = e.target;
        this.setState((prevState) => {
            return {
                ...prevState,
                [name]: value
            }
        });
    }

    /**
     * Handle form submit
     * @param e event
     */
    onSubmitForm(e) {
        e.preventDefault();
        const {username, password} = this.state;
        const {login} = this.props;
        login(username, password);
        history.push('');
    }

    render() {
        const {username, password} = this.state;

        return (
            <div>
                <div className='container w-25'>
                    <h3 className='text-center'>Login!</h3>

                    <Form onSubmit={e => this.onSubmitForm(e)}>
                        <FormGroup row>
                            <Label for="username" sm={2}>Username</Label>
                            <Col sm={10}>
                                <Input type="text" name="username" id="username" onChange={(e) => this.onChange(e)}/>
                            </Col>
                        </FormGroup>
                        <FormGroup row>
                            <Label for="password" sm={2}>Password</Label>
                            <Col sm={10}>
                                <Input type="password" name="password" id="password"
                                       onChange={(e) => this.onChange(e)}/>
                            </Col>
                        </FormGroup>
                        <div className='d-flex'>
                            <Button className="button btn-success align-items-center m-auto"
                                    disabled={!(username && password)}
                                    type="submit">Login</Button>
                        </div>
                    </Form>
                </div>
            </div>
        )
    }
}

Login.propTypes = {
    username: PropTypes.string,
    password: PropTypes.string,
    login: PropTypes.func,
};

function mapDispatchToProps(dispatch) {
    return {
        login: (username, password) => {
            dispatch(login(username, password));
        },
    };
}

Login = connect(
    null,
    mapDispatchToProps)(Login);

export default Login;