import React, { useState, useCallback, useEffect } from "react";
import { Lap } from "./Lap";

const formatTime = (sec: number) =>
    Math.floor(sec / 60) + ':' + ('0' + sec % 60).slice(-2);

interface StopwatchProps {
    initialSeconds: number;
}

export const Stopwatch: React.FC<StopwatchProps> = ({ initialSeconds }) => {
    const [secondsElapsed, setSecondsElapsed] = useState(initialSeconds);
    const [laps, setLaps] = useState<number[]>([]);
    const [isTimerRunning, setIsTimerRunning] = useState(false);

    useEffect(() => {
        let timer: NodeJS.Timeout
        if (isTimerRunning) {
            timer = setInterval(() => {
                setSecondsElapsed((sec) => sec + 1);
            }, 1000);
        }
        return () => clearInterval(timer);
    }, [isTimerRunning]);

    const handleStartStop = useCallback(() => {
        setIsTimerRunning(!isTimerRunning);
    }, [isTimerRunning]);

    const handleReset = useCallback(() => {
        setIsTimerRunning(false);
        setSecondsElapsed(0);
        setLaps([]);
    }, []);

    const handleLap = useCallback(() => {
        setLaps([...laps, secondsElapsed]);
    }, [laps, secondsElapsed]);

    const handleDeleteLap = useCallback((index: number) => {
        setLaps(laps.filter((_init, i) => i !== index));
    }, [laps]);

    return (
        <div className="stopwatch-container" aria-labelledby="stopwatch-label"
            role="region">
            <h1 id="stopwatch-label" className="stopwatch-timer">
                <span aria-live="polite">{formatTime(secondsElapsed)}s</span>
            </h1>
            <div className="buttons">
                <button aria-label={isTimerRunning ? "Stop the stopwatch" : "Start the stopwatch"} className="button start-stop" onClick={handleStartStop} aria-pressed={isTimerRunning}>
                    {isTimerRunning ? "Stop" : "Start"}
                </button>
                {secondsElapsed > 0 && !isTimerRunning && (
                    <button aria-label="Reset the stopwatch" className="button reset" onClick={handleReset} disabled={secondsElapsed === 0}>Reset</button>
                )}
                {secondsElapsed > 0 && isTimerRunning && (
                    <button aria-label="Record a Lap time" className="button lap" onClick={handleLap}>Lap</button>
                )}
            </div>
            {laps.length > 0 && (
                <div className="stopwatch-laps">
                    {laps.map((lap, index) => (
                        <Lap
                            key={index}
                            index={index + 1}
                            lap={lap}
                            onDelete={() => handleDeleteLap(index)}
                            formatTime={formatTime}
                        />
                    ))}
                </div>)}
        </div>
    );
};
