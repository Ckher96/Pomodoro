import React from "react";
import TimeControls from "./TimeControls";
import PlayStop from "./PlayStop";

function Controls({isTimerRunning, setIsTimerRunning, session, setSession, playPause, focusDuration, breakDuration, changeFocusTime, changeBreakTime}){
    return (
        <>
        <TimeControls session={session} 
        focusDuration={focusDuration} 
        breakDuration={breakDuration} 
        changeBreakTime={changeBreakTime} 
        changeFocusTime={changeFocusTime} 
        />

        <PlayStop setSession={setSession} session={session} setIsTimerRunning={setIsTimerRunning} isTimerRunning={isTimerRunning} playPause={playPause} />
        </>
        
    )
}

export default Controls