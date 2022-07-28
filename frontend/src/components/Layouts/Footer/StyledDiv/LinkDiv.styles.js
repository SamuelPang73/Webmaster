import { makeStyles } from '@mui/styles' ;

export const useStyles = makeStyles((theme) => ({
    root : {
        paddingLeft : '5%',
        paddingRight: '5%',

        paddingBottom : 30
    },
    titleDiv : {
        fontWeight : 'bold',
        paddingBottom : '5px'
    },
    linkItemDiv: {
        paddingTop : '2px',
        paddingBottom : '2px',

        "&:hover" : {
            color : "#4d19ff"
        },
        cursor : "pointer"
    },
    socialList : {
        display  : 'flex', gap : 10,
        "& svg" : {
            fontSize : 25
        }
    },
    socialDiv : {
        background : 'lightgray',
        width : 40, height : 40,
        borderRadius : 10,

        display : 'flex', justifyContent: 'center', alignItems : 'center',
        cursor : 'pointer',

        "&:hover" : {
            background : '#f2f4f8'
        }
    },
    buttonCss : {
        textTransform : 'capitalize !important',
        minWidth : '150px !important',
        height : '50px !important',
        fontSize: '15px !important',
        borderRadius : '30px !important',
    }
}))