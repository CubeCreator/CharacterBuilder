import React from "react";
import { Card, Form, Button, Tooltip } from "react-bootstrap";

class WeaponsDisplay extends React.Component {
    constructor(props) {
        super(props)

        //Get the Locally Stored Variables to Display
        this.state = {
            listOfWeapons: []
        }
    }

    //On set up trigger the data collect from the Local Storage
    componentDidMount = () => {
        //Trigger here:

    }

    render() {
        if (this.state.listOfWeapons !== [])
            var weapons = (this.state.listOfWeapons.map((n, index) => {
                return (
                    <div key={index}>

                    </div>
                )
            }))
        else {
            return (
                <div>
                    <h5>Current Weapons:</h5>
                    <p> You don't have any Weapons Yet... </p>
                </div>
            )
        }

        return (
            <div>
                <h5>Current Weapons:</h5>
                {weapons}
            </div>
        )
    }
}

export default WeaponsDisplay;