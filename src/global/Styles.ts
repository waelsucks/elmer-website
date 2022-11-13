import { createTheme } from "@mui/material";
import Image from '../global/bg2.jpg'

import '../App.css'

const font = "'Poppins', sans-serif"
const font2 = "EightOne"
const font3 = "Vonique"

export const defaultTheme = createTheme({

    palette: {

        primary: {
            main: "#4F544E"
        },

        secondary: {
            main: "#424F30"
        },

        background: {
            default: "var(--bg-color)"
        }


    },

    typography: {

        fontFamily: font3,

    },

    components: {

        MuiCssBaseline: {

            styleOverrides: {

                body: {

                    backgroundColor: "var(--bg-color)",
                    backgroundImage: `url(${Image})`,
                    backgroundRepeat: "no-repeat",
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    backgroundAttachment: "fixed",
                }

            }

        },

        MuiCard: {
            
        },

        MuiContainer: {

            styleOverrides: {

                root: {

                    backgroundColor: "var(--bg-color)"

                }

            }

        }



    }

});