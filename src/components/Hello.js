import React from "react";

function Hello(props) {

    function Clickme() {
        alert("Button is clicked")
    }
    return(
        <div>
            <h1>{props.name}</h1>
            <button className="btn btn-success" onClick = {Clickme}>Click me</button>
        </div>
    )
}

export default Hello;