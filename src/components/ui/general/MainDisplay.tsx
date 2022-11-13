import { Box } from '@mui/material'
import { AnimatePresence, motion } from 'framer-motion'
import React, { useContext } from 'react'
import { variants } from '../../../global/Animations'
import { ViewContext } from '../../../global/Contexts'

type Props = {}

function MainDisplay({ }: Props) {

    const { view, setView } = useContext(ViewContext)

    return (
        <Box

            sx={{
                width: '100%',
                height: '100%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                paddingLeft: 4,
                paddingRight: 4,
            }}

        >

            <AnimatePresence mode='wait'>
                <motion.div

                    variants={variants}

                    initial='hidden'
                    animate='visible'
                    exit='hidden'

                    key={view.type.name}

                >

                    {view}

                </motion.div>
            </AnimatePresence>

        </Box>
    )
}

export default MainDisplay