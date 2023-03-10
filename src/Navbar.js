import React from 'react';
import { AppBar, Toolbar, Button } from '@material-ui/core';

function NavBar() {
    return (
        <AppBar position="static" style={{ backgroundColor: 'black' }}>
            <Toolbar>
                <Button color="inherit" href="/">Hello Talk</Button>
                <Button color="inherit" href="/moments">Moments</Button>
                <Button color="inherit" href="/connect">Connect</Button>
                <Button color="inherit" href="/learn">Learn</Button>
                <Button color="inherit" href="/me">Me</Button>
            </Toolbar>
        </AppBar>
    );
}

export default NavBar;
