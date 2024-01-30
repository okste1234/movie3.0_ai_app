/* eslint-disable react/jsx-indent-props */
/* eslint-disable no-unused-vars */
import React from 'react';
import {
    AppBar,
    IconButton,
    Toolbar,
    Drawer,
    Button,
    Avatar,
    useMediaQuery,
} from '@mui/material';
import {
    Menu,
    AccountCircle,
    Brightness4,
    Brightness7,
} from '@mui/icons-material';
import { Link } from 'react-router-dom';

function NavBar() {
    const isMobile = useMediaQuery('(max-width : 600px)');

    return (
        <AppBar position="fixed">
            <Toolbar>
                {isMobile && (
                    <IconButton
                        color="inherit"
                        edge="start"
                        style={{ outline: 'none' }}
                        onClick={() => { }}
                        className="menuButton"
                    >
                        <Menu />
                    </IconButton>
                )}
            </Toolbar>
        </AppBar>
    );
}

export default NavBar;
