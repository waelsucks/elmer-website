import { Container } from '@mui/material'
import { motion } from 'framer-motion'
import React from 'react'
import MenuBar from '../navigation/MenuBar'
import MainDisplay from './MainDisplay'

type Props = {}

function MainView({ }: Props) {
    return (
        <Container

            sx={{

                height: '100vh',
                width: '100vw',
                display: 'grid',
                gridTemplateRows: 'auto 1fr',
                gridTemplateColumns: '1fr',

            }}

            maxWidth="lg"

        >

            <motion.div

                transition={{ duration: 1, delay: 0.5, ease: 'easeInOut' }}

                initial={{ opacity: 0 }}

                animate={{ opacity: 1 }}

            >
                <MenuBar />
                
            </motion.div>

            <motion.div

                transition={{ duration: 1, ease: 'easeIn', delay: 1 }}

                initial={{ opacity: 0 }}

                animate={{ opacity: 1 }}

            >
                <MainDisplay />
            </motion.div>

        </Container>
    )
}

export default MainView