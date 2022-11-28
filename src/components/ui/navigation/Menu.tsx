import { Box, IconButton, MenuItem, SpeedDial, SpeedDialAction, Tab, Tabs } from '@mui/material'
import React, { useContext, useState } from 'react'
import { MobileContext, ViewContext } from '../../../global/Contexts'
import About from '../../views/about/About'
import Events from '../../views/events/Events'
import Gallery from '../../views/gallery/Gallery'
import Home from '../../views/home/Home'
import Store from '../../views/store/Store'
import Menu from '@mui/material/Menu';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import SpeedDialIcon from '@mui/material/SpeedDialIcon';
import FastLinks from './FastLinks'

function MenuItems() {

    const { view, setView } = useContext(ViewContext)

    const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
    const open = Boolean(anchorEl);

    const menu = [

        { name: "Home", component: <Home key="home" /> },
        { name: "About", component: <About key="about" /> },
        { name: "Store", component: <Store key="store" /> },
        { name: "Events", component: <Events key="events" /> },
        { name: "Gallery", component: <Gallery key="gallery" /> },

    ]

    const handleClick = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = (event: React.MouseEvent<HTMLElement>) => {

        setAnchorEl(null);

        setView(
            menu.find(item => item.name === event.currentTarget.textContent)!.component
        )

    };

    return (
        <Box

            sx={{

                width: '100%',
                height: '100%',

                display: 'flex',
                justifyContent: useContext(MobileContext).isMobile ? 'flex-end' : 'center',
                alignItems: 'center',

            }}

        >

            {useContext(MobileContext).isMobile

                ? (
                    <div>
                        <IconButton

                            onClick={handleClick}

                        >
                            <MoreVertIcon />
                        </IconButton>

                        <Menu

                            anchorEl={anchorEl}
                            open={open}
                            onClose={handleClose}

                            PaperProps={{

                                elevation: 0,
                                sx: {
                                    minWidth: '40vw',
                                    backgroundColor: 'var(--primary-color)',
                                    // backgroundColor: 'rgba(0, 0, 0, 0.3)',
                                    color: "white"
                                }
                            
                            }}

                        >

                            {menu.map((option) => (
                                <MenuItem key={option.name} onClick={handleClose}>
                                    {option.name}
                                </MenuItem>
                            ))}

                        </Menu>

                    </div>
                )

                : (
                    (
                        <Tabs value={view.type.name} >

                            {menu.map((item, index) => {

                                return (

                                    <Tab

                                        key={index}
                                        label={item.name}
                                        value={item.name}

                                        sx={{
                                            fontSize: '1.2rem',
                                        }}

                                        onClick={() => setView(item.component)}

                                    />
                                )

                            })}

                        </Tabs>

                    )
                )

            }

        </Box>
    )
}

export default MenuItems