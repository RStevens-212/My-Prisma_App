import { AppBar, Box, Toolbar } from "@mui/material";
import Menu from './Menu';
import NavDrawer from "./NavDrawer";

export default function MyAppBar() {
    return (
        <AppBar position='fixed'>
            <Toolbar>
                <Menu />
            </Toolbar>
        </AppBar>
    )
}