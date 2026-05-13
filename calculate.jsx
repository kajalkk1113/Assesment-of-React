import { useState } from "react";

function Calculate(){
    const[count,setCount]=useState(0)
    const message ="Maximum Limit Reached"
    function Increase() {
        count<20?setCount(count+5):message
    }


    function Decrease() {
        count>0?setCount(count-5):setCount(0)
    }

    return(
        <div>
            <h1>{count}</h1>
            <button onClick={Increase}>
                Increase
            </button>
            <button onClick={Decrease}>
                Decrease
            </button>
        </div>
    )
}
export default Calculate;