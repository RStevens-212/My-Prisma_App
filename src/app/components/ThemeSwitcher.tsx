'use client';
import React, { useState } from 'react';
import { IconButton } from '@mui/material';
import LightModeIcon from '@mui/icons-material/LightMode';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import Providers from '../providers';
import { useColorScheme } from '@mui/material/styles';

export default function Menu() {
    const { mode, setMode } = useColorScheme();

    const handleCLick = () => {
        const newMode = mode === 'dark' ? 'light' : 'dark';
        setMode(newMode)
    };

    return (
        <Providers>
            <IconButton onClick={handleCLick} color="inherit">
                {mode === 'dark' ? <LightModeIcon /> : <DarkModeIcon />}
            </IconButton>
        </Providers>
    );
}