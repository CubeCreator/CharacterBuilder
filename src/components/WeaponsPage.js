import React from "react";
import WeaponsForm from "./WeaponsForm";
import WeaponsDisplay from "./WeaponsDisplay";

class WeaponsPage extends React.Component {
    constructor(props) {
        super(props)
    }

    componentDidMount = () => {};

    render() {
        return(
            <div>
                <h2>Weapons Page</h2>
                <WeaponsForm />
                <WeaponsDisplay />
            </div>
        )
    }
}

export default WeaponsPage;