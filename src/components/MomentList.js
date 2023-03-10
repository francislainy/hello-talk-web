import React from 'react';
import MomentItem from './MomentItem';

function MomentList({ moments }) {
  return (
    <div>
      {moments.map((moment) => (
        <MomentItem key={moment.id} moment={moment} />
      ))}
    </div>
  );
}

export default MomentList;
