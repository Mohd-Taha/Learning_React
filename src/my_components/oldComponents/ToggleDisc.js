import React from 'react';

class My_Class extends React.Component {
    constructor() {
        super();

        this.state = {
            showless: true
        };

        this.shortDesc = "Short Discription";
        this.longDesc = "Long Discription";
    }

    toggleDisc = () => {
        this.setState({
            showless: !this.state.showless
        })
    }

    render() {
        return (
            <div>
                <h1>Toggle Discription</h1>
                <h3>On Button Click</h3>
                <p>{this.state.showless === true ? this.shortDesc : this.longDesc}</p>
                <button onClick={this.toggleDisc}>Show {this.state.showless === true ? "More" : "Less"}</button>
            </div>
        )
    }
}

export default My_Class;