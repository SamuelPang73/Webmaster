import { makeStyles } from '@mui/styles' ;

export const useStyles = makeStyles(() => ({
    root : {
        paddingLeft: '10%',
        paddingRight : '10%',

        paddingBottom : 70,
        paddingTop : 70
    },
    sectionDiv : {
        marginTop : 70
    },
    titleDiv : {
        fontSize : 25,
        fontWeight : 'bold'
    },
    attachDiv : {
        border : '1px solid lightgray',
        fontSize : 20, fontWeight : 'bold',
        height: 250,
        borderRadius : 10,
        display : 'flex', justifyContent : 'center', alignItems : 'center',
        cursor : 'pointer'
    },
    buttonGroup : {
        marginTop : 20,

        display : 'flex', justifyContent : 'flex-end', gap : 20
    }
}))