import { IconButton, Link, Typography } from '@mui/material'
import { Box } from '@mui/system'
import React, { useContext, useEffect, useState } from 'react'
import { SpotifyContext } from '../../../global/Contexts'
import { spotifyID } from '../../../global/Models'

import InstagramIcon from '@mui/icons-material/Instagram';
import { link } from 'fs'

const maja_link = "https://www.instagram.com/gallstadfoto"

type Props = {}

function Gallery({ }: Props) {

    const [images, setImages] = useState<SpotifyApi.ImageObject[]>()

    const spotifyApi = useContext(SpotifyContext)

    useEffect(() => {

        spotifyApi.getArtist(spotifyID).then(
            function (data) {
                setImages(data.images)
            }
        )

    }, [])

    return (
        <Box

            sx={{
                display: 'grid',
                gridTemplateColumns: 'repeat(3, 1fr)',
                // gridTemplateRows: 'repeat(3, 1fr)',
                gridGap: 1,
                height: '100%',
                width: '100%',
            }}

        >
            {images?.map((image, index) => (
                <img style={{ maxWidth: 300 }} src={image.url} alt={image.url} key={index} />
            ))}

            <Box

                sx={{
                    gridColumn: 'span 3',
                    // border: '1px solid black',
                }}

            >

                <Typography variant='h5' color="primary">
                    
                    PHOTOS BY MAJA GALLSTAD

                    <Link href={maja_link} target="_blank" underline="none">

                    <IconButton size="large" >

                        {<InstagramIcon />}

                    </IconButton>

                </Link>

                </Typography>

                

            </Box>

        </Box>
    )
}

export default Gallery