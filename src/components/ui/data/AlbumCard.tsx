import { Box, Card, CardActionArea, CardMedia, Typography } from '@mui/material'
import React from 'react'

type Props = {
    album: SpotifyApi.AlbumObjectSimplified
}

function AlbumCard({ album }: Props) {
    return (
        <Card

            elevation={15}
            

            sx={{

                backgroundImage: `url(${album.images[0].url})`,
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat',
                backgroundSize: 'contain',

                width: '100%',
                height: '100%',

                minWidth: '300px',
                minHeight: '300px',

                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'flex-end',
                alignItems: 'center',

                // boxShadow: '0px 0px 15px 15px rgba(0,0,0,0.2)',

            }}

            onClick={() => window.open(album.external_urls.spotify, '_blank')}

        >

            <Typography variant='h4' color={"var(--bg-color)"} sx={{ fontSize: "25px" }} >
                {album.name}
            </Typography>

        </Card>
    )
}

export default AlbumCard