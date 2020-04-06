import React from 'react';
import FormInput from '../form-input/form-input.component';
import CustomButton from '../custom-button/custom-button.component';
import { auth, signInWithGoogle } from '../../firebase/firebase.utils';

import {
    SignInContainer,
    Title,
    ButtonsContainer
} from './sign-in.styles';

class SignIn extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            email: '',
            password: ''
        }
    }

    handlerSubmit = async event => {
        event.preventDefault();
        const { email, password } = this.state;

        try {
            await auth.signInWithEmailAndPassword(email, password);
            this.setState({email: '', password:''})
        } catch (error) {
            console.log(error);
        } 
    }

    handlerChange = event => {
        const {value, name} = event.target;
        this.setState({[name]: value})
    }
    render() {
        return (
            <SignInContainer>
                <Title>I already have an account</Title>
                <span>Sign in with your email and password</span>

                <form onSubmit={this.handlerSubmit}>
                    <FormInput 
                    name="email" 
                    type="email" 
                    value={this.state.email} 
                    handleChange={this.handlerChange}
                    label="email"
                    required
                    />

                    <FormInput 
                    name="password" 
                    type="password" 
                    value={this.state.password}
                    handleChange={this.handlerChange}
                    label="password"
                    required
                    />
                    <ButtonsContainer>
                        <CustomButton type="submit">SIGN IN</CustomButton>
                        <CustomButton onClick={signInWithGoogle} isGoogleSignIn>SIGN IN WITH GOOGLE</CustomButton>
                    </ButtonsContainer>
                  
                </form>
            </SignInContainer>
        )
    }
};

export default SignIn;