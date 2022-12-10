import { createContext } from "react";
import SpotifyWebApi from "spotify-web-api-js";
import { IMobileContext, ISpotifyContext, IViewContext } from "./Models";

export const ViewContext = createContext<IViewContext>({} as IViewContext);
export const SpotifyContext = createContext<ISpotifyContext>({} as ISpotifyContext);
export const MobileContext = createContext<IMobileContext>({} as IMobileContext);
export const SpotifyToken = createContext<string>("");

// export const MenuOpen = createContext<boolean>(false);