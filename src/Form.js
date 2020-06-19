import React, { Component } from 'react';
import { Form, Button } from 'react-bootstrap';
class AddNewJob extends Component {
    constructor(props) {
        super(props);

        this.initialState = {
            name: '',
            job: ''
        };

        this.state = this.initialState;
    }

    handleChange = event => {
        const { name, value } = event.target;

        this.setState({
            [name]: value
        });
    }

    onFormSubmit = (event) => {
        event.preventDefault();
        this.props.handleSubmit(this.state);
        this.setState(this.initialState);
    }

    render() {
        const { name, job } = this.state;

        return (
            <Form onSubmit={this.onFormSubmit}>
                <Form.Group controlId="formBasicName">
                    <Form.Label>Name</Form.Label>
                    <Form.Control type="text" placeholder="name ..." name="name" value={name} onChange={this.handleChange} required />
                    <Form.Text className="text-muted">
                        We'll never share your personal data with anyone else.
                   </Form.Text>
                </Form.Group>

                <Form.Group controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="text" placeholder="job ..." name="job" value={job} onChange={this.handleChange} required />
                </Form.Group>
                <Button variant="primary" type="submit">
                    Submit
            </Button>
            </Form>
        );
    }
}

export default AddNewJob;