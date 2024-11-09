'use client';
import { createTheme } from "@mui/material";

export const lightTheme = createTheme({
    zIndex: {
        appBar: 1201,
        drawer: 1200,
    },
    palette: {
        mode: 'light',
        primary: {
            main: '#00338E',
            light: '#0055C8',
            dark: '#002463',
            contrastText: '#FFFFFF'
        },
        secondary: {
            main: '#39892F',
        },
        info: {
            main: '#0190F9',
        },
        success: {
            main: '#4B93DF',
        },
        warning: {
            main: '#EEB77C',
        },
        error: {
            main: '#E16247',
        },
    },
});

export const darkTheme = createTheme({
    zIndex: {
        appBar: 1201,
        drawer: 1200,
    },
    palette: {
        mode: 'dark',
        background: {
            default: '#1F1F1F',
            paper: '#2B2B2B',
        },
        text: {
            primary: '#FFFFFF',
            secondary: '#BDBDBD',
        },
        primary: {
            main: '#00338E',
            light: '#0055C8',
            dark: '#002463',
            contrastText: '#FFFFFF'
        },
        secondary: {
            main: '#39892F',
        },
        info: {
            main: '#0190F9',
        },
        success: {
            main: '#4B93DF',
        },
        warning: {
            main: '#EEB77C',
        },
        error: {
            main: '#E16247',
        },
    },
});

export const theme = createTheme({
    colorSchemes: {
        light: {
            palette: {
                mode: 'light',
                primary: {
                    main: '#00338E',
                    light: '#0055C8',
                    dark: '#002463',
                    contrastText: '#FFFFFF'
                },
                secondary: {
                    main: '#39892F',
                },
                info: {
                    main: '#0190F9',
                },
                success: {
                    main: '#4B93DF',
                },
                warning: {
                    main: '#EEB77C',
                },
                error: {
                    main: '#E16247',
                },
            },
        },
        dark: {
            palette: {
                mode: 'dark',
                background: {
                    default: '#1F1F1F',
                    paper: '#2B2B2B',
                },
                text: {
                    primary: '#FFFFFF',
                    secondary: '#BDBDBD',
                },
                primary: {
                    main: '#00338E',
                    light: '#0055C8',
                    dark: '#002463',
                    contrastText: '#FFFFFF'
                },
                secondary: {
                    main: '#39892F',
                },
                info: {
                    main: '#0190F9',
                },
                success: {
                    main: '#4B93DF',
                },
                warning: {
                    main: '#EEB77C',
                },
                error: {
                    main: '#E16247',
                },
            },
        }
    }
})