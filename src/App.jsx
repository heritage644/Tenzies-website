import Die from "./components/die.jsx"
import React from "react"
import { nanoid } from "nanoid";
import Confetti from "react-confetti"
export default function App () {
    /// this is the state that has to do with switching color

   const gameWon  = () => 
 { if(newValue.every(newArray => newArray.isHeld) && newValue.every(died => died.value === newValue[0].value)) {
   return true;
}
 else {
    return false;
   }
 }


 const newRev = React.useRef(null)
    /// This s the state that has to do with the values that was generated
const [newValue, setNewValue] = React.useState(  generateNewValue());
function clickerClick() {
   setNewValue(prevValue =>
    prevValue.map(newArray => {
        if (newArray.isHeld) {
         return newArray
        }
        else {
            return {
               ...newArray,
                value: Math.ceil(Math.random()*6)
            }
        }
    })
   )
}
///this is where i generated new ten arrays 

function generateNewValue() {

const changes = new Array(10)
.fill(0)
.map(() =>( { value: Math.ceil(Math.random() * 6), 
    isHeld :false,
    id:nanoid()
}))
return changes
}
///onclick the button should change to color green 
function hold (id) {
    setNewValue(preDicedValue =>
        preDicedValue.map(died =>
            died.id===id  ? {
                ...died, 
                isHeld: !died.isHeld
            } :died
        )
    )
}
///this is the use effect that adds the dom element focus
React.useEffect (() => {
if(newValue.every(newArray => newArray.isHeld) &&
 newValue.every(died => died.value === newValue[0].value) 
    && newRev.current) {
   return newRev.current.focus()
}

},[gameWon()])

////this is the 10 die boxes
const diceValue = newValue.map ((num) => <Die 
isHeld={num.isHeld}
Value={num.value} 
key ={num.id}
hold={hold}
id={num.id}
/>

)
function startNewGame() {
    setNewValue(generateNewValue())
}
return (
    <>
<main>
   {gameWon() && <Confetti/>}
    <h1 className="third">Tenzies</h1>
    <p className="second"> Roll until all the dies are the same click each <br /> die to freeeze it at it's current value <br /> between rows</p>
 <div className="dieStyle">
     {diceValue}   
 </div>
 
 <button className="roller"
 ref={ gameWon() ? newRev: null}
  onClick={ gameWon() ? startNewGame: clickerClick}>
    {gameWon() ? "New Game": "Roll dice"}
  </button>
</main>

</>
)
}