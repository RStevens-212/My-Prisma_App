'use client';

import React from 'react';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import Tooltip from '@mui/material/Tooltip';
import PeopleIcon from '@mui/icons-material/People';
import SettingsIcon from '@mui/icons-material/Settings';
import BarChartIcon from '@mui/icons-material/BarChart';
import { Box, CssBaseline } from '@mui/material';

const drawerWidth = 80; // Adjust width as needed

export default function MenuDrawer() {
  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <Drawer
        variant="permanent"
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          [`& .MuiDrawer-paper`]: { width: drawerWidth, boxSizing: 'border-box' },
        }}
      >
        <List>
          {/* Users */}
          <Tooltip title="Users" placement="right">
            <ListItem>
              <ListItemIcon>
                <PeopleIcon />
              </ListItemIcon>
            </ListItem>
          </Tooltip>
          
          {/* User Settings */}
          <Tooltip title="User Settings" placement="right">
            <ListItem>
              <ListItemIcon>
                <SettingsIcon />
              </ListItemIcon>
            </ListItem>
          </Tooltip>
          
          {/* Metrics */}
          <Tooltip title="Metrics" placement="right">
            <ListItem>
              <ListItemIcon>
                <BarChartIcon />
              </ListItemIcon>
            </ListItem>
          </Tooltip>
        </List>
      </Drawer>
    </Box>
  );
}
