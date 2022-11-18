import { IconButton, Link, Typography } from '@mui/material'
import { Box } from '@mui/system'
import React, { useContext, useEffect, useState } from 'react'
import { SpotifyContext } from '../../../global/Contexts'
import { spotifyID } from '../../../global/Models'
import {motion} from 'framer-motion'

import InstagramIcon from '@mui/icons-material/Instagram';
import { link } from 'fs'

const maja_link = "https://www.instagram.com/maja.gallstad"

const images: any = [
    // {
    //     url: "https://uc2646160799f6eb125661a17bb8.previews.dropboxusercontent.com/p/thumb/ABuXvLZ-4HfrZexaVv1xbewaedUcSTYDhiFHDg6j4IIVDyOvG5Y6XOtjyHkZeid3Tidj5fgSKxNzEDTcToEffPeYsCFGqz4G0TuEHIEIUOaCILepOGkFpNsz2geedA87G4-iN_DQtxWqPlRhvzhdX47nBIWYiSuhPp4yWtH-SLAugYCWPjH5j0N88UILjusKBXYHRxM9E6JWEpq0HF3XwNgTU9bnXsD98Upo9_daudVHhBtgfIq9XfXSR62gJgHgz8lo90MTnNuWIKCQhIoVCmYfTmykBUqLLngmwJ9Voi_UmLBO844zjF2ElFckSr3Y8RuZxWsKYwHneNWqbB5B79S5PNPHoSHTDmgTBk7KrAu10x2PiNbNbJupZcIZjF8XH-nCzyfwcuK_tk9KywVjylOp0oGkaT9s8-7BoWNUOVhcg5O-lhPsl9QyNfkFwBayVL0Jc0dNdDTVRIQ77f4eAfCZyCe4JIx8KliOrGN2EMOoUmT5NfQledBN4VKXRTH8yey-9z8TTm0R6q-TrQxKzR6cHG2zNemeUTYyVBvXaZONUnIXzu3z_75xR74ioprHECwPe5FVzr8dt9Q5nppl6UMFqIkHK-1JIU8wc1QY3OfCBroBHS9vF6v0g3HQXO2NNHg_E14eiRHSxQX0WcjVMP16_pOqnG52bS75iYEdiqaJtKUUfvfYRTGxy-3HBA1B6HwKVYG85yXdxp8XiKLDYzqTAOl2l9URLNMcT0r2E3kAUEHLezIX5NCrP-GH8u9w5sPx1cS7xZLBIjG3GvJqcB9Q3t1Lv4PMk2LJj_yxcFzaM-mturnss66w_4MCnRRe7ycxvkRPX1DDhqt_QurltuZsrezyWncfe-RUeBs1kEtGq9yUVTK74-g5N6iW8x2UWnfKGpXwj0mafetNbfkTj17bpLbTeeBBvOW447SrjveSfg/p.jpeg"
    // },
    {
        url: "https://uc1f00b2ddfeeb2eb94d5d32ecb2.previews.dropboxusercontent.com/p/thumb/ABtXPQ8SOOT8WbQVCtGH2y69-QagavOgxVppaNxmXOHDBKnCH4AVJdr07rJLMCS5A1Sl7p9dw4tiKJmpRIoY0aueqFUs0razGPzPCZrE35nFz7ZN0Bynf66alQ-f1H-w3yhEwmScrQCbpGg63QtC-oHQzZh8aXa5-H3fVA0FoRfRSgkoiFNa9GJanXV_Qval7uLPRYz46Il1LECYOf2fn4MsC-jtc3kvHvILy75xmxwVnVpjTx8qo3sh70gPrLCVRG5jPzva3SWbRRC4aiXQlZ1EXF3E1K8h-3Xb_Mgfg9d8xl57UluYKID2KrF5tzH894yXr23z_-jgzZE48sINQ6VvkykSezW7455CMhgcftS4aAu8_J34bDq_XUhPgI2Ac3klN2eEkU0Za0S2QznG1Dkrl8eKWrilqqIax3IBoCgBqqrIe1pVSXhNUwZ_mSEd16e12sP1NZiFj2hmGOkrhPH2B7S9XZZeFz8gaOUp6Yu5prS-04ti1S9AE51wrvdgRqv8bQwuwyqUYdW8U6cXDv00uVsOxFqgsI4-eRRmRw_KO6GW0aOHglh5_t_-VRAs5rhfSKITEaUQxuiYvBG8oTWqoZt24wu_SP4PTUSpayz-QuFi5rl4slI28CD0mrTD3QHyH6Lvl5l3YO2H_yliqtJI/p.jpeg?size=512x512&size_mode=1"
    },
    {
        url: "https://ucb3c1dcb38ccd06a2e5bcb1b9ed.previews.dropboxusercontent.com/p/thumb/ABsnD46UQyvt0TnQ_OgsqxlmunscQZDgZUxCkPL4_Nk2EM748tvS6ogGDgE7MG6XuhwDNVD9peX0XRLXIqlwTmPS3a6mm1gqtdh66CSo8z7x1wqSpSu8DuhztYiAHBNsqivkEE7HDUWgl87HtFQZYXA8yxyHtuYUmUh7C7bwpildARaK-uACuPdTwrk4X0THlVFnYS2sXPC7GDDmeu_mETfRLpf9HO9-tfoNRXn2ePSExxdH_eTRqsDdRc1C6h4xMkRQWj4S4cuE1EhL7HxrbcmV16DRFeOjivSROgeCyagUI8NXiHOBaW4l1GL9sX3mgdBaZdkEuzY06_OKU6Gm_5ydco6PYnE13Vfcy97WIapB_oZthOGEWrTWlYekkRRd4lEg6HyTQPS3E24TGYPxMnQzPK4lOcXK_joolVVx01p8A6i8FKa8syjJsn5b5SjYgnmhE1CWevNejUjE9PsklvW7QSyG66ufPVl_-IXJi2aBtEsGY52dpRxstdrcfWZ-_jCNpldkcW4lWk7IOHdx8c19eV7jYztggfNodDllFh_tPhs_pXisXqdb0c42uWlSYXKAufD7eigDEK5TINHyzawL/p.jpeg?size=512x512&size_mode=1"
    },
    {
        url: "https://uca0ebd79b42fc67c6e91fee10fd.previews.dropboxusercontent.com/p/thumb/ABvYrhYJqLK3MRcg7iPMyliArK2sUV44R2_gC6I2-_NAaMJWGvXqCQJBo1ieLox9rSgVyNYIEuXI4-0yFKFH9y4URlKN4E1K7J2cnD-HUur3knUzjl1wANGYcq47n7DrVhtzOQmuJI8Uo3cKs8P8lvN6VB3ZekoB-o5T7nCeRPtOGaFQbyYNAQsx34EQv0RpNypey1vLS1I-U-Yn3vLf4Joh0Rhbs4CRvuSD-PkY-TGCL5EzF8BJxLpltK_8NBQOZKwzbO_onNr396obypqwVDCElmwtSkMLxn-PtmaOwQyfiNcklCvlBfkv96WFi3ThorM5BLm311oz6y0TyHx5iFy3lSnlcFHiP0XdsqYx6pey4AlJUBT_MFz0JHWkiiFewbRySDeUeaVHQsNj43NZsAY14PESd1o6YK-c0y3m91i2xehuEF6pmsezs6Nwf9AoWqIs-GNGcllTzn7Z40FV3E99toYxoA4pCNyWV5oyCssSsJYB4TvhAZBZ3pDHbvIxmjSHyeoF26aVBTUrUtBWxiM1dnqubxUXSocQKwYjaK1Wk_Wzv6mwdCoe9sCZE2rxzxAGNXRIsFcws_TzkrNJ7ogkyUIFXMJHR7uuAfBA3fQxiY9YNPVKYDtJPrmA6cRPA4MTIWDdw3V8WsK69jO4fYRgxu6Cv8YE3DxMMPcKQAAyYH6Mt4C5_gju_3UKHzzpr1_f9H9_WIHxxj7SnHksCVoaIINm1ZI-ZRphhEH0K0xY7Nn1HHzaFSkP3d8NV9ekoo0kOi8ubBJzL00RyHIC77aQLXIpHJMJKILsRi8FPTZq4Wdz60ayjtrWDi-0Bd3GhmYAqxwNBuUMPaXmSH5Oh966QIVqaQVVI_gMtH6l9hFkA9E_jo9pAbj5U6nmxrpUA1beSk7RGIRygFRPC4hnFi2qK7YlItw_eqnu3F2PkpzUFF9WncFZmyYtPoY1r4sOEP0/p.jpeg?size=512x512&size_mode=1"
    },
    {
        url: "https://ucd89b3cfff07de123e1d56bd953.previews.dropboxusercontent.com/p/thumb/ABt8hywQvIfY2-EHCagG7-AVPOQ5_qGmjhPsXjyjfIJ42JS-af3ckdI5IGx28zszmgffVNvgJ9x4974BphcHm0UgQWTjTRAQ4sPNsGGVj-IbgwlJNpGXxmt1MWrdrrOg5I-I5e3aH5uAKoUSmBGuOpLlURr1ytnyRY6JqyvX5_Ck7h7qpOIbgjAy7ojgbwsjrydNN8HFOl4PQATKS9obppPrrD_i4ProNprImye5fDwEPykVgbCwtitsQTEBdlsm2sN6bucVgsba73WIqynV5FtLG2pGV_N8g1wpwP_pInlZ-wYhFmVIUVnPvRynmNB0mQoUbFIyruPzkmbr2YNmPS_kRKzltfacC8aHwXT5Iz-CzMwqNhihb-h3SeVxnFHuI-HJPplGb9J1yHYGMRA-8OEG4eNaycqAAeMkNHZ2n-ihfuh1zizT09td-5bTvhsuNSkw0dkR_kYtdHQhN9mL6_fjnVw2kqHF6KW2K0_aHGgXSkrlVP13eoSrH3AIzBCE9lFfCL5MSZS6xhdRodEnqBdWRt-bxT_XJgE-F4K82E3ZKacx3AhfumIXp7xjKH8Ddb4wbFxopUSZJXjrgiS-YHp3/p.jpeg?size=512x512&size_mode=1"
    },
    {
        url: "https://uc49932ec010704ad3a1b3dc4c22.previews.dropboxusercontent.com/p/thumb/ABvQdV30GOUpM4VoWXAQb5cmEK0UuExCYs3t08Rjqej4XtMvLufTRVN6rKj-OgUkywNTqD2BehRAbu2CmToIZ7JYbschXnFb8rV_ej9USygBqBeh4mbfehx7BA5BW5hq7q0oBj-Mik75tyg8uKWbsMrhBJa8-z3Dk0f29WhZuRiDdmQWsXTe2VNFyQwzWGFxUFuiv2swJAk0-BytKmFVAjtU2Y_P8LrUrst83aeSzE_BN8DeHaR3ibcWmx5QdYn_KZnCy3z6mFwMHSw1ngOZPShB93pQWEjK_Arn3iz7EE6BxWcycHJF5PQ2WYvSpZbzIAJgLt8zKTCkp9wNd4adrohSxsR1WJfsRiTxKW9du4NyX6OhVCq6nvE2xqpFtziaOwsiKJRHUpZ5tccUQwlPu3Er9Rn9KlGkyeZd2JI5GVxOpy6qHTL-nApnVXZClFuFcLc9C4e714LvybMhrQ9CfJMB0vFE597b0NRd4BxbgzpjTppye3m8T7-_4O0lUrJdZ963dfqMFKbSZet7dgY4ZwQT/p.jpeg?size=512x512&size_mode=1"
    },
    {
        url: "https://ucad3910777647d639cbffaefbc7.previews.dropboxusercontent.com/p/thumb/ABsJvzQHu90xCQkO1-deeHADlI2XR-IW7D6EM17z2ZT0vMdviDwCkbLjfJjroc95amh1XIxDq9SmtVzYqciC2edu_hJ3TRqtomBx4K4TgTozJ3zLrcTRbJOJY5MKI8LoKcX91EA9iEAchTdVJB4ySZXEnopt11yvTl4Px2REZPtKHbzYhR6wAg_GAw5p17wHMV8su3rjoYF8QxauPhacfTGwzFPgBEtddoj7FOdj1JGxrDdFn7z5_UUZYKRJ-Ec2D8RqKnNWMtU5oajUT5cwU-AWVtVZv4LBGFiIUgR4xvozoacNsOlImKNAWR8uCqSN-yeyEVgnXvpB4RTvcVemPtM0TNsOwfvwpEJYz1zJXCnXd2qKVKkxBp0MLf36dbpGJjk1MMHrrd7OnyNMd-GcB-zPRXkdMOKjzhgGKjjhtjEAIv_OMPq8reGOiHt3KoCstQGSCrjZYuVL91I_doj81gCaC3P4gMxhbKAw56MiGPJeKZSU1T35F_aKttbodvZMir9RWaFjzs_CMYTO-gQIp_wv86cjHWqU7-ih42pU09hrnfSUK7443Sb4-p3185l7u7pbCgTHxcdvk4fBCdqgCi0w/p.jpeg?size=512x512&size_mode=1"
    },
    {
        url: "https://uc1002934f6d995be3de89c35474.previews.dropboxusercontent.com/p/thumb/ABuSKpjWc-YC1KirCNloE6gc4P8-UvMrGdvn-Jydyny2D3zXQEHJ41VkmpPnr8X6moqt2qzAz1SCiX4pSM26aRUEWkNCadjOC3MfjR383jlBdHlQ8JCSeZcQQjJg9LsOdTOhSmQr2osIExsBuDQsZO4ORIwTpG3WzfCiRmdGOAU3IN0nQ5hBoJWLRAE2-hvpkmyiHLQ0lI6O354yYC6wrmXPBy2nmjYM-dp1fAYjdirKdOmxWJTW5hAWzjgCBfDa6wZ94xj5nBa2tht4okaLDi0jbeRn4x4Cc0_N1Hi-oaDq5bXM29S9qVeF59TVxjEZFBBZBG7O5j-Zhqo-UK5f60TQ6lttlqZWSnXV3bh4iTAytYZVgomGSWMlIt5ed11MtnzmYW6DvZzJB-RO7XMPe-8YNfoxraumcH0ZUTsx5Wuwaeiqvu4v2H16RSRtLOJtqgbJnFNTSuQNPYF3XPi25jR98dF9gyY_UoTTpemRqpceyyJgA6_oR3kBYlXSG8-mAe2bgExTvjRsnbHFm6DorY9b/p.jpeg?size=512x512&size_mode=1"
    },
    {
        url: "https://uc63832c9da4f0d2684c1e60f921.previews.dropboxusercontent.com/p/thumb/ABtosRfT36WoegC1wRFAVHy98oBlW2HuL7ZAjl9psz3P6pY9W1gJUA3o_9ygepF28GXTj_qnYV49oIQhDUa-MLSUiAXC1y23gv-J3XSj6UlTHEUf6Va92bOV8ou1vK5SnXD_cT02FprlZ7-GvCaW_fJd69eW0IltoxFPMvagl0O41WvbZtM1HK4DMJH74bGYAx34Lcdu_wBMx5jPzQ-botLeIqEVOdK8HxFVJGVoSlciI225VR4yxLytZqZLJLVYU2WEzs7AZYuiKEcgNyRWO2BB_kessz8zmMatV5Yomcar7xmHvQvLNnAFmkRq3rQTP7YTNRvfS7cYT6fgEoEQ3fyXqXMMg1c2dZowy4a8WnqJivhpml49B5H3Ug-xJ-MKZY5n1ADyk0TWjwkep9e-8avdFQb48mGMmHwb900juS0dHCY5qkyUwoxqY3EWQLmYfv-ugfuXtL9JROJ4I45ERoFn14RH_eB7FYTFZFaXvuQ3P4AmWJ2OTiOATjpQcYKLVTTXdduLGWYVN6KZlXvskkRq_oVlpbsL7jb9Do9VnKR_8vo2a3cajjAh4F8xri8unAmyXvCuQ9txT8h4qkI3fTdYPgr8UWXdoSyoEKzKFdV_13LIBReb4gCMURvkxErXtYZeFgnXqktNoU5t0KtAsfuDg5oGkMyatE6yYV9lmWMfiRJryo7cLLHcZfwfF3utTXQ/p.jpeg?size=512x512&size_mode=1"
    },
    {
        url: "https://uc33fce5fa9270a2277e88ba0bff.previews.dropboxusercontent.com/p/thumb/ABs21Ii_GDnmBMsa7O7zt01ZIdfwpNQq4zgcUC1WkCVUNEXikM0G-7h2Rl6966FmWtLhU8YAZPNXl9ku5xkjGz2fQ88TMMRnuyfDa3vO2Jo6bJ5RdzKgp8svUVsBZsF06QQihuTPViW4I566Sjp5DlhUxy1-wYPAlbOfk__ofs7V_EHeKlQEezOEbmwvKuC2yOZTk01J8xCKJ8968au4zApPdpS-ZkMsQv1eLnDdhN6p2GoiqqMbZiJatW7nD1dJtGk3E1BIHv-UsIMk-Frr2GRgP4cy1jJO2p7R8_TelRnJXRlL2GrS2rOczGznqnWrHUdgx1plof6loGfbii06cnyhKDWjrl_kOtuwgxutLtcFdpcYOnSe38vD2PUKqdrKDm-5U1LmNrzJrp8IsCoLg9-uzzB8YXtQvAkaparz7GExaJ-BxKrl82yY96uw9N1qflCSeLPYXKnUqgBMrtTAjJ0QDG1BSDaz0oEeNq7iU9RRSC2WElM7Yhv3EFzIPQdQ6JkFDh2-hC9FqJhHWHsiYjJiAFx3ioDDR9jz8H8yH5j4L6J0Zw0HR4XB_1DeR2-ZRlbhgW7p3GTldd_M-Y_LWC07R5ko_K5quMHUykJ2fgs9sRz5QAQbPxaxn8jE8Sbd9oQSHiZM3txaAOhpO1Ae6xDd6u0zfTxN7H4Nin71NiZjW7R_SbUzGWO14LSVM1_6dImCxz8PPIyLJ78phfvWMoY8btsax4dlnFvtKY7V4SzFnsC7fwiwtpIwdAtDa5mzGQexgsINoIzF2hU8rr6sA3T_PqySSdLlPDs3bMVAj6lLhglnaovudFxMA1VGUVhpAeJC7tvooVUS9tMHxCgAQQHyjU_RPALTZxHHBShQ08sAOCvLhhR5j-0mWalaEQBaK0WF8rgslXfCJoUOeKEySIWqRYp7VkykMYwdGFsDWqUrG0-HINHruiWF6qFmms1KwZk/p.jpeg?size=512x512&size_mode=1"
    }
]

