import React, { Component } from 'react';

class Counter extends Component {
    constructor() {
        super();

        this.state = {
            count: 0
        }
    }

    onIncrement = () => {
        // const inc = this.state.count + 1;
        this.setState((prevState) => ({
            count: prevState.count + 1
        }), () => {
            // console.log(inc);
            // console.log(this.state.count);
        })
    }

    onDecrement = () => {
        // const dec = this.state.count - 1;
        this.setState((prevState) => ({
            count: prevState.count - 1
        }), () => {
            // console.log(dec);
            // console.log(this.state.count);
        })
    }

    // incByFive = () => {
    //     this.onIncrement()
    //     this.onIncrement()
    //     this.onIncrement()
    //     this.onIncrement()
    //     this.onIncrement()
    // }

    // decByFive = () => {
    //     this.onDecrement()
    //     this.onDecrement()
    //     this.onDecrement()
    //     this.onDecrement()
    //     this.onDecrement()
    // }

    render() {
        return (
            <div>
                <h1>Counter Application</h1>
                <p>Count : {this.state.count}</p>
                <button onClick={this.onIncrement}>Increment</button>
                <button onClick={this.onDecrement}>Decrement</button>
            </div>
        )
    }
}

export default Counter;