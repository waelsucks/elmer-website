import '../App.css'

import { createTheme, makeStyles } from "@mui/material";

const font = "'Poppins', sans-serif"
const font2 = "EightOne"
const font3 = "Vonique"
const font4 = "Roboto"

export const defaultTheme = createTheme({

    palette: {

        primary: {
            // main: "var(--primary-color)",
            main: "#4F544E"
        },

        secondary: {
            // main: "var(--secondary-color)"
            main: "#424F30"
        },

        background: {
            // default: "var(--bg-color)"
            default: "#EFEAD5"
        }


    },

    typography: {

        fontFamily: font,

        h5: {

            fontFamily: font,
            // fontSize: "1.25rem",
            // fontWeight: 300,
        }
    }

})