import React from 'react';
import UserSnippetNoApi from "./UserSnippetNoApi";
import {formatDistanceToNow} from 'date-fns';
import {useLocation} from 'react-router-dom';

function CommentList({comments}) {

    const location = useLocation();
    const showAddComment = /\/moments\/\w+/.test(location.pathname);

    function formatDate(date) {
        return formatDistanceToNow(date, {addSuffix: false});
    }

    return <div style={comments.length > 0 ? {background: '#eeeeee'} : {background: '#ffffff'}}>
        <div style={{marginLeft: "32px", marginRight: '32px'}}>
            <h5>Comments ({comments.length})</h5>
            {showAddComment && <div>Add new comment</div>}
            {comments.map(item => <div>
                <div style={{display: 'flex', alignItems: 'center'}}>
                    <UserSnippetNoApi user={item.user} showLanguageInfo={false}/>
                    <div style={{marginLeft: 'auto'}}>
                        <p>{formatDate(new Date(item.creationDate))}</p>
                    </div>
                </div>
                <p>{item.text}
                </p>
            </div>)}
        </div>
    </div>;
}

export default CommentList;
