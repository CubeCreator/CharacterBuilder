import React from "react";
import { propTypes } from "react-bootstrap/esm/Image";

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
            </div>
        )
    }
}

export default PowersPage;