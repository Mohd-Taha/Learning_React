import React from 'react'
import { connect } from 'react-redux'
import { onIncrement, onDecrement } from './../my_store/actiontype'

function Counter(props) {
    console.log(props)

    return (
        <div>
            <br />
            <h1>Counter Application</h1>
            <h4>Using Redux</h4>
            <p>Count: {props.count}</p>
            <button onClick={props.increment}>Increment</button>
            <button onClick={props.decrement}>Decrement</button>
            <hr />
        </div>
    )
}

//wo function jo data write krwayega is m dispatch m hm actionpass krengy...
//wesy hm action yaha sy bhi bhejskty thy but acha ye hota ha k actions alag hn aur components alag hn...
function mapDispatchToProps(dispatch) {
    return {
        increment: () => {
            dispatch(onIncrement())
        },
        decrement: () => { dispatch(onDecrement()) }
    }
}

//poora updated store uth k yaha milyga tu hmy us sy jo jo cheezen use krni ha srf wo apny variable m
//get krengy aur yaha sy returned obj hmy props m milyga...
function mapReduxStoreToProps(state) {
    return {
        count: state.counter.count
    }
}

const myconnect = connect(mapReduxStoreToProps, mapDispatchToProps)
export default myconnect(Counter)