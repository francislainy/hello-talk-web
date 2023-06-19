import React from 'react';
import UserSnippetNoApi from "./UserSnippetNoApi";
import {formatDistanceToNow} from 'date-fns';

function CommentList({comments}) {

    function formatDate(date) {
        return formatDistanceToNow(date, { addSuffix: false });
    }

    return <div>
        <h5>Comments ({comments.length})</h5>
        {comments.map(item => <div>
            <div style={{display: 'flex', alignItems: 'center'}}>
                <UserSnippetNoApi user={item.user} showLanguageInfo={false}/>
                <div style={{ marginLeft: 'auto' }}>
                    <p>{formatDate(new Date(item.creationDate))}</p>
                </div>
            </div>
            <p>{item.text}
            </p>
        </div>)}
    </div>;
}

export default CommentList;
