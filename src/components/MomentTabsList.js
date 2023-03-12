import {Tab, Tabs} from "@material-ui/core";

function MomentTabsList({tabs, selectedTab, onClick}) {

    const handleChange = (event, newValue) => {
        onClick(newValue);
    };

    return (
        <Tabs value={selectedTab} onChange={handleChange}>
            {tabs.map((tab, index) => (
                <Tab key={index} label={tab.label} />
            ))}
        </Tabs>
    );
}

export default MomentTabsList