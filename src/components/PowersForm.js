import React from "react";
import { Form, Card, Button, Tooltip } from "react-bootstrap";

class PowersForm extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            powerName: "",
            powerDetails: "",
            powerAddOns: [],
            abilities: []
        }
    }

    componentDidMount = () => {};

    render() {
        return(
            <form>
                <Card>
                    <Card.Header>Enter Power Details:</Card.Header>
                    <Card.Body>
                        <p>Power Name:</p>
                        <Form.Control id="powerName-select" onChange={this.handleChanges} placeholder="Enter Name"/>
                        <p>Power Details:</p>
                        <Form.Control id="powerDetails-select" onChange={this.handleChanges} placeholder="Enter Details" as="textarea" rows={4}/>
                        <br />
                    </Card.Body>
                </Card>
            </form>
        )
    }
}

export default PowersForm;