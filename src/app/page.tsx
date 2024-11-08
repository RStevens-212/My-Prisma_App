import { Paper, Typography } from '@mui/material';
import MyAppBar from './components/MyAppBar';

export default function Home() {
  return (
    <div>
      <MyAppBar />
      <Paper>
        <Typography variant='subtitle1'>Testing this</Typography>
      </Paper>
    </div>
  );
}