import React, { useState } from 'react';
import './App.css';

import { ViewContext, SpotifyContext, MobileContext } from './global/Contexts';
import { defaultTheme } from './global/Styles';
import SpotifyWebApi from 'spotify-web-api-js';
import useGetSpotifyToken from './hooks/useGetSpotifyToken';
import { CssBaseline, ThemeProvider } from '@mui/material';
import MainView from './components/ui/general/MainView';
import Home from './components/views/home/Home';
import createCache from '@emotion/cache';
import { CacheProvider } from '@emotion/react';

function App() {

    const [view, setView] = useState(<Home />)
    const [isMobile, setIsMobile] = useState(window.screen.width > 1200 ? false : true)
    const [spotify, setSpotify] = useState(new SpotifyWebApi())

    spotify.setAccessToken(useGetSpotifyToken())

    const cache = createCache({
        key: 'css',
        prepend: true,
    })

    return (


        <CacheProvider value={cache} >
            <ViewContext.Provider value={{ view, setView }}>
            <SpotifyContext.Provider value={{ spotify, setSpotify }}>
                <MobileContext.Provider value={{ isMobile, setIsMobile }}>

                    <MainView />

                </MobileContext.Provider>
            </SpotifyContext.Provider>
        </ViewContext.Provider>
        </CacheProvider>

    );
}

export default App;
