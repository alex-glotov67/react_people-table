import React from 'react';
import { Person } from '../../Person';

interface Props {
  people: Person[];
}

export const PeopleTable: React.FC<Props> = (props) => {
  const { people } = props;

  return (
    <table>
      <thead>
        <tr>
          <th>Name</th>
          <th>Sex</th>
          <th>Born</th>
          <th>Died</th>
          <th>Father name</th>
          <th>Mother name</th>
          <th>Slug</th>
        </tr>
      </thead>
      <tbody>
        {people.map(person => (
          <tr key={person.name}>
            <td>{person.name}</td>
            <td>{person.sex}</td>
            <td>{person.born}</td>
            <td>{person.died}</td>
            <td>{person.fatherName}</td>
            <td>{person.motherName}</td>
            <td>{person.slug}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};
