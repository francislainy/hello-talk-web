import React, {useState} from 'react';
import MomentsTab from '../components/MomentsTab';
import VisitorsTab from "../components/VisitorsTab";
import TabsList from "../components/TabsList";
import FollowingTab from "../components/FollowingTab";
import FollowersTab from "../components/FollowersTab";


function MeScreen() {
    const [selectedTab, setSelectedTab] = useState(0);

    const tabs = [
        {label: 'Following', component: <FollowingTab/>},
        {label: 'Followers', component: <FollowersTab/>},
        {label: 'Moments', component: <MomentsTab/>},
        {label: 'Visitors', component: <VisitorsTab/>},
    ];

    const handleTabClick = (tabIndex) => {
        setSelectedTab(tabIndex);
    };

    return (
        <div>
            <h1>MeScreen</h1>
            <TabsList tabs={tabs} selectedTab={selectedTab} onClick={handleTabClick}/>
            {tabs[selectedTab].component}
        </div>
    );
}

export default MeScreen;
