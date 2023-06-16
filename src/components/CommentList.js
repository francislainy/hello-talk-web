import React, {useEffect, useState} from 'react';
import {getCommentsApi} from "../api/api";

function CommentList({momentId}) {

    const [comments, setComments] = useState([]);
    const [error, setError] = useState('');

    useEffect(() => {
        const fetchMoments = () => {
            return new Promise((resolve, reject) => {
                getCommentsApi(momentId)
                    .then((response) => resolve(response.data))
                    .catch((error) => {
                        reject(error);
                    });
            });
        };

        fetchMoments()
            .then((data) => {
                setComments(data);
                setError('');
            })
            .catch((r) => {
                setError('Nothing to show here');
                setComments([]);
            });
    }, []);

    return <div>
        <h2>Comment List</h2>
        {comments.map(item => <div>
            <p>{item.user.name}</p>
            <p>{item.text}</p>
        </div>)}
    </div>;
}

export default CommentList;
