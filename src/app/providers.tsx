'use client';

import { AppProvider as ToolpadAppProvider } from '@toolpad/core/nextjs';
import { AppRouterCacheProvider } from '@mui/material-nextjs/v14-appRouter';
import { ThemeProvider, CssBaseline } from '@mui/material';
import { theme } from '@/app/theme';
import QueryClientProvider from '../react-query/QueryClientProvider';

export default function Providers({ children }: { children: React.ReactNode }) {

    return (
        <QueryClientProvider>
            <AppRouterCacheProvider>
                <ThemeProvider theme={theme}>
                    <CssBaseline />
                    <ToolpadAppProvider>
                        {children}
                    </ToolpadAppProvider>
                </ThemeProvider>
            </AppRouterCacheProvider>
        </QueryClientProvider>
    );    
}