import React, {Component} from 'react';

class MyClass extends Component {

    // clicked() {
    //     alert('Class componenet clicked')
    // }
    render() {
        return(
            <div>
                <h1>{this.props.email}</h1>
                <button className='btn btn-primary' onClick={this.props.myclick}>Click</button>
            </div>
        )
    }
}

export default MyClass;