import React, {useState} from 'react';
import MomentsTab from '../components/MomentsTab';
import VisitorsTab from "../components/VisitorsTab";
import TabsList from "../components/TabsList";
import FollowingTab from "../components/FollowingTab";
import FollowersTab from "../components/FollowersTab";
import {Button} from "@material-ui/core";
import AddMoment from "../components/AddMoment";


function MeScreen() {
    const [selectedTab, setSelectedTab] = useState(0);
    const [showAddMomentForm, setShowAddMomentForm] = useState(false);

    const tabs = [
        {label: 'Following', component: <FollowingTab/>},
        {label: 'Followers', component: <FollowersTab/>},
        {label: 'Moments', component: <MomentsTab/>},
        {label: 'Visitors', component: <VisitorsTab/>},
    ];

    const handleTabClick = (tabIndex) => {
        setSelectedTab(tabIndex);
    };

    const handleAddMomentClick = () => {
        setShowAddMomentForm(!showAddMomentForm)
    }

    const handleAddMomentSuccess = () => {
        setShowAddMomentForm(false);
    };

    return (
        <div>
            {tabs[selectedTab].label === 'Moments' ?
                <div>
                    {showAddMomentForm ?
                        <div>
                            <div style={{display: 'flex', alignItems: 'center'}}>
                                <h1>MeScreen</h1>
                                <Button variant="outlined" style={{margin: "auto"}}
                                        onClick={handleAddMomentClick}>X</Button>
                            </div>
                            <div>
                                <AddMoment onSuccess={handleAddMomentSuccess}/>
                            </div>
                        </div> :
                        <div>
                            <div style={{display: 'flex', alignItems: 'center'}}>
                                <h1>MeScreen</h1>
                                <Button variant="outlined" style={{margin: "auto"}}
                                        onClick={handleAddMomentClick}> Add
                                    moment</Button>
                            </div>
                            <TabsList tabs={tabs} selectedTab={selectedTab} onClick={handleTabClick}/>
                            {tabs[selectedTab].component}
                        </div>
                    }
                </div>
                : <div>
                    <h1>MeScreen</h1>
                    <TabsList tabs={tabs} selectedTab={selectedTab} onClick={handleTabClick}/>
                </div>}
        </div>
    );
}

export default MeScreen;