import React, { Component } from 'react';
import {
    Button,
    Form,
    FormGroup,
    Label,
    Input
} from 'reactstrap';

class Chirp extends Component {
    render() {
        return (
                    <Form>
                        <FormGroup>
                            <Label for="chirps">Chirp Chirp</Label>
                            <Input type="textarea" name="text" id="chirps"/>
                        </FormGroup>
                        <Button>Send Chirp</Button>
                    </Form>
        );
    }
}

export default Chirp;