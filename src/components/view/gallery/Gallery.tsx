import { IconButton, Link, Typography } from '@mui/material'
import { Box } from '@mui/system'
import React, { useContext, useEffect, useState } from 'react'
import { SpotifyContext } from '../../../global/Contexts'
import { spotifyID } from '../../../global/Models'
import {motion} from 'framer-motion'

import InstagramIcon from '@mui/icons-material/Instagram';
import { link } from 'fs'

import a from '../../../global/images/1.jpg'
import b from '../../../global/images/2.jpg'
import c from '../../../global/images/3.jpg'
import d from '../../../global/images/4.jpg'
import e from '../../../global/images/5.jpg'
import f from '../../../global/images/6.jpg'

const maja_link = "https://www.instagram.com/maja.gallstad"

const images: any = [
    {url: a},
    {url: b},
    {url: c},
    {url: d},
    {url: e},
    {url: f},

]

type Props = {}

function Gallery({ }: Props) {

    // const [images, setImages] = useState<SpotifyApi.ImageObject[]>()

    // const spotifyApi = useContext(SpotifyContext)

    // useEffect(() => {

    //     spotifyApi.getArtist(spotifyID).then(
    //         function (data) {
    //             setImages(data.images)
    //         }
    //     )

    // }, [])

    return (
        <Box

            sx={{
                display: 'grid',
                gridTemplateColumns: 'repeat(3, 1fr)',
                // gridTemplateRows: 'repeat(3, 1fr)',
                gridGap: 1,
                height: 'auto',
                width: 'auto',
            }}

        >
            {images?.map((image: {url: string}, index: any) => (
                <motion.img 
                
                    animate={{ opacity: 1 }}

                    whileHover={{ opacity: 0.9 }}
                
                style={{ maxWidth: 300, maxHeight: 300, objectFit: "contain" }} src={image.url} alt={image.url} key={index} />
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