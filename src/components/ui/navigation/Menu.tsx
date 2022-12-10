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
import { MoreHorizOutlined } from '@mui/icons-material'

import MenuIcon from '@mui/icons-material/Menu';
import { motion } from 'framer-motion'

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
                    <div
                    
                        style={{
                            width: '100%',
                            height: '100%',
                            display: 'flex',
                            justifyContent: 'center',

                            padding: 0,
                            margin: 0,

                        }}
                    
                    >
                        <IconButton

                            onClick={handleClick}

                        >
                            <MenuIcon />
                        </IconButton>

                        <Menu

                            anchorEl={anchorEl}
                            open={open}
                            onClose={handleClose}

                            anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
                            transformOrigin={{ vertical: 0 , horizontal: 'center' }}



                            PaperProps={{

                                elevation: 0,

                                sx: {

                                    minWidth: '60vw',
                                    
                                    backgroundColor: "rgb(245, 245, 240)",
                                    color: 'var(--primary-color)',

                                }
                            
                            }}

                        >

                            {menu.map((option) => (
                                <MenuItem key={option.name} onClick={handleClose}
                                
                                    sx={{

                                        width: '100%',
                                        display: 'flex',
                                        justifyContent: 'center',

                                        fontSize: '1.5rem',

                                        backgroundColor: view.type.name === option.name ? 'rgba(0, 0, 0, 0.1)' : 'transparent',

                                    }}
                                
                                >
                                    {option.name}
                                </MenuItem>
                            ))}

                        </Menu>

                    </div>
                )

                : (
                    (
                        <Tabs value={view.type.name}
                        
                            sx={{
                                width: '100%',
                                height: '100%',
                                display: 'flex',
                                justifyContent: 'center',
                                alignItems: 'center',
                            }}
                        
                        >

                            {menu.map((item, index) => {

                                return (

                                    <Tab

                                        key={index}
                                        label={item.name}
                                        value={item.name}

                                        sx={{
                                            fontSize: '1.5rem',
                                            height: '110px',
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