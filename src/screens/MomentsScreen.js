import React, {useEffect, useState} from 'react';
import axios from 'axios';
import MomentList from "../components/MomentList";
import {GET_MOMENTS} from "../api/endpoints";
import MomentTabsList from "../components/MomentTabsList";

function MomentsScreen() {
    const [moments, setMoments] = useState([]);
    const [error, setError] = useState('');
    const [selectedTab, setSelectedTab] = useState(0);

    const tabs = [
        {label: 'All', param: ''},
        {label: 'Nearby', param: 'nearby'},
        {label: 'Classmates', param: 'classmates'},
        {label: 'Learn', param: 'learn'},
        {label: 'Help Others', param: 'help'},
        {label: 'Following', param: 'following'},
        {label: 'Voice', param: 'voice'}
    ];

    const handleTabClick = (tabIndex) => {
        setSelectedTab(tabIndex);
    };

    const getSelectedTabParam = () => {
        const tab = tabs[selectedTab];
        return tab.param;
    };

    useEffect(() => {
        const fetchMoments = () => {
            return new Promise((resolve, reject) => {
                const selectedTabParam = getSelectedTabParam();
                axios.get(`${GET_MOMENTS}${selectedTabParam}`)
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
            <h1>MomentsScreen</h1>
            <MomentTabsList tabs={tabs} selectedTab={selectedTab} onClick={handleTabClick}/>
            {error === '' ?
                <MomentList moments={moments}/> : <p>{error}</p>
            }
        </div>
    );
}

export default MomentsScreen;
