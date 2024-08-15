import React, { Component } from 'react'

export default class BoxClass extends Component {
  render() {
    let resultColor = this.props.result === "WIN" ? 'win' : this.props.result === "LOSE" ? 'lose' : this.props.result === "TIE" ? "tie" : '';
  
    console.log("resultColor   ", this.props);
    return (
        <div className={`box ${resultColor}`}>
            <h1>{this.props.title}</h1>
            <img className="item-img" src={this.props.item && this.props.item.img} alt=""/> 
            <h2>{this.props.result}</h2>
        </div>
    )
  }
}
