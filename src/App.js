import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {
  state = {
    persons: [
      { id: "123", name: "Max", age: 28},
      { id: "456", name: "Ryan", age: 34},
      { id: "789", name: "Sunny", age: 23}
    ]
  }


  nameChangedHandler = ( event, id ) => {

    const personIndex = this.state.persons.findIndex(p => {
      return p.id === id;
    });

    const person = {
      ...this.state.persons[personIndex]
    };

    person.name = event.target.value;

    const persons = [...this.state.persons];
    persons[personIndex] = person;

    this.setState( { persons: persons } )
  }

  deletePersonHandler = (personIndex) => {
    // const persons = this.state.persons.slice();
    const persons = [...this.state.persons]
    persons.splice(personIndex, 1);
    this.setState({persons: persons})
  }

  togglePersonsHandler = () => {
    const doesShow = this.state.showPersons;
    this.setState({showPersons: !doesShow});
  }

  render() {

    const style = {
      backgroundColor: 'green',
      color: 'white',
      font: 'inherit',
      border: '1px solid blue',
      padding: '8px',
      cursor: 'pointer'
    };

    let persons = null;

    if (this.state.showPersons) {
      persons = (
          <div>
            {this.state.persons.map((person, index) => {
              return <Person 
                click = {() => this.deletePersonHandler(index)}
                name = {person.name} 
                age = {person.age}
                key = {person.id}
                changed = {(event) => this.nameChangedHandler(event, person.id)} />
            })}
          
          </div> 
      );

      style.backgroundColor = 'red';

    }

    //the 'red, bold' part is referring to the .red & .bold classes in the app.css file
    // let classes = ['red', 'bold'].join(' ');
    const classes = [];
    if (this.state.persons.length <= 2) {
      classes.push('red'); // classes = red
    }
    if (this.state.persons.length <= 1) {
      classes.push('bold'); // classes = red, bold
    }


    return (
      // wrapping whole app with StyleRoot per Radium. This allows us to use the @media query

      <div className="App">
        <h1>Hi, I'm a React App</h1>
        <p className = {classes.join(' ')}>This is really working!</p>
        <button
          style={style}
          onClick = {this.togglePersonsHandler}>Toggle People</button>
           
        {persons}
      </div>

    );

    // return React.createElement("div", {className: "App"}, React.createElement("h1", null, "Hi, I\'m a React App!!!"))
  }
}

export default App;
