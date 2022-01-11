import React from "react"

function ProgressBar({session, focusDuration, breakDuration}) {
    let total = 0
    session.label === 'Focusing' ? total = focusDuration * 60 : total = breakDuration * 60
    const percent = () => (((total - session.timeRemaining) / total) * 100)

    return (
        <>
        <div className="row mb-2">
          <div className="col">
            <div className="progress" style={{ height: "20px" }}>
              <div
                className="progress-bar"
                role="progressbar"
                aria-valuemin="0"
                aria-valuemax="100"
                aria-valuenow= {percent()} // TODO: Increase aria-valuenow as elapsed time increases
                style={{ width: percent() + '%'}} // TODO: Increase width % as elapsed time increases
              />
            </div>
          </div>
        </div>
        </>
        
    )
    
}

export default ProgressBar
