import { makeStyles } from '@mui/styles' ;

export const useStyles = makeStyles((theme) => ({
    root : {
        marginTop : 120,
        paddingTop : 40,
        paddingBottom : 40,
        background : theme.palette.background.gray
    },
    buttonCss : {
        textTransform : 'capitalize !important',
        minWidth : '150px !important',
        height : '50px !important',
        fontSize: '15px !important',
        borderRadius : '30px !important',
    },
    templatesDiv : {
        display : 'flex', flexDirection : 'column', alignItems : 'center', gap : 20,
        background : 'white',
        padding : 30,
        borderRadius : 20,
        maxWidth : 940,
    },
    cardDiv : {
        paddingTop : 30,
        paddingBottom : 30,
        maxWidth : 460,
        borderRadius : 20,
        background : 'white' ,
        "& img" : {
            width : '80%',
            marginBottom : 20
        },
        display : 'flex', flexDirection : 'column', alignItems : 'center',

    },
    titleDiv : {
        fontWeight : 'bold',
        fontSize : 24,
        marginBottom : 20
    },
    watchItemDiv : {
        display : 'flex', flexDirection : 'column',
        width : '80%',
        marginBottom : 30,
        "& a" : {
            color : '#1c76e1',
            textDecoration  :'none !important'
        },
    }
}))