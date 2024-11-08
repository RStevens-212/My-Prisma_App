// providers.tsx
'use client';

import React, { useMemo } from 'react';
import { AppProvider as ToolpadAppProvider } from '@toolpad/core/nextjs';
import { AppRouterCacheProvider } from '@mui/material-nextjs/v14-appRouter';
import { ThemeProvider, CssBaseline } from '@mui/material';
import { lightTheme, darkTheme } from '../types/theme';

export default function Providers({ children, mode }: { children: React.ReactNode; mode: 'light' | 'dark' }) {
    const theme = useMemo(() => (mode === 'dark' ? darkTheme : lightTheme), [mode]);

    return (
        <AppRouterCacheProvider>
            <ThemeProvider theme={theme}>
                <CssBaseline />
                <ToolpadAppProvider theme={theme}>
                    {children}
                </ToolpadAppProvider>
            </ThemeProvider>
        </AppRouterCacheProvider>
    );
}