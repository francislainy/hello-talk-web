import React, { useEffect, useState } from 'react';
import axios from 'axios';
import MomentList from "../components/MomentList";
import {GET_MOMENTS} from "../api/endpoints";

function MomentsScreen() {

    const [moments, setMoments] = useState([]);

    useEffect(() => {
        const fetchMoments = () => {
            return new Promise((resolve, reject) => {
                axios.get(GET_MOMENTS)
                    .then(response => resolve(response.data))
                    .catch(error => reject(error));
            });
        };

        fetchMoments().then(data => setMoments(data));
    }, []);


    return (
        <div>
            <h1>MomentsScreen</h1>
            <p>This is the moment page.</p>
            <MomentList moments={moments}/>
        </div>
    );
}

export default MomentsScreen;
