import { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor() {
    super();

    this.state = {
      name: { firstName: 'Nick', lastName: 'Dixon' },
      company: 'Southwest Airlines',
    }
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Hi {this.state.firstName} {this.state.lastName} , I accepted my job offer from {this.state.company}
          </p>
          <button 
            onClick={() => {
              this.setState(
                () => {
                  return {
                    name: { firstName: 'white', lastName: 'lotus32' },
                  };
                },
                () => {
                  console.log(this.state);
                }
              );
            }}
          >
            Change Name
          </button>
        </header>
      </div>
    );
  }
}

export default App;
