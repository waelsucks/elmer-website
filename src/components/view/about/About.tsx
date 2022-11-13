import { Box, Divider, Typography } from '@mui/material'
import React, { useContext, useState } from 'react'
import { SpotifyContext } from '../../../global/Contexts'
import { spotifyID } from '../../../global/Models'

type Props = {}

function About({ }: Props) {

    return (
        <Box

            sx={{
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
                height: '100%',
                width: '100%',
                paddingLeft: 25,
                paddingRight: 25,
                paddingTop: 5,
                paddingBottom: 5,

                marginRight: 20,

                // borderImage: "linear-gradient(#f6b73c, #4d9f0c) 30",
                // borderWidth: "4px",
                // borderStyle: "solid",


                // boxShadow: 7

                // backgroundColor: 'rgba(0, 0, 0, 0.02)',

            }}

        >

            <Typography variant='h2' color="primary" sx={{
                textDecoration: 'underline',
                textDecorationThickness: '2.5px',
            }} >
                ABOUT
            </Typography>

            <Divider sx={{ mb: 5 }} />

            <Typography variant='h5' sx={{ fontSize: "18px" }} color="primary" textAlign={"center"} >
                Edvin Elmersson, or elmer, is a 25 year old Swedish multi-instrumentalist, singer and producer based in Malmö, Sweden.

                <br /> <br />

                Being exposed to lots of instruments early in his life, a teenage dream was birthed to write music where he sings and plays most of the instruments himself. <br />
                With experience in jazz, rock, classical, indie, reggae; and instruments such as voice, guitar, bass, drums, piano, violin, accordion, trumpet; he has now made this a reality. <br />
                The path there included jazz studies at Fridhems Folkhögskola and music production at Musikhögskolan in Malmö.

                <br /> <br />

                elmer´s alternative/indie rock is a longing to express something honest and to take each emotion to its peak. Some influences are Radiohead, Matt Corby and Salem Al Fakir.

                <br /> <br />

                Earlier collaborations include artists such as Josef Slunge, Bella Leonette, Wa’el, <br /> Ture Butler among others. <br />
                As a double bass player in the big band Kristianstad XL Big Band he has also got the opportunity to work with jazz artists such as Peter Asplund, Isabella Lundgren and Vivian Buczek.

                <br /> <br />

                elmer released his debut single ’Denial’ on the 4th of November. His EP ’Right Now’ is set to be released on 1st of December.
            </Typography>

        </Box >
    )
}

export default About