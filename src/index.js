import React from "react";
import ReactDOM from "react-dom";

import "./styles.css";

function TempsDeSession(props) {
  const minuteSession = props.minuteSession;
  const sessionIsOn = props.sessionIsOn;

  return (
    <div>
      <div id="session-label">
        <button
          id="session-decrement"
          className={sessionIsOn ? "bouton-session" : "bouton-break"}
          onClick={props.onSessionDecrementClick}
        >
          -
        </button>

        <p id="session-length">{minuteSession}</p>
        <button
          id="session-increment"
          className={sessionIsOn ? "bouton-session" : "bouton-break"}
          onClick={props.onSessionIncrementClick}
        >
          +
        </button>
      </div>
      <p>Session time</p>
    </div>
  );
}

function TempsDeBreak(props) {
  const minuteBreak = props.minuteBreak;
  const sessionIsOn = props.sessionIsOn;

  return (
    <div>
      <div id="break-label">
        <button
          id="break-decrement"
          className={sessionIsOn ? "bouton-session" : "bouton-break"}
          onClick={props.onBreakDecrementClick}
        >
          -
        </button>
        <p id="break-length">{minuteBreak}</p>
        <button
          id="break-increment"
          className={sessionIsOn ? "bouton-session" : "bouton-break"}
          onClick={props.onBreakIncrementClick}
        >
          +
        </button>
      </div>
      <p>Break time</p>
    </div>
  );
}

function transformTimer(timer) {
  var min = Math.floor(timer / 60);
  var sec = Math.floor(timer % 60);

  if (sec < 10) {
    sec = "0" + sec;
  }

  if (min < 10) {
    min = "0" + min;
  }

  return min + ":" + sec;
}

function Title(props) {
  const sessionIsOn = props.sessionIsOn;
  return (
    <div id="title" className={sessionIsOn ? "title-session" : "title-break"}>
      <h1
        id="timer-label"
        className={sessionIsOn ? "timerlabel-session" : "timerlabel-break"}
      >
        {sessionIsOn ? "Session" : "Break"}
      </h1>
    </div>
  );
}

function AffichageTimer(props) {
  const timer = props.timer;
  const sessionIsOn = props.sessionIsOn;

  return (
    <div>
      <div
        id="time-left"
        className={sessionIsOn ? "timeLeft-session" : "timeLeft-break"}
      >
        {transformTimer(timer)}
        <audio
          id="beep"
          src="http://dw.convertfiles.com/files/0235319001574428911/alarm_clock.wav"
        />
      </div>
    </div>
  );
}

function StartStop(props) {
  const isPlaying = props.isPlaying;
  const sessionIsOn = props.sessionIsOn;
  return (
    <div>
      {sessionIsOn ? (
        <button id="start_stop" onClick={props.togglePlay}>
          <audio
            id="bip"
            src="http://dw.convertfiles.com/files/0524081001574429628/beep_short.wav"
          />
          {!isPlaying ? (
            <div>
              <img
                className="show"
                alt="start_button"
                src="https://drive.google.com/uc?id=1COCTp8iBioOYebLzmwlOYIU-nEe-q_e_"
              />
              <img
                alt="stop_button"
                className="hide"
                src="https://drive.google.com/uc?id=1BE6U5t84ciDc9cQAsbMUMEuiwXq4D2KC"
              />
            </div>
          ) : (
            <div>
              <img
                className="hide"
                alt="start_button"
                src="https://drive.google.com/uc?id=1COCTp8iBioOYebLzmwlOYIU-nEe-q_e_"
              />
              <img
                alt="stop_button"
                className="show"
                src="https://drive.google.com/uc?id=1BE6U5t84ciDc9cQAsbMUMEuiwXq4D2KC"
              />
            </div>
          )}
        </button>
      ) : (
        <button id="start_stop" onClick={props.togglePlay}>
          <audio
            id="bip"
            src="http://dw.convertfiles.com/files/0524081001574429628/beep_short.wav"
          />
          {!isPlaying ? (
            <div>
              <img
                alt="start_button"
                className="show"
                src="https://drive.google.com/uc?id=1xNz9f15RjC0R7wicJAaMLiAaCt065NUP"
              />
              <img
                alt="stop_button"
                className="hide"
                src="https://drive.google.com/uc?id=1KDBmPZ5x3l02eb2UN0qwNgfnas84Iuwl"
              />
            </div>
          ) : (
            <div>
              <img
                alt="start_button"
                className="hide"
                src="https://drive.google.com/uc?id=1xNz9f15RjC0R7wicJAaMLiAaCt065NUP"
              />
              <img
                alt="stop_button"
                className="show"
                src="https://drive.google.com/uc?id=1KDBmPZ5x3l02eb2UN0qwNgfnas84Iuwl"
              />
            </div>
          )}
        </button>
      )}
    </div>
  );
}

