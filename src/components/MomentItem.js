import React, {useEffect, useState} from 'react';
import {useNavigate} from "react-router-dom";
import './MomentItem.css';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faThumbsUp, faComment} from "@fortawesome/free-solid-svg-icons";
import {USER_ID} from "./constants";
import UserSnippet from "./UserSnippet";
import {getCommentsApi, likeMomentApi} from "../api/api";
import CommentList from "./CommentList";

function MomentItem({moment}) {
    const [isLiked, setIsLiked] = useState(moment.likedByIds.includes(USER_ID));
    const [numLikes, setNumLikes] = useState(moment.numLikes);
    const [comments, setComments] = useState([]);
    const [error, setError] = useState('');
    const navigate = useNavigate();

    const navigateToMoment = () => {
        navigate(`/moment/${moment.id}`);
    };

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


    useEffect(() => {
        const fetchComments = () => {
            return new Promise((resolve, reject) => {
                getCommentsApi(moment.id)
                    .then((response) => resolve(response.data))
                    .catch((error) => {
                        reject(error);
                    });
            });
        };

        fetchComments()
            .then((data) => {
                setComments(data);
                setError('');
            })
            .catch((r) => {
                setError('Nothing to show here');
                setComments([]);
            });
    }, []);

    return (
        <div className="MomentItem" onClick={navigateToMoment}>
            <div>
                <UserSnippet userId={moment.userCreatorId}/>
                <h3>{moment.id}</h3>
                <p>{moment.text}</p>
                <div style={{display: 'flex', alignItems: 'center'}}>
                    <div className="likeSection" style={{marginRight: '10px'}}>
                        <div onClick={toggleLike}>
                            <FontAwesomeIcon
                                icon={faThumbsUp}
                                className={`FaIcon ${isLiked ? "Liked" : ""}`}
                            />
                        </div>
                        <p style={{marginLeft: "5px"}}>{numLikes}</p>
                    </div>
                    <div className="likeSection" >
                        <div>
                            <FontAwesomeIcon
                                icon={faComment}
                                className={`FaIcon`}
                            />
                        </div>
                        <p style={{marginLeft: "5px"}}>{comments.length}</p>
                    </div>
                </div>
                <CommentList comments={comments}/>
            </div>
        </div>
    );
}

export default MomentItem;
