import React from 'react';

function MomentDetailItem({moment}) {
    return <div>
        <h3>{moment.id}</h3>
        <p>{moment.text}</p>
    </div>
}

export default MomentDetailItem;
