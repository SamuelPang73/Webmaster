import { makeStyles } from '@mui/styles' ;

export const useStyles = makeStyles(() => ({
    root : {
        "& img" : {
            maxWidth : 550,
            width : '100%'
        },
        paddingLeft : '10%',
        paddingRight : '10%',

        marginBottom : 70
    },
    titleDiv : {
        fontWeight : 'bold',
        fontSize : '20px',
        paddingLeft : 20,
        marginBottom : 20
    },
    descpDiv : {
        fontSize : '16px',
        paddingLeft : 20,
        lineHeight : 2,
        maxWidth : 550
    },
    buttonCss : {
        textTransform : 'capitalize !important',
        height : '45px !important',
        paddingLeft: '30px !important',
        paddingRight : '30px !important',
        fontSize: '15px !important',
        borderRadius : '30px !important',
    }
}))