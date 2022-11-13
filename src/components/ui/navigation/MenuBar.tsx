import { Box, Button, IconButton, Link, Tab, Tabs, Typography } from '@mui/material'
import React, { useContext } from 'react'
import { ViewContext } from '../../../global/Contexts'

import InstagramIcon from '@mui/icons-material/Instagram';
import LibraryMusicIcon from '@mui/icons-material/LibraryMusic';
import SpatialAudioOffIcon from '@mui/icons-material/SpatialAudioOff';
import YouTubeIcon from '@mui/icons-material/YouTube';
import Home from '../../view/home/Home';
import About from '../../view/about/About';
import Store from '../../view/store/Store';
import Events from '../../view/events/Events';
import Gallery from '../../view/gallery/Gallery';

const instagramLink = "https://www.instagram.com/edvinelmersson/"
const musicLink = "https://share.amuse.io/_H83CBZeBTot"
const spotifyLink = "https://open.spotify.com/artist/2j17cmQqEsKLnQkeHKnJPt?si=hkaHCvAIQ2CvUiaGzOml3g"
const youtubeLink = "https://www.youtube.com/channel/UC7lArkTGSeyrk_GLDrJjHqw"

const links = [

    { name: "Instagram", icon: <InstagramIcon  />, link: instagramLink },
    { name: "Music", icon: <LibraryMusicIcon />, link: musicLink },
    { name: "Spotify", icon: <SpatialAudioOffIcon />, link: spotifyLink },
    { name: "YouTube", icon: <YouTubeIcon />, link: youtubeLink },

]

const menu = [

    { name: "Home", component: <Home /> },
    { name: "About", component: <About /> },
    { name: "Store", component: <Store /> },
    { name: "Events", component: <Events /> },
    { name: "Gallery", component: <Gallery /> },


]

type Props = {}

function MenuBar({ }: Props) {

    const { view, setView } = useContext(ViewContext)

    return (
        <Box

            sx={{
                display: 'grid',
                gridTemplateColumns: 'repeat(3, 1fr)',
                gridTemplateRows: '1fr',
                height: '100%',
                width: '100%',
                alignItems: 'center',
                justifyContent: 'center',
                // border: '1px solid black',
            }}

        >

            <Box

                // The first box containing social media links

                sx={{

                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'left',
                    height: '100%',
                    width: '100%',
                    gap: 2,
                    // border: '1px solid black',

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

            <Box

                // The second box containing title

                sx={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'left',
                    paddingLeft: 2,
                    height: '100%',
                    width: '100%',
                    // border: '1px solid black',

                }}

            >

                <Typography color='#303030'  variant='h2'
                
                    sx = {{
                        paddingTop: 2.5,
                        
                        // borderBottom: '2px solid',
                        
                        // textDecoration: 'underline',
                        textDecorationThickness: '4px',
                        opacity: 0.9,

                        // paddingBottom: 0,

                        marginBottom: 0
                        
                    }}
                
                    fontWeight='bold'

                >
                    

                    elmer
                </Typography>

            </Box>

            <Box

                // The third box containing menu items

                sx={{

                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    height: '100%',
                    width: '100%',
                    gap: 2,
                    // border: '1px solid black',
                }}

            >

                <Tabs value={view.type.name} >

                    {menu.map((item, index) => {

                        return (

                            <Tab

                                key={index}
                                sx={{
                                    fontSize: '1.2rem',
                                }}
                                label={item.name}
                                value={item.name}
                                onClick={() => setView(item.component)}

                            />
                        )

                    })}

                </Tabs>

            </Box>

        </Box>
    )
}

export default MenuBar