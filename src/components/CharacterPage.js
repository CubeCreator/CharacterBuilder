import React from "react";

class CharacterPage extends React.Component {
    constructor(props) {
        super(props)

        //Get the Locally Stored Variables to Display
        this.state ={
            ListOfWeapons: [],
            ListOfPowers: []
        }
    }

    componentDidMount = () => {};

    render() {
        return (
            <div>
                <h2>Character Details</h2>
            </div>
        )
    }
}

export default CharacterPage;