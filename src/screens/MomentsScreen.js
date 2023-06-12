import React, {useEffect, useState} from 'react';
import MomentList from "../components/MomentList";
import TabsList from "../components/TabsList";
import {getMomentsApi} from "../api/api";

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
                getMomentsApi(selectedTabParam)
                    .then(response => {
                        resolve(response.data)
                    })
                    .catch(error => {
                        console.log(error)
                        reject(error)
                    });
            });
        };

        fetchMoments().then(data => {
            setMoments(data)
            setError('')
        })
            .catch(r => {
                setError('Nothing to show here' + r)
                setMoments([])
            });
    }, [selectedTab]);

    return (
        <div>
            <h1>MomentsScreen</h1>
            <TabsList tabs={tabs} selectedTab={selectedTab} onClick={handleTabClick}/>
            {error === '' ?
                <MomentList moments={moments}/> : <p>{error}</p>
            }
        </div>
    );
}

export default MomentsScreen;
