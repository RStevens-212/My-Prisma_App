import { Card } from '@mui/material';

export default function SectionContainer({children}: Readonly<{children: React.ReactNode}>) {
  return (
    <Card elevation={6}>
        {children}
    </Card>
  )
};
