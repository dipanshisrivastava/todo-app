import React, {Component} from "react";

class Name extends Component {
    constructor() {
        super()
        this.state = {
            name: "Astha Srivastava"
        }
    }
    clickedMe = () => {
        this.setState({
            // name: 'Changed Text'
            name: this.state.name === "Astha Srivastava" ? "Disha Srivastava" : "Astha Srivastava"
        })
    }
    render() {
        return(
            <div>
                <h1>{this.state.name}</h1>
                <button onClick={this.clickedMe} className="btn btn-success">Change Text</button>
            </div>
        )
    }
}

export default Name;