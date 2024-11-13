'use client';

import React, { useState } from 'react';
import { Drawer, List, ListItem, ListItemIcon, ListItemText, IconButton, Tooltip, Box, CssBaseline, Link, useTheme, Toolbar, Typography } from '@mui/material';
import PeopleIcon from '@mui/icons-material/People';
import SettingsIcon from '@mui/icons-material/Settings';
import BarChartIcon from '@mui/icons-material/BarChart';
import MenuIcon from '@mui/icons-material/Menu';
import AdminPanelSettingsIcon from '@mui/icons-material/AdminPanelSettings';
import { styled } from '@mui/system';
import NextLink from 'next/link';
import { usePathname } from 'next/navigation';

export default function NavDrawer() {
    const pathname = usePathname();
    const theme = useTheme();
    const iconColor = theme.palette.grey[300];
    const navigationItems = [
        { text: 'Users', href: '/users', imgSrc: <PeopleIcon htmlColor={iconColor} /> },
        { text: 'Preferences', href: '/preferences', imgSrc: <SettingsIcon htmlColor={iconColor} /> },
        { text: 'Metrics', href: '/metrics', imgSrc: <BarChartIcon htmlColor={iconColor} /> },
        { text: 'Admin', href: '/users', imgSrc: <AdminPanelSettingsIcon htmlColor={iconColor} /> },
    ]

    return (
        <Drawer variant='permanent'
            sx={{ width: 110, flexShrink: 0, '& .MuiDrawer-paper': { width: 110 } }}
        >
            <Toolbar />
            <List
                sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    height: '100%',
                    backgroundColor: theme.palette.primary.main,
                    padding: '0px'
                }}
            >
                {navigationItems.map((item, index) => (
                    <Link key={index} component={NextLink} href={item.href}>
                        <ListItem
                            sx={([{
                                display: 'flex',
                                flexDirection: 'column',
                                justifyContent: 'center',
                                alignItems: 'center',
                                height: '70px',
                                width: '100%',
                                '&:hover': {
                                    backgroundColor: theme.palette.primary.dark
                                },
                                borderLeft: item.href === pathname ? { borderLeftColor: theme.palette.secondary.main, borderLeftWidth: '4px', borderLeftStyle: 'solid' }
                                    : { borderLeftColor: 'transparent', borderLeftWidth: '4px', borderLeftStyle: 'solid' },
                                padding: '0px',
                            }, item.href === pathname ? { backgroundColor: theme.palette.primary.dark } : { backgroundColor: 'initial' }
                            ])}
                        >
                            <ListItemIcon sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', color: theme.palette.primary.contrastText }} >
                                {item.imgSrc}
                                <Typography sx={{ fontSize: '11px', textAlign: 'center', color: theme.palette.primary.contrastText, marginTop: '7px' }} >
                                    {item.text}
                                </Typography>
                            </ListItemIcon>
                        </ListItem>
                    </Link>
                ))}
            </List>
        </Drawer>
    )
}
