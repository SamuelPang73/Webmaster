import { makeStyles } from '@mui/styles' ;

export const useStyles = makeStyles((theme) => ({
    root : {
        
    },
    buttonCss : {
        textTransform : 'capitalize !important',
        minWidth : '150px !important',
        height : '45px !important',
        fontSize: '15px !important',
        borderRadius : '0px !important',
        background : '#95b6fa !important',
        border : 'none !important',
        color : 'white !important'
    },
    linkListDiv : {
        display : "flex", flexWrap : 'wrap',
        maxWidth : 1000,
        gap : 10
    },
    linkDiv : {
        background : 'white',
        borderRadius : 15,
        padding : 10,
        width : 230,
        display : 'flex', justifyContent: 'center', alignItems : 'center',
        cursor : 'pointer',

        color : 'gray',
        fontSize: 20
    }
}))