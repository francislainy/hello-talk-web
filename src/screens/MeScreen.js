import React, {useEffect, useState} from 'react';
import axios from "axios";
import {GET_MOMENTS_USER} from "../api/endpoints";
import MomentTabsList from "../components/MomentTabsList";
import MomentList from "../components/MomentList";

function MeScreen() {
    const [moments, setMoments] = useState([]);
    const [error, setError] = useState('');
    const [selectedTab, setSelectedTab] = useState(0);

    const tabs = [
        {label: 'Following'},
        {label: 'Followers'},
        {label: 'Moments'},
        {label: 'Visitors'},
    ];

    const handleTabClick = (tabIndex) => {
        setSelectedTab(tabIndex);
    };

    useEffect(() => {
        const fetchMoments = () => {
            return new Promise((resolve, reject) => {

                const userId = "d3256c76-62d7-4481-9d1c-a0ccc4da380f" //todo: remove hardcoded id - 19/03/2023

                axios.get(`${GET_MOMENTS_USER}?userId=${userId}`)
                    .then(response => resolve(response.data))
                    .catch(error => {
                        reject(error)
                    });
            });
        };

        fetchMoments().then(data => {
            setMoments(data)
            setError('')
        })
            .catch(r => {
                setError('Nothing to show here')
                setMoments([])
            });
    }, [selectedTab]);

    return (
        <div>
            <h1>MeScreen</h1>
            <MomentTabsList tabs={tabs} selectedTab={selectedTab} onClick={handleTabClick}/>
            {error === '' ?
                <MomentList moments={moments}/> : <p>{error}</p>
            }
        </div>
    );
}

export default MeScreen;
