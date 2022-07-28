import { makeStyles } from '@mui/styles' ;

export const useStyles = makeStyles((theme) => ({
    root : {
    },
    buttonCss : {
        textTransform : 'capitalize !important',
        minWidth : '150px !important',
        height : '50px !important',
        fontSize: '15px !important',
        borderRadius : '30px !important',
    },
    navbarDiv : {
        maxWidth : 250
    },
    navItemDiv : {
        paddingTop : 5,
        paddingBottom : 5,
        cursor :'pointer',
        "&:hover" : {
            color : theme.palette.primary.main
        }
    },
    refDiv : {
        marginBottom : 50,
        paddingLeft : '5%',
        paddingRight : '5%'
    },
    categoryDiv : {
        display  :'flex', flexWrap : 'wrap', gap : 50, justifyContent : 'flex-start'
    },
    itemDiv : {
        width : 140,
        height : 150,
        display : 'flex', justifyContent : 'center', alignItems : 'center',flexDirection : 'column', gap : 20,
        cursor : 'pointer'
    },
    labelDiv : {
        color : theme.palette.primary.main,
        textAlign : 'center',
        "&:hover" : {
            textDecoration : 'underline'
        }
    },
    cardDiv : {
        padding : 30,
        background : '#f3f4f8',
        borderRadius : 10,
        width : 470
    },
    cardNameDiv : {
        color : theme.palette.primary.main,
        fontSize : 25,
        fontWeight : 'bold',
        marginBottom : 20
    },
    cardDescpDiv : {
        lineHeight : 2,

        marginBottom : 20
    },
    buttonCss : {
        textTransform : 'capitalize !important',
        minWidth : '150px !important',
        height : '50px !important',
        fontSize: '15px !important',
        borderRadius : '30px !important',
    }
}))