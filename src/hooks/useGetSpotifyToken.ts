import { useEffect, useState } from "react";

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

        const getToken = async () => {

            const response = await fetch('https://accounts.spotify.com/api/token', authParams);

            const data = await response.json();

            setToken(data.access_token);

        }

        getToken();

    }, [])

    return token;

}