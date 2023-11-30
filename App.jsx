import React from "react"
import useWordGame from "./useWordGame"

export default function App(){
    const {
        timeRemaining,
        isGameRunning,
        startGame,
        inputValue,
        inputRef,
        text,wordCount
    } = useWordGame(10)

    return (
        <div className="box">
            <h2>How fast do you type?</h2>
            <textarea ref={inputRef} disabled={!isGameRunning} value={text} onChange={inputValue}/>
            <h3 className="time-remaining">{isGameRunning ? `Time remaining: ${timeRemaining}` : (!isGameRunning && timeRemaining == 0) ? "" : "Check Your Typing Speed..."}</h3>
            <button disabled={isGameRunning} onClick={startGame}>START</button>
            <h3 className="word-count">{timeRemaining === 0 ? `Your speed: ${wordCount} wpm` : ""}</h3>
            {timeRemaining === 0 && <h4 className="word-count">{
            wordCount > 50 && wordCount < 250 
            ? "Wow!! You are great" : wordCount > 30 && wordCount <= 50 
            ? "Good Speed..." : "Try More"}</h4>}
        </div>
    )
}