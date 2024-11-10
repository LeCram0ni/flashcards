import { useState } from "react"

export default function Card({ item, index }) {

    const [ showFront, setShowFront ] = useState(true)

    function handleClick() {
        setShowFront((prev) => !prev)
    }

    return (
        <>
            <div className="card" onClick={handleClick} >
                {index}
                {showFront? item.front : item.back}
            </div>
        </>
    )
}