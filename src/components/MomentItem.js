import React, {useState} from 'react';
import {useNavigate} from "react-router-dom";
import './MomentItem.css';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faHeart} from "@fortawesome/free-solid-svg-icons";
import {USER_ID} from "./constants";
import UserSnippet from "./UserSnippet";
import {likeMomentApi} from "../api/api";

function MomentItem({moment}) {
    const [isLiked, setIsLiked] = useState(moment.likedByIds.includes(USER_ID));
    const [numLikes, setNumLikes] = useState(moment.numLikes);
    const navigate = useNavigate();

    const toggleLike = async (event) => {
        event.stopPropagation(); // prevent event from propagating to parent element

        if (moment.userCreatorId !== USER_ID) {
            setIsLiked(!isLiked);
            const deltaLikes = isLiked ? -1 : 1; // if isLiked is true, then subtract 1, otherwise add 1
            setNumLikes(numLikes + deltaLikes);

            await likeMoment();
        } else {
            alert("Users can't like their own moments");
        }
    };

    const likeMoment = async () => {
        try {
            await likeMomentApi(USER_ID, moment.id)
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
                        />
                    </div>
                    <p style={{marginLeft: "5px"}}>{numLikes}</p>
                </div>
            </div>
        </div>
    );
}

export default MomentItem;
