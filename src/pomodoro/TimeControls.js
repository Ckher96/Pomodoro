import React from "react";
import { minutesToDuration } from "../utils/duration";

function TimeControls({session, focusDuration, breakDuration, changeBreakTime, changeFocusTime}) {
    return (
        <div className="row">
        <div className="col">
          <div className="input-group input-group-lg mb-2">
            <span className="input-group-text" data-testid="duration-focus">
              {/* TODO: Update this text to display the current focus session duration */}
              Focus Duration: {minutesToDuration(focusDuration)}
            </span>
            <div className="input-group-append">
              {/* TODO: Implement decreasing focus duration and disable during a focus or break session */}
              <button
                type="button"
                className="btn btn-secondary"
                data-testid="decrease-focus"
                onClick={changeFocusTime}
                id="decrease-focus"
                disabled={session}
              >
                <span className="oi oi-minus" id='decrease-focus-span' />
              </button>
              {/* TODO: Implement increasing focus duration and disable during a focus or break session */}
              <button
                type="button"
                className="btn btn-secondary"
                data-testid="increase-focus"
                onClick={changeFocusTime}
                id="increase-focus"
                disabled={session}
              >
                <span className="oi oi-plus" id='increase-focus-span' />
              </button>
            </div>
          </div>
        </div>
        <div className="col">
          <div className="float-right">
            <div className="input-group input-group-lg mb-2">
              <span className="input-group-text" data-testid="duration-break">
                {/* TODO: Update this text to display the current break session duration */}
                Break Duration: {minutesToDuration(breakDuration)}
              </span>
              <div className="input-group-append">
                {/* TODO: Implement decreasing break duration and disable during a focus or break session*/}
                <button
                  type="button"
                  className="btn btn-secondary"
                  data-testid="decrease-break"
                  onClick={changeBreakTime}
                  id="decrease-break"
                  disabled={session}
                >
                  <span className="oi oi-minus" id='decrease-break-span'/>
                </button>
                {/* TODO: Implement increasing break duration and disable during a focus or break session*/}
                <button
                  type="button"
                  className="btn btn-secondary"
                  data-testid="increase-break"
                  onClick={changeBreakTime}
                  id="increase-break"
                  disabled={session}
                >
                  <span className="oi oi-plus" id='increase-break-span'/>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
}

export default TimeControls