import type { Metadata } from 'next';
import { useMemo } from 'react';
import { Box, Toolbar, Typography } from '@mui/material';
import MyAppBar from './components/MyAppBar';
import Providers from './providers';
import NavDrawer from './components/NavDrawer';

export const metadata: Metadata = {
  title: 'My App',
  description: 'Example application',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {

  return (
    <html lang='en' suppressHydrationWarning>
      <body>
        <Providers>
          <Box sx={{ display: 'flex' }}>
            <MyAppBar />
            <NavDrawer />
            <Box flexGrow={1}>
              <Toolbar />
              <Box component='main' m={2}>
                {children}
              </Box>
            </Box>
          </Box>
        </Providers>
      </body>
    </html>
  )
}