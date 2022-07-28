import { makeStyles } from '@mui/styles' ;

export const useStyles = makeStyles((theme) => ({
    root : {
        display : 'flex', justifyContent : 'center',

        color : theme.palette.primary.main
    },
    verifyDiv : {
        border : '2px solid ' + theme.palette.primary.main,
        borderRadius : 5,

        width : 500,
        height : 300,

        display : 'flex', alignItems : 'center', justifyContent : 'center',
        flexDirection : 'column', gap : 15
    },
    labelDiv : {
        fontSize : 30,
        fontWeight : 'bold'
    }
}))