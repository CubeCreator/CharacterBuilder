import React from "react";
import { Button, Card, Form } from "react-bootstrap";

class SubmitsPage extends React.Component {
    constructor(props) {
        super(props)

        //Get the Online API storing the Characters and their info
        this.state = {
            ListOfCharacters: []
        }
    }

    componentDidMount = () => {
        //Use the Get Function to gather the data and set the State
    }

    render() {
        //Check if the List Of Characters is Empty
        if (this.state.ListOfCharacters !== [])
            //Set the Content to Loop over the amount of items in the API
            var content = (this.state.ListOfCharacters.map((n, index) => {
                return (
                    <Card key={index}>
                        
                    </Card>
                )
            }))

        return (
            <div>
                {/* Display the Submitted content */}
                <h2> Submitted Characters: </h2>
                <div>
                    {content}
                </div>
            </div>
        )
    }
}

export default SubmitsPage;