import {useEffect, useState,useRef} from "react"

function useWordGame(startingValue = 10){
    const [timeRemaining, setTimeRemaining] = useState(startingValue)
    const [isGameRunning, setisGameRunning] = useState(false)
    const [text,setText] = useState("")
    const [wordCount,setwordCount] = useState(0)
    const inputRef = useRef(null)

    function inputValue(e){
        const textValue = e.target.value
        setText(textValue)
    }

    function checkWordCount(){
        const wordArray = text.trim().split(" ")
        return wordArray.filter((data) => data !== "").length
    }

    function startGame(){
        setisGameRunning(true)
        setTimeRemaining(startingValue)
        setText("")
        inputRef.current.disabled = false
        inputRef.current.focus()
    }

    function endGame(){
        setisGameRunning(false)
        setwordCount(checkWordCount())
    }

    useEffect(()=>{
        if (isGameRunning && timeRemaining > 0){
            setTimeout(()=>{
                setTimeRemaining(prev => prev - 1)
            },1000)
        }
        else if(timeRemaining === 0){
            endGame()
        }
    },[timeRemaining,isGameRunning])

    return {timeRemaining,isGameRunning,startGame,endGame,inputValue,inputRef,text,wordCount}
}

export default useWordGame