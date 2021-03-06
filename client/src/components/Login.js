import React, { Component } from 'react';
import {
    Button,
    Form,
    FormGroup,
    Label,
    Input
} from 'reactstrap';

class Login extends Component {
    state = {
        emails: [
        ]
    }

    render() {
        return (
                    <Form>
                        <h1>Login to Chirp!</h1>
                        <FormGroup>
                            <Label for="Email">Email</Label>
                            <Input type="email" name="email" id="userEmail" placeholder="Email Address" />
                        </FormGroup>
                        <FormGroup>
                            <Label for="Password">Password</Label>
                            <Input type="password" name="password" id="userPassword" placeholder="Password" />
                        </FormGroup>
                        <Button>Login</Button>
                    </Form>
        );
    }
}

export default Login;