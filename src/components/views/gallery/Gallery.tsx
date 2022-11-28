import { Box, IconButton, Link, Typography } from '@mui/material'
import { ref, listAll, getDownloadURL, list } from 'firebase/storage'
import { motion } from 'framer-motion'
import React, { useContext, useEffect, useState } from 'react'
import { Default } from '../../../global/Animations'
import { MobileContext } from '../../../global/Contexts'
import { storage } from '../../../hooks/useFirebase'
import InstagramIcon from '@mui/icons-material/Instagram';

type Props = {}

const maja_link = "https://www.instagram.com/maja.gallstad"

function Gallery({ }: Props) {

    const [imagesLinks, setImagesLinks] = useState<string[]>([])
    const [imagesLoaded, setImagesLoaded] = useState(false)

    const storageRef = ref(storage)
    const imagesRef = ref(storageRef, 'gallery/')

    const isMobile = useContext(MobileContext).isMobile

    useEffect(() => {

        // Get images from the default bucket

        const getImages = async () => {

            const images = await listAll(imagesRef)

            images.items.forEach(async (imageRef) => {

                const url = await getDownloadURL(imageRef)

                setImagesLinks((prev) => [...prev, url])

            })

        }

        getImages()

    }, [])

    let i = 0

    const handleLoad = () => {

        i++

        if (i === imagesLinks.length) {

            setImagesLoaded(true)

        }

    }

    return (
        <Box

            component={motion.div}

            initial={Default.initial}
            animate={Default.animate}
            exit={Default.exit}

            sx={{

                display: 'flex',

                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',

                height: '100%',
                width: '100%',

                overflow: 'hidden',

            }}

        >

            <Box

                sx={{

                    display: 'grid',

                    gridTemplateColumns: useContext(MobileContext).isMobile ? '1fr' : '1fr 1fr 1fr',
                    gridTemplateRows: useContext(MobileContext).isMobile ? '1fr 1fr 1fr' : '1fr 1fr',

                    gap: 0.5,

                    alignItems: 'center',
                    justifyItems: 'center',

                    height: 'auto',
                    width: 'auto',

                }}

            >

                {imagesLinks?.length > 0 && imagesLinks.map((image: string, index: number) => (

                    <motion.img

                        onLoad={handleLoad}

                        key={index}

                        initial={{ opacity: 0 }}

                        animate={{ opacity: imagesLoaded ? 1 : 0 }}

                        whileHover={{ opacity: 0.9 }}

                        style={{

                            objectFit: "contain",
                            height: isMobile ? "100%" : "auto",
                            width: isMobile ? "100%" : "225px",


                        }} src={image} alt={image}

                    />
                ))}

            </Box>

            {imagesLoaded &&

                <Typography variant='h5' color="primary" 
                
                sx={{

                    width: 'auto',

                }} >

                    PHOTOS BY MAJA GALLSTAD

                    <Link href={maja_link} target="_blank" underline="none">

                        <IconButton size="large" >

                            {<InstagramIcon />}

                        </IconButton>

                    </Link>

                </Typography>

            }

        </Box>
    )
}

export default Gallery