// Please detail what is wrong with the below code, and why.Also where applicable, mention what
// you would do differently.
// ---

//////////////////////////////////////////////////////////////
// NOTE: I is for issue, W is for why, and Todo is what to do differently
//////////////////////////////////////////////////////////////

import * as React from "react";
import * as ReactDOM from "react-dom";
import { Component, ClassAttributes } from "react";
// I: line 9 and line 11 should be merged for imports. ClassAttributes is not needed in modern react, the focus is now on functional component with hooks.
// W: Both imports are from 'react', and class component usage in react is outdated.
// Todo: Remove the react imports.

// I: function naming could be better.
// W: For better clarity, and keeping it simple
// Todo: Change name from formattedSeconds to formatTime
const formattedSeconds = (sec: number) =>
    Math.floor(sec / 60) + ':' + ('0' + sec % 60).slice(-2);

// I: Again classAttributes is unnecessary and should be removed.
// W: React's move to functional components
// Todo: use interface only - interface StopwatchProps
interface StopwatchProps extends ClassAttributes<Stopwatch> {
    initialSeconds: number;
}

// I: a) Using 'any' defeats having a typed codebase. b) Managing states in class components is more prone to errors than in functional components
// W: a) any allows for all types, which can lead to errors. b) this.state is vague as oppposed to hooks in functional components.
// Todo: a) Avoid 'any' and use proper types. b) move laps into this.state for consistency but for modern react, use useState - hooks.
class Stopwatch extends Component<StopwatchProps, any> {
    incrementer: any
    laps: any[]
    constructor(props: StopwatchProps) {
        super(props);
        this.state = {
            secondsElapsed: props.initialSeconds,
            lastClearedIncrementer: null,
        }
        this.laps = [];
    }

    // I: a) The function doesn't bind this.
    // W: a) Can cause errors unless handleStartClick is bound manually (or converted to an arrow function).
    // Todo: make modifications to handleStartClick
    handleStartClick() {
        this.incrementer = setInterval(() =>
            this.setState({
                secondsElapsed: this.state.secondsElapsed + 1,
            }), 1000);
    }

    // I: a) lastClearedIncrementer's storage in the state isn't necessary.
    handleStopClick() {
        clearInterval(this.incrementer);
        this.setState({
            lastClearedIncrementer: this.incrementer,
        });
    }

    // I: a) this.laps = [] outside of state isnt optimal for reactivity in react
    // W: a) Since setstate handles all the states, considering the laps array isnt stored in the state, it would lead to inconsistencies.
    // Todo: move the laps array to the state. 
    handleResetClick() {
        clearInterval(this.incrementer);
        this.laps = [],
            this.setState({
                secondsElapsed: 0,
            });
    }

    // I: a) this forceUpdate() is not needed anymore in modern react
    // W: a) It forces re-rendering without updating the state.
    // Todo: It should be removed 
    handleLabClick() {
        this.laps = this.laps.concat([this.state.secondsElapsed]);
        this.forceUpdate();
    }

    // I: a) handleDeleteClick changes the laps array, which can lead to bugs with React’s state management system. State should be immutable
    // W: a) It can lead to bugs with React’s state management system.
    // Todo: use filter instead 
    handleDeleteClick(index: number) {
        return () => this.laps.splice(index, 1);
    }

    // I: a) Buttons logic is complex, b) Lap's key shouldnt be just a numerical index.
    // W: a) The key should be more unique. Eg `lap-{index}`
    // Todo: Simplify the buttons logic 
    render() {
        const {
            secondsElapsed,
            lastClearedIncrementer,
        } = this.state;
        return (
            <div className="stopwatch">
                <h1 className="stopwatch-timer">{formattedSeconds(secondsElapsed)}</h1>
                {/* buttons should have better accessibility */}
                {(secondsElapsed === 0 || this.incrementer === lastClearedIncrementer
                    ? <button type="button" className="start-btn"
                        onClick={this.handleStartClick}>start</button>
                    : <button type="button" className="stop-btn"
                        onClick={this.handleStopClick}>stop</button>
                )}
                {(secondsElapsed !== 0 && this.incrementer !== lastClearedIncrementer
                    ? <button type="button" onClick={this.handleLabClick}>lap</button>
                    : null
                )}
                {(secondsElapsed !== 0 && this.incrementer === lastClearedIncrementer
                    ? <button type="button" onClick={this.handleResetClick}>reset</button>
                    : null
                )}
                <div className="stopwatch-laps">
                    {this.laps && this.laps.map((lap, i) =>
                        <Lap index={i + 1} lap={lap} onDelete={this.handleDeleteClick(i)} />)}
                </div>
            </div>
        );
    }
}

// I: a) Key prop shouldn't be inside the div child. b) Lap component shouldnt be in this same file, for seperation of concerns. Each file should do one thing
// W: a) It is irrelevant there.
// Todo: a) remove the key attribute from the div. let it be passed in the parent. b) Move the Lap component to a seperate file 
const Lap = (props: { index: number, lap: number, onDelete: () => {} }) => (
    <div key={props.index} className="stopwatch-lap">
        <strong>{props.index}</strong>/ {formattedSeconds(props.lap)} <button
            onClick={props.onDelete} > X </button>
    </div>
);

// I: a) syntax changes with reactDOM in React 18+
// W: a) With React's advancement, we now use ReactDOM.creatRoot() as opposed to ReactDOM.render()
// Todo: use ReactDOM.createRoot()
ReactDOM.render(
    <Stopwatch initialSeconds={0} />,
    document.getElementById("content"),
);