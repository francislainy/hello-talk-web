import React, {useState} from 'react';
import {useNavigate} from "react-router-dom";
import './MomentItem.css';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faHeart} from "@fortawesome/free-solid-svg-icons";
import axios from "axios";
import {USERS} from "../api/endpoints";
import {USER_ID} from "./constants";

function MomentItem({moment}) {

    const [isLiked, setIsLiked] = useState(false);
    const navigate = useNavigate();

    const toggleLike = async (event) => {
        event.stopPropagation(); // prevent event from propagating to parent element
        // make API call to toggle like status
        setIsLiked(!isLiked);

        await likeMoment();
    };

    const likeMoment = async () => {
        try {
            const userId = USER_ID
            await axios.post(`${USERS}${userId}/like/${moment.id}`);
        } catch (error) {
            console.error(error);
        }
    };

    const navigateToMoment = () => {
        navigate(`/moment/${moment.id}`);
    };

    return (
        <div className="MomentItem" onClick={navigateToMoment}>
            <div>
                <h3>{moment.id}</h3>
                <p>{moment.text}</p>
                <div onClick={toggleLike}>
                    <FontAwesomeIcon
                        icon={faHeart}
                        className={`HeartIcon ${isLiked ? 'Liked' : ''}`}
                        style={{color: isLiked ? 'red' : 'black'}}
                        onClick={toggleLike}
                    />
                </div>
                <p>{moment.numLikes}</p>
            </div>
        </div>
    );
}

export default MomentItem;
