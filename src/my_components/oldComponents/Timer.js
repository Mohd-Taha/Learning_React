import React, { Component } from 'react'

class Timer extends Component {
    constructor() {
        super();

        this.state = {
            time: new Date()
        }
        
        this.interval = 0;
    }

    componentDidMount() {
        this.startTime();
    }

    componentDidUpdate() {

    }

    componentWillUnmount() {
        clearInterval(this.interval);
    }

    startTime = () => {
        this.interval = setInterval(() => {
            this.setState({
                time: new Date()
            })
        }, 1000)
    }

    render() {
        return (
            <div>
                <p>{this.state.time.toString()}</p>                
            </div>
        )
    }
}

export default Timer
