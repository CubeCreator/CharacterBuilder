import React from "react";

class WeaponsPage extends React.Component {
    constructor(props) {
        super(props)

        //Get the Locally Stored list of Weapons
        this.state = {
            ListOfWeapons: []
        }
    }

    componentDidMount = () => {};

    render() {
        return(
            <div>
                <h2>Weapons Page</h2>
            </div>
        )
    }
}

export default WeaponsPage;