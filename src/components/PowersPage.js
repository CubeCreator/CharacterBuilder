import React from "react";
import PowersForm from "./PowersForm";
import PowersDisplay from "./PowersDisplay";

class PowersPage extends React.Component {
    constructor(props) {
        super(props)

        //Get the Locally Stored Powers to Display
        this.state = {
            ListOfPowers: []
        }
    }

    componentDidMount = () => {};

    render() {
        return(
            <div>
                <h2>Powers & Abilties Page</h2>
                <PowersForm />
                <PowersDisplay />
            </div>
        )
    }
}

export default PowersPage;