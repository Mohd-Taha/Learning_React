import React, { Component } from 'react'
import Timer from './Timer'

class ToggleTimer extends Component {
    constructor() {
        super();

        this.state = {
            showTimer: true
        }
    }

    togglee = () => {
        this.setState({
            showTimer: !this.state.showTimer
        })
    }

    render() {
        return (
            <div>
                <h1>Toggle Timer Application</h1>
                {/* <Timer /> */}
                {this.state.showTimer ? <Timer /> : <div />}
                <button onClick={this.togglee}>Toggle Timer</button>
            </div>
        )
    }
}

export default ToggleTimer
