import { AppBar, Box, Toolbar } from "@mui/material";
import Menu from './Menu';
import MenuDrawer from "./MenuDrawer";

export default function MyAppBar() {
    return (
        <AppBar>
            <MenuDrawer />
            <div style={{flexGrow: 1}} />
            <Toolbar>
                <Menu />
            </Toolbar>
        </AppBar>
    )
}