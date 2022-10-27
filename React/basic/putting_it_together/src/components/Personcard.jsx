import React, {Component} from "react";

class Personcard extends Component {
    constructor(props) {
        super(props);
        this.state = {
            age: parseInt(this.props.age)
        }
    }
    
    birthday = () => {
        this.setState({ age: this.state.age + 1 });
    }

    render() {
        const {firstName, lastName, hairColor} = this.props
        return(
            <div>
            <h1>{firstName}, {lastName}</h1>
            <p>Age: {this.state.age}</p>
            <p>Hair color: {hairColor}</p>
            <button onClick={ this.birthday }>birthday button for {firstName} {lastName}</button>
            </div>
        )
    }
}

export default Personcard;
