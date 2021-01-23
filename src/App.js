// import logo from './logo.svg';
import './App.css';
import React from 'react';
import Counter from './my_components/counter'
import FetchGithubAPI from './my_components/fetchgithubapi'

class App extends React.Component {

  render() {
    return (
      <div>
        <Counter />
        <FetchGithubAPI />
      </div>
    );
  }
}

export default App;
