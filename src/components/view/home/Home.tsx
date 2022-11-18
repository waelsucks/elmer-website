import { Box, Container, Divider, Typography } from '@mui/material'
import { motion } from 'framer-motion'
import React, { useContext, useEffect, useState } from 'react'

import { SpotifyContext } from '../../../global/Contexts'
import { spotifyID } from '../../../global/Models'
import AlbumCard from '../../ui/data/AlbumCard'

<script type="text/javascript" src="https://www.dropbox.com/static/api/2/dropins.js" id="dropboxjs" data-app-key="tpnuomervcudmix"></script>


function Home() {

    const [albums, setAlbums] = useState<any[] | null>(null)

    const spotifyApi = useContext(SpotifyContext)


    const x = <a
        href="https://www.dropbox.com/s/u0bdwmkjmqld9l2/dbx-supporting-distributed-work.gif?dl=0"
        className="dropbox-embed"
    ></a>

    


    useEffect(() => {



    }, [])

    useEffect(() => {

        spotifyApi.getArtistAlbums(spotifyID).then(

            function (data) {
                setAlbums(data.items)
            },

            function (err) {
                console.error(err);
            }
        );

    }, [spotifyApi])

    return (
        <Container

        >

            {albums && (
                <Box

                    sx={{
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        justifyContent: 'center',
                        width: '100%',
                        height: '100%',
                    }}

                >

                    <Typography variant='h2' color="primary" sx={{
                        textDecoration: 'underline',
                        textDecorationThickness: '2.5px',
                    }} >
                        LATEST RELEASE
                    </Typography>

                    <Divider sx={{ mb: 5 }} />

                    <motion.div

                        whileHover={{ scale: 1.05, opacity: 0.85 }}

                        animate={{ opacity: 1 }}

                    >
                        <AlbumCard album={albums![0]} />
                    </motion.div>

                </Box>
            )

            }

        </Container>
    )
}

export default Home