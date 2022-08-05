import React from "react"

export default function App() {
    /**
     * Challenge: Set up state to track our count (initial value is 0)
     */
    const [counter, changeCounter] = React.useState(0)
  function addOne(){
      changeCounter(counter+1)
  }
   function minusOne(){
      changeCounter(counter-1)
  }
    
    return (
        <div className="counter">
            <button className="counter--minus" onClick={minusOne}>–</button>
            <div className="counter--count">
                <h1>{counter}</h1>
            </div>
            <button className="counter--plus" onClick={addOne}>+</button>
        </div>
    )
}