function Reset(props) {
  const sessionIsOn = props.sessionIsOn;
  return (
    <div>
      <button id="reset" onClick={props.clear}>
        {sessionIsOn ? (
          <div>
            <img
              className="show"
              alt="reset_button"
              src="https://drive.google.com/uc?id=1F6sBPm4p7PgSf13sHpCxrRJsxncwv3ZS"
            />
            <img
              className="hide"
              alt="reset_button"
              src="https://drive.google.com/uc?id=1evT-X3FBZkSd1i3uJenZ0l4vfhLr3VsL"
            />
          </div>
        ) : (
          <div>
            <img
              className="hide"
              alt="reset_button"
              src="https://drive.google.com/uc?id=1F6sBPm4p7PgSf13sHpCxrRJsxncwv3ZS"
            />
            <img
              className="show"
              alt="reset_button"
              src="https://drive.google.com/uc?id=1evT-X3FBZkSd1i3uJenZ0l4vfhLr3VsL"
            />
          </div>
        )}
      </button>
    </div>
  );
}

function Clock() {
  const [minuteSession, setMinuteSession] = React.useState(25);
  const [minuteBreak, setMinuteBreak] = React.useState(5);
  const [timer, setTimer] = React.useState(minuteSession * 60);
  const [isPlaying, setIsPlaying] = React.useState(false);
  const [sessionIsOn, setSessionIsOn] = React.useState(true);

  function handleSessionIncrementClick() {
    setMinuteSession(minuteSession + 1);

    if (minuteSession >= 60) {
      setMinuteSession(60);
    }
    setTimer(timer + 60);
    if (timer >= 3600) {
      setTimer(3600);
    }
  }

  function handleSessionDecrementClick() {
    setMinuteSession(minuteSession - 1);
    if (minuteSession <= 1) {
      setMinuteSession(1);
    }
    setTimer(timer - 60);
    if (timer <= 60) {
      setTimer(60);
    }
  }

  function handleBreakIncrementClick() {
    setMinuteBreak(minuteBreak + 1);
    if (minuteBreak >= 60) {
      setMinuteBreak(60);
    }
  }

  function handleBreakDecrementClick() {
    setMinuteBreak(minuteBreak - 1);
    if (minuteBreak <= 1) {
      setMinuteBreak(1);
    }
  }

  function togglePlay() {
    setIsPlaying(!isPlaying);
    const bip = document.getElementById("bip");
    bip.play();
    bip.volume = 0;
  }

  React.useEffect(() => {
    let interval = null;
    if (isPlaying) {
      interval = setInterval(() => {
        setTimer(t => t - 1);
        if (sessionIsOn) {
          sessionTime();
        } else {
          breakTime();
        }
      }, 1000);
    } else if (!isPlaying) {
      clearInterval(interval);
    }
    return () => clearInterval(interval);
  });

  function sessionTime() {
    if (timer <= 0) {
      setSessionIsOn(false);
      setTimer(minuteBreak * 60);
    }
  }

  function breakTime() {
    if (timer <= 0) {
      setSessionIsOn(true);
      setTimer(minuteSession * 60);
    }
  }

  React.useEffect(() => {
    const audio = document.getElementById("beep");
    if (timer === 0) {
      audio.play();
    }
  }, [timer]);

  function clear() {
    document.getElementById("beep").pause();
    document.getElementById("beep").currentTime = 0;
    setMinuteSession(25);
    setTimer(10 * 60); // timer = 25min
    setMinuteBreak(5);
    setIsPlaying(false);
    setSessionIsOn(true);
  }

  return (
    <div>
      <div
        id="wrapper"
        className={sessionIsOn ? "wrapper-session" : "wrapper-break"}
      >
        <div id="container">
          <Title sessionIsOn={sessionIsOn} />
          <AffichageTimer
            timer={timer}
            setTimer={setTimer}
            minuteSession={minuteSession}
            sessionIsOn={sessionIsOn}
          />
          <div id="play">
            <StartStop
              timer={timer}
              setTimer={setTimer}
              minuteSession={minuteSession}
              togglePlay={togglePlay}
              isPlaying={isPlaying}
              sessionIsOn={sessionIsOn}
            />
            <Reset clear={clear} sessionIsOn={sessionIsOn} />
          </div>
          <div id="setTimer">
            <TempsDeSession
              minuteSession={minuteSession}
              onSessionIncrementClick={handleSessionIncrementClick}
              onSessionDecrementClick={handleSessionDecrementClick}
              sessionIsOn={sessionIsOn}
            />
            <TempsDeBreak
              minuteBreak={minuteBreak}
              onBreakIncrementClick={handleBreakIncrementClick}
              onBreakDecrementClick={handleBreakDecrementClick}
              sessionIsOn={sessionIsOn}
            />
          </div>

          <h1 id="logo" className={sessionIsOn ? "logo-session" : "logo-break"}>
            pomodoro clock
          </h1>
        </div>
      </div>
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<Clock />, rootElement);
