import React, { useEffect, useState } from 'react';
import './App.css';

import { ViewContext, SpotifyContext, MobileContext, SpotifyToken } from './global/Contexts';
import { defaultTheme } from './global/Styles';
import SpotifyWebApi from 'spotify-web-api-js';
import useGetSpotifyToken from './hooks/useGetSpotifyToken';
import { CssBaseline, ThemeProvider } from '@mui/material';
import MainView from './components/ui/general/MainView';
import Home from './components/views/home/Home';
import createCache from '@emotion/cache';
import { CacheProvider } from '@emotion/react';

import { SpotifyApi } from '@spotify/web-api-ts-sdk';

function App() {

    const [view, setView] = useState(<Home />)
    const [isMobile, setIsMobile] = useState(window.screen.width > 1200 ? false : true)

    const token = useGetSpotifyToken()
    const spotify = new SpotifyWebApi()

    // const sdk = SpotifyApi.withClientCredentials(process.env.REACT_APP_SPOTIFY_CLIENT_ID!, process.env.REACT_APP_SPOTIFY_CLIENT_SECRET!);

    useEffect(() => {

        spotify.setAccessToken(token)

    }, [spotify, token])

    return (

        <ViewContext.Provider value={{ view, setView }}>
            <SpotifyContext.Provider value={{ spotify }}>
                <MobileContext.Provider value={{ isMobile, setIsMobile }}>

                    <SpotifyToken.Provider value={token}>

                        <MainView />


                    </SpotifyToken.Provider>

                </MobileContext.Provider>
            </SpotifyContext.Provider>
        </ViewContext.Provider>

    );
}

export default App;
