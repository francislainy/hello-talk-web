import React from 'react';

function MomentItem({ moment }) {
    return (
        <div>
            <h3>{moment.id}</h3>
            <p>{moment.text}</p>
            <img src={moment.imageUrl} alt={moment.title} />
        </div>
    );
}

export default MomentItem;
