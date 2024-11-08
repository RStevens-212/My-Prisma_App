import { Box, Toolbar } from "@mui/material";
import ThemeSwitcher from "./ThemeSwitcher";

export default function AppBarMenu() {
    return (
        <Toolbar disableGutters>
            <Box m={1} />
            <ThemeSwitcher />
        </Toolbar>
    )
};