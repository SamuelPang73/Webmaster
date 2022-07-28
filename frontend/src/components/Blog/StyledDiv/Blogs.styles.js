import { makeStyles } from "@mui/styles";

export const useStyles = makeStyles(() => ({
    root : {
        paddingLeft: '10%',
        paddingRight : '10%',

        paddingBottom : 70
    },
    blogInfoDiv : {
        padding : 20,
        display :'flex', flexDirection : 'column', justifyContent : 'space-between',

        height : '100%',

        cursor : 'pointer'
    },
    headDiv : {
    },
    titleDiv : {
        fontSize : 32,
        fontWeight : 'bold',
        lineHeight : 1,
        paddingBottom : 15
    },
    contentDiv : {
        color : 'gray',
        fontSize : 18,
        paddingBottom : 15,
        fontFamily : '"Roboto","Helvetica","Arial",sans-serif',

        height : 220,
        overflow : 'hidden',

        whiteSpace: 'pre-wrap !important',
    },
    imgDiv : {
        "& img" : {
            width : '100%'
        }
    },
    footDiv : {
        display : 'flex', alignItems : 'center',  gap : 10,
        "& img" : {
            width : 50,
            height: 50,
            borderRadius : '50%'
        }
    },
    nameDiv : {
        fontSize : 12,
        fontWeight : 'bol'
    },
    dateDiv : {
        fontSize: 12,
        color : 'gray'
    }
}))