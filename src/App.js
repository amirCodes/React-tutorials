import React from 'react';
import JobsTable from './JobsTable';
import Form from './Form';
import './App.css';
class App extends React.Component {
    constructor(props){
        super(props)
        this.state ={
            characters: [
                {    id:1,
                    name: 'Charlie',
                    job: 'Janitor',
                  },
                  { id:2,
                    name: 'Mac',
                    job: 'Bouncer',
                  }
            ],
            data:[]
        }
    }

     // Code is invoked after the component is mounted/inserted into the DOM tree.
  componentDidMount() {
    const url =
      'https://en.wikipedia.org/w/api.php?action=opensearch&search=Seona+Dancing&format=json&origin=*'

    fetch(url)
      .then(result => result.json())
      .then(result => {
        this.setState({
          data: result,
        })
      })
  }
  removeCharacter = index => {
      const { characters } = this.state;
  
      this.setState({
          characters: characters.filter((character, i) => { 
              return i !== index;
          })
      });
  }

  handleSubmit = character => {
      this.setState({characters: [...this.state.characters, character]});
  }

  render() {
      const { characters, data } = this.state;
      console.log(data)
      return (
          <div className="container">
              <h1>React Tutorial</h1>
              <p>Add a character with a name and a job to the table.</p>
              <JobsTable
                  characterData={characters}
                  removeCharacter={this.removeCharacter}
              />
              <h3>Add New</h3>
              <Form handleSubmit={this.handleSubmit} />
          </div>
      );
  }
}

export default App;
