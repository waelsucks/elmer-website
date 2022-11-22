import { useEffect, useState } from "react";
import axios from "axios";

const client_id = '3e7ce777c40c4538ad8f812af1573a58';
const client_secret = '1e24d11b4c43402fae806159cec99bd6';

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