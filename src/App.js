import { useState } from 'react';
import './App.css';
import Box from "./component/Box";

// 1. 박스 2개
// 2. 가위바위
const choice = {
  rock:{
    name:"Rock",
    img:"https://blog.kakaocdn.net/dn/bmjB2s/btqXHhp6kpG/TH14W4U612SxKo9uuR2sB0/img.png"
  },
  scissor:{
    name:"Scissor",
    img:"https://thumb.silhouette-ac.com/t/b7/b75c6e473b897538b492e18647a0e5a0_t.jpeg"    
  },
  paper:{
    name:"Paper",
    img:"https://thumb.silhouette-ac.com/t/26/2654adfd65b6ca4a8ac25a9f727d2262_t.jpeg"    
  }

}
function App() {
  const [userSelect, setUserSelect] = useState(null);
  const [computerSelect, setComputerSelect] = useState(null);

  const play=(userChoice)=>{
    setUserSelect(choice[userChoice]);
    let computerChoice = randomChoice();
    setComputerSelect(computerChoice);
  }

  const randomChoice=()=>{
    let itemArray = Object.keys(choice);  // 객체의 키값 뽑아서 array로 만들어 주는 함수
    console.log("item array: ", itemArray);
    let randomItem = Math.floor(Math.random()*itemArray.length);
    console.log("random: ", randomItem);
    let final = itemArray[randomItem];
    return choice[final];
  }

  return (
    <div>
      <div className="main">
        <Box title="You" item={userSelect}/>
        <Box title="Computer" item={computerSelect}/>
      </div>
      <div className="main">
        <button onClick={() => play("scissor")}>가위</button>
        <button onClick={() => play("rock")}>바위</button>
        <button onClick={() => play("paper")}>보</button>
      </div> 
    </div>
  );
}

export default App;
