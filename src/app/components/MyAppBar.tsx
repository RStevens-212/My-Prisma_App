import { AppBar, Box, Toolbar } from "@mui/material";
import Menu from './Menu';

export default function MyAppBar() {
    return (
        <AppBar position='fixed'>
            <Toolbar>
                <Menu />
            </Toolbar>
        </AppBar>
    )
}