// // import logo from './logo.svg';
// import './App.css';
// import React from 'react';
// import Disc from './my_components/ToggleDisc';
// import Todo from './my_components/TodoApp';
// import Counter from './my_components/Counter.js';
// import ToggleTimer from './my_components/ToggleTimer'
// import GithubProfile from './my_components/GithubProfile'
// import HooksApplication from './my_components/HooksApplication.jsx'
// import {
//     BrowserRouter as Router,
//     Switch,
//     Route,
//     Link
// } from 'react-router-dom'

// class App extends React.Component {
//     constructor() {
//         super();

//         this.state = {
//             username: '',
//             datacalled: false
//             // temp: 0
//         }
//     }

//     getUserName = (event) => {
//         var newname = event.target.value
//         this.setState({
//             datacalled: false,
//             username: newname
//         })
//     }

//     fetchData = () => {
//         this.setState((prevState) => ({
//             datacalled: true
//         }))
//     }

//     render() {
//         return (
//             <Router>
//                 <div className="App">
//                     <Disc />

//                     <ul>
//                         <li>
//                             <Link to="/basic">Basic Cheezen</Link>
//                         </li>
//                         <li>
//                             <Link to="/advanced">Thory Bary Hojao</Link>
//                         </li>
//                     </ul>

//                     <Switch>

//                         <Route path="/basic">
//                             <Counter />
//                             <Todo />
//                             <ToggleTimer />
//                         </Route>

//                         <Route path="/advanced">
//                             <h1>Github User Details</h1>
//                             <p>{this.state.username}</p>
//                             <input placeholder="Enter Github Username" onChange={this.getUserName} />
//                             <br />
//                             <button onClick={this.fetchData}>Fetch Data</button>

//                             {!this.state.datacalled ? <p>No Data Called</p> : <div>
//                                 <GithubProfile name={this.state.username} />
//                             </div>}
//                         </Route>

//                         <Route>
//                             Data Not Found
//             </Route>

//                     </Switch>

//                     <HooksApplication initial={10} />

//                 </div>
//             </Router>
//         );
//     }
// }

// export default App;

// {/* <header className="App-header">
// <img src={logo} className="App-logo" alt="logo" />
// <p>
//   Edit <code>src/App.js</code> and save to reload.
// </p>
// <a
//   className="App-link"
//   href="https://reactjs.org"
//   target="_blank"
//   rel="noopener noreferrer"
// >
//   Learn React
// </a>
// </header> */}