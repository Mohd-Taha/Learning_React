import React, { Component } from 'react'

class GithubProfile extends Component {
    constructor() {
        super();

        this.state = {
            user: null
        }
    }

    componentDidMount() {
        const url = 'https://api.github.com/users/' + this.props.name;
        console.log(url)
        fetch(url)
            .then((res) => res.json())
            .then((res) => {
                this.setState({
                    user: res
                })
            })
            .catch((error) => console.log(error))
    }

    componentDidUpdate() { }

    componentWillUnmount() {
        this.setState({
            user: null
        })
    }

    render() {
        return (
            <div>
                {!this.state.user ? <p>Loading</p> : <div>
                    <h4>{ this.state.user.name }</h4>
                    <img src={ this.state.user.avatar_url } alt="Avatar"></img>
                    <p>Bio : { !this.state.user.bio ? "No Bio" : this.state.user.bio}</p>
                    <p>Company : { !this.state.user.company ? "No Company" : this.state.user.company}</p>
                    <p>{ this.state.user.created_at }</p>
                    <p>Repos Url : { !this.state.user.repos_url ? "No Public Repos" : this.state.user.repos_url}</p>
                </div>}
            </div>
        )
    }
}

export default GithubProfile
