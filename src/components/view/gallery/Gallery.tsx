import { Box } from '@mui/system'
import React, { useContext, useEffect, useState } from 'react'
import { SpotifyContext } from '../../../global/Contexts'
import { spotifyID } from '../../../global/Models'

type Props = {}

function Gallery({ }: Props) {

    const [images, setImages] = useState<SpotifyApi.ImageObject[]>()

    const spotifyApi = useContext(SpotifyContext)

    useEffect(() => {

        spotifyApi.getArtist(spotifyID).then(
            function (data) {
                setImages(data.images)
            }
        )

    }, [])

    return (
        <Box
        
            sx={{
                display: 'grid',
                gridTemplateColumns: 'repeat(3, 1fr)',
                // gridTemplateRows: 'repeat(3, 1fr)',
                gridGap: 1,
                height: '100%',
                width: '100%',
            }}
        
        >
            {images?.map((image, index) => (
                <img style={{maxWidth: 300}} src={image.url} alt={image.url} key={index} />
            ))}
        </Box>
    )
}

export default Gallery