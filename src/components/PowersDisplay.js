import React from "react";
import { Card, Form, Button, Tooltip } from "react-bootstrap";

class PowersDisplay extends React.Component {
    constructor(props) {
        super(props)

        //Get the Locally Stored Variables to Display
        this.state = {
            listOfPowers: []
        }
    }

    //On set up trigger the data collect from the Local Storage
    componentDidMount = () => {
        //Trigger here:

    }

    render() {
        if (this.state.listOfPowers !== [])
            //Loop through the items and display each of them inside the powers variable
            var powers = (this.state.listOfPowers.map((n, index) => {
                return(
                    <div key={index}>

                    </div>
                )
            }))
        else {
            //Return this if there is nothing in the state
            return(
                <div>
                    <h5>Current Powers & Abilities:</h5>
                    <p> You don't have any Powers Yet... </p>
                </div>
            )
        }

        return (
            //Display the current array/data of Powers
            <div>
                <h5>Current Powers & Abilities:</h5>
                <br />
                {powers}
            </div>
        )
    }
}

export default PowersDisplay;