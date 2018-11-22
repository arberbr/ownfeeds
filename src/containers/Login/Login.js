import React, { Component } from 'react';
import './Login.css';

// Higher Order Components
import Aux from "../../hoc/Auxiliary";

// Components
import Input from '../../components/UI/Input/Input';
import Button from '../../components/UI/Button/Button';
import Logo from '../../components/Logo/Logo';

// Helpers
import { checkValidity, updateObject } from "../../shared/helpers";

class Login extends Component {

    state = {
        controls: {
            email: {
                elementType: 'input',
                elementConfig: {
                    type: 'email',
                    placeholder: 'E-Mail Address'
                },
                value: '',
                validation: {
                    required: true,
                    isEmail: true
                },
                valid: false,
                touched: false
            },
            password: {
                elementType: 'input',
                elementConfig: {
                    type: 'password',
                    placeholder: 'Password'
                },
                value: '',
                validation: {
                    required: true,
                    minLength: 8
                },
                valid: false,
                touched: false
            }
        }
    };

    inputChangedHandler = (event, controlName) => {
        const updatedControls = updateObject(this.state.controls, {
            [controlName] : updateObject(this.state.controls[controlName], {
                value: event.target.value,
                valid: checkValidity(event.target.value, this.state.controls[controlName].validation),
                touched: true
            })
        });
        this.setState({ controls: updatedControls });
    };

    authLoginHandler = (event) => {
        event.preventDefault();
        console.log('clicked login');
    };

    authRegisterHandler = (event) => {
        event.preventDefault();
        console.log('clicked register');
    };

    toggleMobileMenu = (event) => {
        event.preventDefault();
        this.setState(prevState => ({
            mobileMenuShown: !prevState.mobileMenuShown
        }));
    };

    render() {

        const formElementsArray = [];

        for (let key in this.state.controls) {
            formElementsArray.push({
                id: key,
                config: this.state.controls[key]
            });
        }

        let form = formElementsArray.map( formElement => (
            <Input
                key={formElement.id}
                elementType={formElement.config.elementType}
                elementConfig={formElement.config.elementConfig}
                value={formElement.config.value}
                invalid={ !formElement.config.valid }
                shouldValidate={ formElement.config.validation }
                touched={ formElement.config.touched }
                changed={ (event) => this.inputChangedHandler(event, formElement.id) } />
        ));

        let asideClasses = ['login'];
        if(this.state.mobileMenuShown) asideClasses.push('active');

        return (
            <Aux>
                <aside className={ asideClasses.join(' ') }>
                    <div className="login-wrapper">
                        <Logo />
                        <div className="login-box">
                            <form>
                                {form}
                                <Button clicked={this.authLoginHandler}>Login</Button>
                                <Button clicked={this.authRegisterHandler}>Register</Button>
                            </form>
                        </div>
                    </div>
                </aside>
            </Aux>
        );
    };
};

export default Login;