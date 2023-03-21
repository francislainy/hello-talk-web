import React, { useState } from 'react';
import { AppBar, Button, Toolbar } from '@material-ui/core';

const buttons = [
    { label: 'Hello Talk', href: '/' },
    { label: 'Moments', href: '/moments' },
    { label: 'Connect', href: '/connect' },
    { label: 'Learn', href: '/learn' },
    { label: 'Me', href: '/me' },
];

function NavBar() {
    const [activeButton, setActiveButton] = useState('');

    const handleClick = (buttonName) => {
        setActiveButton(buttonName);
    };

    return (
        <AppBar position="static" style={{ backgroundColor: 'black' }}>
            <Toolbar>
                {buttons.map((button) => (
                    <Button
                        key={button.label}
                        // todo: fix styling to appear for selected button
                        style={{
                            backgroundColor: activeButton === button.label ? 'blue' : 'inherit',
                            color: activeButton === button.label ? 'white' : 'inherit'
                        }}
                        onClick={() => handleClick(button.label)}
                        href={button.href}
                    >
                        {button.label}
                    </Button>
                ))}
            </Toolbar>
        </AppBar>
    );
}

export default NavBar;


