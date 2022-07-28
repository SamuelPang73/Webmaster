import { makeStyles } from '@mui/styles' ;

export const useStyles = makeStyles(() => ({
    root : {
        "& img" : {
            maxWidth : 550,
            width : '100%'
        },
        paddingLeft : '10%',
        paddingRight : '10%'
    },
    featureDiv : {
        maxWidth : 460,
        padding : 30,
        background : 'white',
        borderRadius  : 20
    },
    emojiDiv : {
        fontSize : 40
    },
    titleDiv : {
        fontWeight : 'bold',
        fontSize : '20px',
        marginBottom : 20
    },
    descpDiv : {
        fontSize : '16px',
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