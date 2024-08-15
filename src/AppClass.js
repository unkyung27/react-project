import React, { Component } from 'react'
import './App.css';
import BoxClass from "./component/BoxClass"

const choice = {
    rock:{
      name:"Rock",
      img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRrhBKbtiJuOFPu4sVjkTGX1ecuwt6L3Q6IQg&s", 
    //   alt: "r"
    },
    scissor:{
      name:"Scissor",
      img:"https://thumb.silhouette-ac.com/t/b7/b75c6e473b897538b492e18647a0e5a0_t.jpeg", 
    //   alt: "s" 
    },
    paper:{
      name:"Paper",
      img:"https://thumb.silhouette-ac.com/t/26/2654adfd65b6ca4a8ac25a9f727d2262_t.jpeg", 
    //   alt: "p" 
    } 
}

export default class AppClass extends Component {  
    constructor(props){
        super(props)
        this.state={
            userSelect: null,
            computerSelect: null,
            result: null,
            computerResult: null
        }
    }
    
    
    play=(img)=>{
        // this.setState({userSelect: this.state.userSelect
        //             , computerSelect: this.state.computerSelect
        //             , result: this.state.result
        //             , computerResult: this.state.computerResult
        // })
        // this.setState({userSelect: this.state.userSelect = this.state.choice[userChoice]
        //             , computerSelect: this.state.computerSelect = this.randomChoice()
        //             , result: this.state.result = this.judgement(this.state.userSelect, this.state.computerSelect)
        //             , computerResult: this.state.resultt === "TIE" ? "TIE" : this.state.result === "WIN" ? "LOSE" : "WIN"
        // })

        const userChoice = choice[img];
        const computerChoice = this.randomChoice();
        const userResult = this.judgement(userChoice, computerChoice);
        const computerResult = userResult === "TIE" ? "TIE" : userResult === "WIN" ? "LOSE" : "WIN";
        
        this.setState({
                userSelect: userChoice
                , computerSelect: computerChoice
                , result: userResult
                , computerResult: computerResult
        });
      }
    
      judgement = (user, computer) => {
        // console.log("user", user, "computer", computer);
        if(user.name === computer.name) {
          return "TIE";
        }else if(user.name === "Rock") {
          return computer.name === "Scissor" ? "WIN" : "LOSE";
        }else if(user.name === "Paper") {
          return computer.name === "Rock" ? "WIN" : "LOSE";
        }else if(user.name === "Scissor") {
          return computer.name === "Paper" ? "WIN" : "LOSE";
        }
      }
    
      randomChoice=()=>{
        const itemArray = Object.keys(choice);  // 객체의 키값을 배열로 만듦
        const randomItem = Math.floor(Math.random() * itemArray.length);
        const finalChoice = itemArray[randomItem];
        return choice[finalChoice];
      }
  
    render() {
        return (
            <div>
            <div className="main">
                <BoxClass title="You" item={this.state.userSelect} result={this.state.result}/>
                <BoxClass title="Computer" item={this.state.computerSelect} result={this.state.computerResult}/>
            </div>
            <div className="main">
                <button onClick={() => this.play("scissor")}>가위</button>
                <button onClick={() => this.play("rock")}>바위</button>
                <button onClick={() => this.play("paper")}>보</button>
            </div> 
            </div>
        )
    }
}
