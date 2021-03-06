import React, {Component} from 'react';
import {loginApi} from "../../api/LoginService";
import LoginForm from "./LoginForm";
import Swal from 'sweetalert2'

class LoginContainer extends Component {
    constructor(pros) {
        super(pros);
        this.state = {
            auth : {
                username: "",
                password: ""
            }
        }
    }

    handleChangeInput = (event, field) => {
        let { auth } = this.state;
        auth[field] = event.target.value;
        this.setState({ auth });
        console.log(this.state.auth);
    }

    loginProses = (event) => {
        event.preventDefault();
        loginApi(this.state.auth)
            .then((res) => {
                console.log(res);
                if (res.data !== null) {
                    Swal.fire(
                        'Good job!',
                        'Login Success!',
                        'success'
                    ).then(r => {
                        sessionStorage.setItem("auth-token", res.data.token);
                        this.props.onLogin();
                        this.clearFormLogin();
                    })
                } else {
                    Swal.fire({
                        title: 'Error!',
                        text: 'Incorret Username or Password',
                        icon: 'error',
                        confirmButtonText: 'Ok'
                    }).then(r => {
                        this.clearFormLogin();
                    })
                }
            })
            .catch((error) => {
                console.error(error);
            });
    }
    clearFormLogin = () => {
        this.setState({ ...this.state, auth: { username: "", password: "" } });
    };

    render() {
        return (
            <>
                <LoginForm
                    auth={this.state.auth}
                    handleChangeInput={this.handleChangeInput}
                    loginProses={this.loginProses}
                />

            </>
        );
    }
}

export default LoginContainer;