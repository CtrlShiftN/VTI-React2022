import { useState } from "react"

export default function ClickCount() {
    const [count, setCount] = useState(0);
    let increaseByOne = () => {
        setCount(count + 1);
    }
    return (
        <div className="container pt-5">
            <span>{count}</span>
            {/* <button onClick={() => { setCount(count + 1) }}>Increase by one</button> */}
            <button onClick={increaseByOne}>Increase by one</button>
        </div>
    )
}