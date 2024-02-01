import React, { Component } from 'react'


class Form extends Component {

  constructor(props) {
    super(props)

    this.state = {
      username:'',
      password:'',
      posts:[]
    }
  }

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/posts')
    .then(response => response.json())
    .then(data => this.setState({posts:data}))
  }

  render() {
    const {posts} = this.state
    return (
      <div>
        <input type = "text" placeholder="Enter Your Username" className="form-control"/>
        <button className='btn btn-success'>Submit</button>

        {posts.map(post => 
          
          <h2 key = {post.id}>{post.title}</h2>

        )}

      </div>
    )
  }
}

export default Form;