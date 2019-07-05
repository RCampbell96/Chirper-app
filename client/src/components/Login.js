import React, { Component } from 'react';
import {
    Button,
    Container, 
    Form, 
    FormGroup, 
    Label,
    ListGroup,
    ListGroupItem, 
    Input, 
    FormText
} from 'reactstrap';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import uuid from 'uuid';

class Login extends Component {
    state = {
        emails: [
            { id: uuid(), email: 'richard.campbell1996@yahoo.com'},
            { id: uuid(), email: 'rich.camp@yahoo.com'},
            { id: uuid(), email: 'rich.camp@yahoo.com'},
            { id: uuid(), email: 'rich.camp@yahoo.com'}
        ]
    }

    render() {
        const { emails } = this.state;
        return(
            <Form>
                <FormGroup>
                    <Label for="Email">Email</Label>
                    <Input type="email" name="email" id="userEmail" placeholder="Email Address" />
                </FormGroup>
                <FormGroup>
                    <Label for="Password">Password</Label>
                    <Input type="password" name="password" id="userPassword" placeholder="Password" />
                </FormGroup>
                <Button>Login</Button>
             <Container>
                <Button 
                    color="dark"
                    style={{marginBottom: '2rem'}}
                    onClick={() => {
                        const emails = prompt('Enter Email');
                        if(emails) {
                            this.setState(state => ({
                                emails: [...state.emails, { id: uuid(), emails }]
                            }));
                        }
                    }}
                    >Add Email</Button>

                    <ListGroup>
                        <TransitionGroup className="email-list">
                            {emails.map(({ id, email }) => (
                                <CSSTransition key={id} timeout={500} classNames="fade">
                                    <ListGroupItem>
                                        <Button className="remove-btn"
                                        color="danger"
                                        size="sm"
                                        onClick={() => {
                                            this.setState(state => ({
                                                emails: state.emails.filter(item => item.id !== id)
                                            }));
                                        }}>
                                            &times;
                                        </Button>
                                        {email}
                                    </ListGroupItem>
                                </CSSTransition>
                            ))}
                        </TransitionGroup>
                    </ListGroup>
            </Container>
        </Form>
           
        );
    }
}

export default Login;