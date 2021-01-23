import { useState } from 'react'
import { connect } from 'react-redux'
import { onFetchUser } from '../my_store/actiontype'


//hmy usestate ki zaroorat is lye ha coz input m userName aana ha wrna redux variable k lye nh hoti like counter application
function FetchGithubAPI(props) {
    console.log(props)

    const [user, updateUser] = useState("")
    const inputChanged = (event) => {
        updateUser(event.target.value)
    }

    const getUserFromAPI = () => {
        props.getGithubUser(user)
    }

    const getContent = () => {
        if(props.loading) {
            return <p>Loading ...</p>;
        } else if (props.userdata) {
            return <p>User: {props.userdata.id}</p>;
        } else {
            return <p>Click Button to Fetch Data</p>
        }
    }

    return (
        <div>
            <br />
            <h1>Fetching Github API Application</h1>
            <h4>Using Redux</h4>
            <input type="text" onChange={inputChanged} />
            <button onClick={getUserFromAPI}> Click Me</button>

            {getContent()}
            <hr />
        </div>
    )
}

const mapDispatchToProps = (dispatch) => {
    return {
        getGithubUser: (userName) => {
            dispatch(onFetchUser(userName))
        }
    }
}

const mapReduxStoreToProps = (state) => {
    return {
        userdata: state.fetchapi.user,
        loading: state.fetchapi.loading
    }
}

const myconnect = connect(mapReduxStoreToProps, mapDispatchToProps)
export default myconnect(FetchGithubAPI)