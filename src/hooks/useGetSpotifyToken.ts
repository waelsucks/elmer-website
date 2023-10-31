import { useEffect, useState } from "react";

const client_id = "3e7ce777c40c4538ad8f812af1573a58";
const client_secret = "1e24d11b4c43402fae806159cec99bd6";

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