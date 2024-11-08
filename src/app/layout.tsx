import type { Metadata } from 'next';
import { Box, Toolbar, Typography } from '@mui/material';
import MyAppBar from './components/MyAppBar';

export const metadata: Metadata = {
  title: 'My App',
  description: 'Example application',
}

export default function RootLayout() {

  return (
    <html lang='en' suppressHydrationWarning>
      <body>
        <Box sx={{display: 'flex'}}>
          <MyAppBar />
        </Box>
      </body>
    </html>
  )
}