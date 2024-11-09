import { Box, Toolbar } from "@mui/material";
import ThemeSwitcher from "./ThemeSwitcher";

export default function AppBarMenu() {
    return (
        <Toolbar>
            <div style={{width: 100}} />
            <ThemeSwitcher />
        </Toolbar>
    )
};