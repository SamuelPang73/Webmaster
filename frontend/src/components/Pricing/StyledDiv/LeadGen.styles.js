import { makeStyles } from '@mui/styles' ;

export const useStyles = makeStyles(() => ({
    root : {
        "& .MuiButtonBase-root" : {
            borderRadius : 25,
            marginTop : '15px',
            textTransform : "capitalize"
        },
        paddingTop : 150,
        paddingLeft : '10%',
        paddingRight : '10%'
    },
    itemDiv:{
        display: 'flex', flexDirection : 'column !important', justifyContent:'flex-start', alignItems : 'flex-start',

        marginBottom : '50px !important',
    },
    titleDiv: {
        fontSize : '35px',
        fontWeight: 'bold',
        maxWidth : 650,
    },
    descpDiv : {
        paddingTop : 15,
        paddingBottom : 25,
        maxWidth : 650,
        fontSize : 20,
    },
    imageCss : {
        width : '100%',
    }
}))