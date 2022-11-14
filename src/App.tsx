import React, { useState } from 'react';
import './App.css';
import MainView from './components/ui/general/MainView';
import { Box, ThemeProvider, Typography } from '@mui/material';
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

    let isMobile = false;

    if (window.screen.width >= 1280) {
        isMobile = false
    } else {
        isMobile = true
    }

    return (
        <ThemeProvider theme={theme}>

            <CssBaseline />

            {
                isMobile ?

                    <Box>
                        <Typography variant='h4' color="white" sx={{
                            textAlign: 'center',
                            marginTop: '5vh',
                            fontSize: '30px',
                            
                        }} >
                            This website is not optimized for mobile devices. <br />  Please use a desktop computer.
                        </Typography>
                    </Box>

                    :

                    <SpotifyContext.Provider value={spotifyApi}>
                        <ViewContext.Provider value={{ view, setView }}>
                            <MainView />
                        </ViewContext.Provider>
                    </SpotifyContext.Provider>

            }

        </ThemeProvider>
    );
}

export default App;
