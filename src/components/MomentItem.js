import React, {useState} from 'react';
import {useNavigate} from "react-router-dom";
import './MomentItem.css';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faHeart} from "@fortawesome/free-solid-svg-icons";
import axios from "axios";
import {USERS} from "../api/endpoints";
import {USER_ID} from "./constants";
import UserSnippet from "./UserSnippet";

function MomentItem({moment}) {

    const [isLiked, setIsLiked] = useState(false);
    const navigate = useNavigate();

    const toggleLike = async (event) => {
        event.stopPropagation(); // prevent event from propagating to parent element
        // make API call to toggle like status

        if (moment.userCreatorId !== USER_ID) {
            setIsLiked(!isLiked);

            await likeMoment();
        } else {
            alert("Users can't like their own moments")
        }
    };

    const likeMoment = async () => {
        try {
            await axios.post(`${USERS}${USER_ID}/like/${moment.id}`);
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
                <UserSnippet userId={moment.userCreatorId}/>
                <h3>{moment.id}</h3>
                <p>{moment.text}</p>
                <div className="likeSection">
                    <div onClick={toggleLike}>
                        <FontAwesomeIcon
                            icon={faHeart}
                            className={`HeartIcon ${isLiked ? "Liked" : ""}`}
                            onClick={toggleLike}
                        />
                    </div>
                    <p style={{marginLeft: "5px"}}>{moment.numLikes}</p>
                </div>
            </div>
        </div>
    );
}

export default MomentItem;
