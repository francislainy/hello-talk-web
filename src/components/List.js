import React from 'react';
import ListItem from "./ListItem";

function List({ moments }) {
  return (
    <div>
      {moments.map((moment) => (
        <ListItem key={moment.id} moment={moment} />
      ))}
    </div>
  );
}

export default List;
