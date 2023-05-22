import React from "react";
import CharacterForm from "./CharacterForm";
import WeaponsDisplay from "./WeaponsDisplay";
import PowersDisplay from "./PowersDisplay";

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
                <CharacterForm />
                <WeaponsDisplay />
                <PowersDisplay />
            </div>
        )
    }
}

export default CharacterPage;