import React, { Component } from 'react'

class Clicker extends Component {

  constructor(props) {
    super(props);
    this.state = {num: 1}
  }
  clicker = () => {
    const rand = Math.ceil(Math.random() * 10)
    this.setState({num: rand})
  }
  render(){
    const counter = () => {
      if(this.state.num !== 7) {
        return(
          <button onClick={this.clicker}>Click Me!</button>
        )
      } else {
        return(
          <h2>You Win!</h2>
        )
      }
    }

    return(
      <div>
        <h1>Number is: {this.state.num}</h1>
        <div>{counter()}</div>
        
      </div>
    )

  }
}

export default Clicker