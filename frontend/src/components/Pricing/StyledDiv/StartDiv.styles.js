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
    cardDiv : {
        borderRadius : 30,
        maxWidth : 350,
        padding : '30px 20px 30px 20px',

        height : 750,

        display : 'flex', justifyContent : 'space-between', flexDirection : 'column', alignItems : 'center',
        background : 'white',

        "& .MuiButtonBase-root" : {
            borderRadius : '30px !important',
            marginBottom : 20
        }
    },
    titleDiv : {
        fontSize : 20,
        fontWeight : 'bold',
        textAlign : 'center',
        paddingBottom : 15,
    },
    descpDiv  : {
        color : 'gray',
        textAlign : 'center',
        paddingBottom : 10
    },
    priceDiv : {

    },
    priceValue : {
        fontSize : 48,
        fontWeight : 'bold',
        textAlign : 'center'
    },
    labelDiv : {
        fontStyle : 'italic',
        textAlign : 'center',
        marginBottom : 20
    },
    listTitleDiv : {
        fontWeight : 'bold',
        fontSize : 18,
        marginBottom : 5
    },
    smListTitle : {
        marginTop : 20
    },
    footDiv : {
       fontSize : 10,
       color : 'gray' ,
       maxWidth : 250,
       textAlign : 'center'
    },
    itemDiv : {
        display : 'flex', gap : 10, alignItems : 'center',
        paddingBottom : 7,
    },
    checkDiv : {
        width : 20,
        height : 20,
        display : 'flex',alignItems : 'center', justifyContent : 'center',
        "& svg" : {
            color : 'white',
            fontSize: 15
        },
        borderRadius : '50%'
    },
    bg1 : {
        background : "#03aff5 !important"
    },
    bg2 : {
        background : "#4569eb !important"
    },
    bg3 : {
        background : "#ff9a3f !important"
    },
    color1 : {
        color : '#03aff5'
    },
    color2 : {
        color : "#4569eb"
    },
    color3 : {
        color : "#ff9a3f"
    }
}))