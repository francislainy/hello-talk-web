function MomentTabsList({tabs, selectedTab, onClick}) {
    const handleClick = (index) => {
        onClick(index);
    };

    return (
        <div>
            {tabs.map((tab, index) => (
                <button
                    key={index}
                    onClick={() => handleClick(index)}
                    style={{
                        backgroundColor: selectedTab === index ? 'blue' : 'white',
                        color: selectedTab === index ? 'white' : 'black',
                    }}
                >
                    {tab.label}
                </button>
            ))}
        </div>
    );
}

export default MomentTabsList