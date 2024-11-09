'use client';

import React, { useState } from 'react';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import IconButton from '@mui/material/IconButton';
import Tooltip from '@mui/material/Tooltip';
import PeopleIcon from '@mui/icons-material/People';
import SettingsIcon from '@mui/icons-material/Settings';
import BarChartIcon from '@mui/icons-material/BarChart';
import MenuIcon from '@mui/icons-material/Menu';
import { Box, CssBaseline, Link } from '@mui/material';
import { styled } from '@mui/system';
import NextLink from 'next/link';

const drawerWidth = 240; // Expanded width
const miniDrawerWidth = 80; // Collapsed width
const drawerBackgroundColor = "#1E88E5"; // Blue like AppBar

// Styled Drawer for background color
const StyledDrawer = styled(Drawer)({
    [`& .MuiDrawer-paper`]: {
        backgroundColor: drawerBackgroundColor,
        color: "#fff",
        boxSizing: 'border-box',
    },
});

export default function NavDrawer() {
    const [open, setOpen] = useState(false);

    const toggleDrawer = () => {
        setOpen((prevOpen) => !prevOpen);
    };

    return (
        <Box sx={{ display: 'flex' }}>
            <CssBaseline />

            {/* Toggle Button */}
            <IconButton onClick={toggleDrawer} sx={{ color: 'inherit', position: 'fixed', top: 16, left: open ? drawerWidth : miniDrawerWidth }}>
                <MenuIcon />
            </IconButton>

            {/* Drawer */}
            <StyledDrawer
                variant="permanent"
                open={open}
                sx={{
                    width: open ? drawerWidth : miniDrawerWidth,
                    transition: 'width 0.3s',
                    flexShrink: 0,
                    [`& .MuiDrawer-paper`]: {
                        width: open ? drawerWidth : miniDrawerWidth,
                        transition: 'width 0.3s',
                    },
                }}
            >
                <List>
                    {/* Users */}
                    <Tooltip title="Users" placement="right" disableHoverListener={open}>
                        <ListItem>
                            <Link href='/users' component={NextLink}>
                                <ListItemIcon>
                                    <PeopleIcon style={{ color: "#fff" }} />
                                </ListItemIcon>
                            </Link>
                            {open && <ListItemText primary="Users" />}
                        </ListItem>
                    </Tooltip>

                    {/* User Settings */}
                    <Tooltip title="User Settings" placement="right" disableHoverListener={open}>
                        <ListItem>
                            <ListItemIcon>
                                <Link href='/settings' component={NextLink}>
                                    <SettingsIcon style={{ color: "#fff" }} />
                                </Link>
                            </ListItemIcon>
                            {open && <ListItemText primary="User Settings" />}
                        </ListItem>
                    </Tooltip>

                    {/* Metrics */}
                    <Tooltip title="Metrics" placement="right" disableHoverListener={open}>
                        <ListItem>
                            <Link href='/metrics' component={NextLink}>
                                <ListItemIcon>
                                    <BarChartIcon style={{ color: "#fff" }} />
                                </ListItemIcon>
                            </Link>
                            {open && <ListItemText primary="Metrics" />}
                        </ListItem>
                    </Tooltip>
                </List>
            </StyledDrawer>
        </Box>
    );
}
