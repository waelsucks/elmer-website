import React from 'react'

import InstagramIcon from '@mui/icons-material/Instagram';
import LibraryMusicIcon from '@mui/icons-material/LibraryMusic';
import SpatialAudioOffIcon from '@mui/icons-material/SpatialAudioOff';
import YouTubeIcon from '@mui/icons-material/YouTube';
import { Box, IconButton, Link } from '@mui/material';

import SpotifyIcon from '../../../global/images/SpotifyIcon.png'

function FastLinks() {

    const instagramLink = "https://www.instagram.com/edvinelmersson/"
    const musicLink = "https://share.amuse.io/_H83CBZeBTot"
    const spotifyLink = "https://open.spotify.com/artist/2j17cmQqEsKLnQkeHKnJPt?si=hkaHCvAIQ2CvUiaGzOml3g"
    const youtubeLink = "https://www.youtube.com/channel/UC7lArkTGSeyrk_GLDrJjHqw"

    const links = [

        { name: "Instagram", icon: <InstagramIcon />, link: instagramLink },
        { name: "Music", icon: <LibraryMusicIcon />, link: musicLink },
        { name: "Spotify", icon: <SpatialAudioOffIcon />, link: spotifyLink },
        

        // { name: "Spotify", icon: <img src={SpotifyIcon} alt="Spotify" color='var(--primary-color)' style={{ width: '25px', height: '25px', filter: "var(--primary-color)" }} />, link: spotifyLink},

        { name: "YouTube", icon: <YouTubeIcon />, link: youtubeLink },

    ]

    return (
        <Box

            sx={{
                width: '100%',
                height: '100%',
                display: 'flex',
                justifyContent: 'space-evenly',
                alignItems: 'center',
            }}

        >

            {links.map((link, index) => {

                return (

                    <Link href={link.link} key={index} target="_blank" underline="none">

                        <IconButton size="large" >

                            {link.icon}

                        </IconButton>

                    </Link>

                )

            })}

        </Box>
    )
}

export default FastLinks