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
    startedDiv : {
        padding : 40,
        background : '#f7fafe',
        minWidth : 940,
        display : 'flex', justifyContent : 'center', alignItems : 'center', gap : 20,
        flexDirection : 'column'
    }
}))