import React from 'react';

function MomentItem({ moment }) {
    return (
        <div>
            <h3>{moment.title}</h3>
            <p>{moment.description}</p>
            <img src={moment.imageUrl} alt={moment.title} />
        </div>
    );
}

export default MomentItem;
