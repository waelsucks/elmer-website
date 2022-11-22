import { Box, Button, Container, Divider, Drawer, List, ListItem, ListItemButton, ListItemIcon, ListItemText, Typography } from '@mui/material'
import React, { useContext } from 'react'
import Home from '../../view/home/Home'
import MenuBar from '../navigation/MenuBar'
import MobileMenu from '../navigation/MobileMenu'
import MainDisplay from './MainDisplay'
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';
import { Store } from '@mui/icons-material'
import About from '../../view/about/About'
import Events from '../../view/events/Events'
import Gallery from '../../view/gallery/Gallery'
import { ViewContext } from '../../../global/Contexts'

type Props = {}

type Anchor = 'left'

const menu = [

    { name: "Home", component: <Home /> },
    { name: "About", component: <About /> },
    { name: "Store", component: <Store /> },
    { name: "Events", component: <Events /> },
    { name: "Gallery", component: <Gallery /> },

]

function MobileView({ }: Props) {

    return (
        <Container

            sx = {{
                width: '100vw',
                height: '100vh',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                flexDirection: "column",
                padding: 5
            }}

            >

                <Typography variant='h1' color={"primary"}>
                    elmer
                </Typography>

                <Home />

            </Container>
    )
}

export default MobileView