import React from 'react';
import peopleApi from './api/people.json';

import './App.scss';
import { PeopleTable } from './components/PeopleTable';
import { Person } from './Person';

interface State {
  query: string;
  people: Person[];
  sortBy: keyof Person | '';
}

class App extends React.Component<{}, State> {
  state: State = {
    query: '',
    people: [...peopleApi as Person[]],
    sortBy: '',
  };

  handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    this.setState({ query: event.target.value });
  };

  getVisiblePeople = () => {
    const { query, people, sortBy } = this.state;

    let visiblePeople = people;

    if (query) {
      visiblePeople = people
        .filter(person => person.name.toLowerCase().includes(query.toLowerCase()));
    }

    if (sortBy) {
      visiblePeople = [...visiblePeople]
        .sort((a, b) => (a[sortBy] > b[sortBy] ? 1 : -1));
    }

    return visiblePeople;
  };

  sortByBorn = () => this.setState({ sortBy: 'born' });

  addPerson = () => {
    const newPerson = {
      name: 'Ollo',
      sex: 'm',
      born: 2132,
      died: 3221,
      fatherName: 'Carel Haverbeke',
      motherName: 'Maria van Brussel',
      slug: 'ollo-infinity',
    };

    this.setState(state => (
      { people: [newPerson, ...state.people] }
    ));
  };

  render() {
    const visiblePeople = this.getVisiblePeople();

    return (
      <div className="App">
        <h1>People table</h1>

        <input
          type="text"
          value={this.state.query}
          onChange={this.handleChange}
        />

        <button
          type="button"
          onClick={this.sortByBorn}
        >
          sort by born
        </button>

        <button
          type="button"
          onClick={this.addPerson}
        >
          add person
        </button>

        {visiblePeople.length !== 0 && (
          <PeopleTable people={visiblePeople} />
        )}
      </div>
    );
  }
}

export default App;
