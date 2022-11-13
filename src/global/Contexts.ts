import React, { createContext } from "react";
import { ViewContextType } from "./Models";
import SpotifyWebApi from 'spotify-web-api-js'

export const ViewContext = createContext<ViewContextType>({} as ViewContextType);

export const SpotifyContext = createContext<SpotifyWebApi.SpotifyWebApiJs>({} as SpotifyWebApi.SpotifyWebApiJs);