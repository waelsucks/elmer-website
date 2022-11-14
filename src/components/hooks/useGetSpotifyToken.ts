import { useEffect, useState } from "react";
import axios from "axios";

const client_id = process.env.REACT_APP_SPOTIFY_CLIENT_ID;
const client_secret = process.env.REACT_APP_SPOTIFY_CLIENT_SECRET;

const authParams = {

    method: 'POST',

    headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
    },

    body: 'grant_type=client_credentials&client_id=' + client_id + '&client_secret=' + client_secret

}

export default function useGetSpotifyToken() {

    const [token, setToken] = useState("");

    useEffect(() => {

        fetch('https://accounts.spotify.com/api/token', authParams)
            .then(response => response.json())
            .then(data => {
                setToken(data.access_token);
            });

    }, []);

    return token;

}