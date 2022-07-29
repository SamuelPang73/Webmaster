import { makeStyles } from "@mui/styles";

// Montserrat
export const useStyles = makeStyles((theme) => ({
    root : {
        position : 'relative',

        display : 'flex', alignItems : 'center', justifyContent : 'center',

        "& button" : {
            textTransform : 'capitalize !important',
            fontSize : 20,
            minWidth : '150px !important',
            borderRadius : 25,
            border : 'none !important',
            height : 40,
            cursor : 'pointer',
            background : theme.palette.primary.main,
            color : 'white',

            display : 'flex', justifyContent : 'center', alignItems : 'center', gap : 10,
            minWidth : 150,
            fontSize : 15
        },
        "& button:disabled" : {
            color : 'gray',
            cursor : 'not-allowed !important'
        }
    },
})) ;