import React, { useEffect, useState } from 'react';
import './App.css';
import MainView from './components/ui/general/MainView';
import { Box, ThemeProvider } from '@mui/material';
import CssBaseline from '@mui/material/CssBaseline';
import { defaultTheme } from './global/Styles';
import Home from './components/view/home/Home';
import { SpotifyContext, ViewContext } from './global/Contexts';
import SpotifyWebApi from 'spotify-web-api-js'
import useGetSpotifyToken from './components/hooks/useGetSpotifyToken';

function App() {

    const [theme, setTheme] = useState(defaultTheme);
    const [view, setView] = useState(<Home />);

    var spotifyApi = new SpotifyWebApi();
    spotifyApi.setAccessToken(useGetSpotifyToken())

    return (
        <ThemeProvider theme={theme}>

            <CssBaseline />

            <Box>
                <ViewContext.Provider value={{ view, setView }}>
                    <SpotifyContext.Provider value={spotifyApi}>
                        <MainView />
                    </SpotifyContext.Provider>
                </ViewContext.Provider>

            </Box>

        </ThemeProvider>
    );
}

export default App;
