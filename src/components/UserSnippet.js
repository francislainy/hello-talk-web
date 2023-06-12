import React, {useEffect, useState} from 'react';
import './UserSnippet.css'
import {getUserApi} from "../api/api";

function UserSnippet({userId}) {

    const [userData, setUserData] = useState()

    const getUserDetail = async () => {
        try {
            const response = await getUserApi(userId);
            setUserData(response.data)
        } catch (error) {
            console.error(error);
        }
    };

    useEffect(() => {
        getUserDetail().then(() => {
            console.log("User detail retrieved successfully");
        });
    }, [userId]);


    return (
        <div className="user-profile-container">
            {userData !== undefined && (
                <>
                    <div className="user-avatar">
                        <p>{userData.name.charAt(0)}</p>
                    </div>
                    <div className="user-details">
                        <p className="user-name">{userData.name}</p>
                        <p className="user-languages">
                            {userData.nativeLanguage} &rarr; {userData.targetLanguage}
                        </p>
                    </div>
                </>
            )}
        </div>
    );

}

    export default UserSnippet;
