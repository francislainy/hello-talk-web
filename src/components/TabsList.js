import {Tab, Tabs} from "@material-ui/core";

function TabsList({tabs, selectedTab, onClick}) {

    const handleChange = (event, newValue) => {
        onClick(newValue);
    };

    return (
        <Tabs value={selectedTab} onChange={handleChange} textColor="secondary">
            {tabs.map((tab, index) => (
                <Tab key={index} label={tab.label}/>
            ))}
        </Tabs>
    );
}

export default TabsList