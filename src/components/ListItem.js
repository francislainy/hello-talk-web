import React from 'react';
import {Link} from "react-router-dom";
import './MomentItem.css'

function ListItem({moment}) {
    return (
        <Link to={`/moment/${moment.id}`} className="Link">
            <div>
                <h3>{moment.id}</h3>
                <p>{moment.text}</p>
            </div>
        </Link>
    );
}

export default ListItem;
