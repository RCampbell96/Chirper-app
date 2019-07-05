import React, { Component } from 'react';
import {
    Button,
    Form,
    FormGroup,
    Label,
    Input
} from 'reactstrap';

class Register extends Component {
    state = {
        emails: [
        ]
    }

    render() {
        
        return (
                    <Form>
                        <h1>Sign-Up!</h1>
                        <FormGroup>
                            <Label for="First Name">First Name</Label>
                            <Input type="first name" name="first name" id="userFirstName" placeholder="First Name" />
                        </FormGroup>
                        <FormGroup>
                            <Label for="Last Name">Last Name</Label>
                            <Input type="last name" name="last name" id="userLastName" placeholder="Last Name" />
                        </FormGroup>
                        <FormGroup>
                            <Label for="Email">Email</Label>
                            <Input type="email" name="email" id="userEmail" placeholder="Email Address" />
                        </FormGroup>
                        <FormGroup>
                            <Label for="Password">Password</Label>
                            <Input type="password" name="password" id="userPassword" placeholder="Password" />
                        </FormGroup>
                        <Button>Sign-Up</Button>
                    </Form>
        );
    }
}

export default Register;