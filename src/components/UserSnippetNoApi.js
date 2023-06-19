import React from 'react';
import './UserSnippet.css'

function UserSnippet({user, showLanguageInfo}) {
    return (
        <div className="user-profile-container">
            <div className="user-avatar">
                <p>{user.name.charAt(0)}</p>
            </div>
            <div className="user-details">
                <p className="user-name">{user.name}</p>
                {showLanguageInfo &&
                    <p className="user-languages">
                        {user.nativeLanguage} &rarr; {user.targetLanguage}
                    </p>
                }
            </div>
        </div>
    );

}

export default UserSnippet;
