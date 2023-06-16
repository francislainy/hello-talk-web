import React, {useEffect, useState} from 'react';
import MomentList from '../components/MomentList';
import {getMomentsUserApi} from "../api/api";

function MomentsTab() {
    const [moments, setMoments] = useState([]);
    const [error, setError] = useState('');

    useEffect(() => {
        const fetchMoments = () => {
            return new Promise((resolve, reject) => {
                getMomentsUserApi()
                    .then((response) => resolve(response.data))
                    .catch((error) => {
                        reject(error);
                    });
            });
        };

        fetchMoments()
            .then((data) => {
                setMoments(data);
                setError('');
            })
            .catch((r) => {
                setError('Nothing to show here');
                setMoments([]);
            });
    }, []);

    return (
        <>
            {error === '' ? (
                <MomentList moments={moments}/>
            ) : (
                <p>{error}</p>
            )}
        </>
    );
}

export default MomentsTab;
