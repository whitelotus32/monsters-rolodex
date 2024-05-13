import { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor() {
    super();

    this.state = {
      monsters: [
        {
          name: 'Kurama',
          id: '1',
        },
        {
          name: 'Itachi',
          id: '2',
        },
        {
          name: 'Jupi',
          id: '3',
        }
      ]
    };
  }

  render() {
    return <div className="App">
      {
        this.state.monsters.map((monster) => {
          return (
            <div key={monster.id}>
              <h1>{monster.name}</h1>
            </div>
          );
        })
      }
    </div>
  }
}

export default App;