type Props = {}

function Gallery({ }: Props) {

    // const [images, setImages] = useState<SpotifyApi.ImageObject[]>()

    // const spotifyApi = useContext(SpotifyContext)

    // useEffect(() => {

    //     spotifyApi.getArtist(spotifyID).then(
    //         function (data) {
    //             setImages(data.images)
    //         }
    //     )

    // }, [])

    return (
        <Box

            sx={{
                display: 'grid',
                gridTemplateColumns: 'repeat(3, 1fr)',
                // gridTemplateRows: 'repeat(3, 1fr)',
                gridGap: 1,
                height: 'auto',
                width: 'auto',
            }}

        >
            {images?.map((image: {url: string}, index: any) => (
                <motion.img 
                
                    animate={{ opacity: 1 }}

                    whileHover={{ opacity: 0.9 }}
                
                style={{ maxWidth: 200, maxHeight: 200, objectFit: "contain" }} src={image.url} alt={image.url} key={index} />
            ))}

            <Box

                sx={{
                    gridColumn: 'span 3',
                    // border: '1px solid black',
                }}

            >

                <Typography variant='h5' color="primary">
                    
                    PHOTOS BY MAJA GALLSTAD

                    <Link href={maja_link} target="_blank" underline="none">

                    <IconButton size="large" >

                        {<InstagramIcon />}

                    </IconButton>

                </Link>

                </Typography>

                

            </Box>

        </Box>
    )
}

export default Gallery