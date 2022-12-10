import { Box, Container } from '@mui/material'
import { ref, listAll, getDownloadURL } from 'firebase/storage'
import { motion } from 'framer-motion'
import React, { useContext, useEffect, useState } from 'react'
import { Default } from '../../../global/Animations'
import { MobileContext } from '../../../global/Contexts'
import { storage } from '../../../hooks/useFirebase'
import MenuBar from '../navigation/MenuBar'
import MainDisplay from './MainDisplay'

type Props = {}

function MainView({ }: Props) {

    const [bgImage, setBgImage] = useState('')

    const storageRef = ref(storage)
    const imagesRef = ref(storageRef, 'background/')

    const { isMobile } = useContext(MobileContext)

    useEffect(() => {

        // Get images from the default bucket

        const getImages = async () => {

            const images = await listAll(imagesRef)

            getDownloadURL(images.items[0]).then((url) => {

                setBgImage(url)

            })

        }

        getImages()

    }, [])

    return (

        <Box

            component={motion.div}

            sx={{

                width: '100vw',
                height: '100vh',

                display: 'flex',

                flexDirection: 'column',

                backgroundImage: `url(${bgImage})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat',

                // padding: 0,

                pl: !isMobile ? "10vw" : 0,
                pr: !isMobile ? "10vw" : 0


            }}

            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}

            transition={{
                delay: 1,
                duration: 0.5
            }}

        >

            <Box

                // maxWidth="xl"

                component={motion.div}

                initial={Default.initial}
                animate={Default.animate}
                exit={Default.exit}

                sx={{

                    width: '100%',
                    height: '100%',

                    display: 'grid',
                    gridTemplateColumns: '1fr',
                    gridTemplateRows: '1fr 8fr',

                    backgroundColor: 'var(--bg-color)',

                    overflow: "scroll"

                }}

            >



                <MenuBar />

                <MainDisplay />
                {/* <Footer /> */}

            </Box>

        </Box>


    )
}

export default MainView