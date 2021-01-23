import React from 'react'

function HooksApplication(props) {
    const [count, setCounter] = React.useState(props.initial)

    const incrementCounter = () => {
        setCounter(count + 1);
    }
    React.useEffect(() => {
        console.log("Component Did Mount")
    }, [])

    React.useEffect(() => {
        console.log("Component Did Update")
    })

    React.useEffect(() => {
        console.log("Component Did Update when Count Changes")
    }, [])

    return (
        <div>
            <h1>Hooks Application in Counter App</h1>
            <p>{ count }</p>
            <button onClick={incrementCounter}>Increment Count</button>
            {/* <p>https://levelup.gitconnected.com/weather-app-in-react-js-ca668ae86b14</p> */}
        </div>
    )
}

export default HooksApplication
