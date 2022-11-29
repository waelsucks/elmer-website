import SpotifyWebApi from "spotify-web-api-js";

export interface IViewContext {

    view: JSX.Element;
    setView: (view: JSX.Element) => void;

}

export interface ISpotifyContext {

    spotify: SpotifyWebApi.SpotifyWebApiJs;

}

export interface IMobileContext {

    isMobile: boolean;
    setIsMobile: (isMobile: boolean) => void;

}