import { makeStyles } from '@mui/styles' ;

export const useStyles = makeStyles(() => ({
    root : {
        paddingTop : 80,

        paddingLeft : '10%',
        paddingRight : '10%'
    },
    titleDiv : {
        fontSize : 48,
        fontWeight : 'bold',
        textAlign : 'center'
    },
    balanceDiv : {
        textAlign : 'center',
        fontSize: 30,
    },
    imgDiv : {
        display : 'flex', justifyContent: 'center',
        "& img" : {
            width : '100%',
            maxWidth : 750,
            borderRadius : 10,
            boxShadow : '2px 2px 6px 0px #d800ff'
        }
    },
    itemTitle : {
        fontSize : 35,
        fontWeight : 'bold'
    },
    itemDescp : {
        fontSize : 20
    },
    startDiv : {
        marginTop : 100,
        marginBottom : 50,

        background  :'white',
        padding : 40,

        display : 'flex', flexDirection  :'column', gap : 20, alignItems : 'center', justifyContent : 'center',
        
        minHeight : 235 
    },
    startLabel : {
        fontSize : 30,
        fontWeight : 'bold',
    },
    startDescp  : {
        fontSize : 20
    }
}))