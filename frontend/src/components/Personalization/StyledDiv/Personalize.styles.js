import { makeStyles } from '@mui/styles' ;

export const useStyles = makeStyles((theme) => ({
    root : {
        "& .MuiButtonBase-root" : {
            borderRadius : 25,
            marginTop : '15px',
            textTransform : "capitalize"
        },
        paddingTop : 150,
        paddingBottom : 70,
        paddingLeft : '10%',
        paddingRight : '10%'
    },
    selectDiv : {
        background : 'lightgray',
        borderRadius : 30,
        padding : 10,
        display : 'flex', justifyContent:'center', gap : 10, alignItems : 'center',
        maxWidth : 650
    },
    selectedItemDiv :{
        background :'none !important',
        padding : 10,
        borderRadius :30,
        color : 'black',
        cursor : 'pointer',

        paddingLeft:20,
        paddingRight : 20
    },
    active: {
        background : theme.palette.primary.main + " !important",
        color : 'white !important',
    },
    seeLinkDiv : {
        "& svg" :{
            fontSize : 20
        },
        display : 'flex', alignItems : 'center', gap : 10,justifyContent : 'flex-start',
        marginBottom : '20px',
        marginTop : '20px',
        color : theme.palette.primary.main,
        cursor :'pointer',
        "&:hover" :{
            textDecoration : 'underline'
        }
    },
    funnelsList : {
        marginTop : 20,
        display : 'flex', justifyContent:'center', gap : 20, alignItems : 'center',
    },
    funnelItem : {
        background :'none',
        padding : 10,
        color : theme.palette.primary.main,
        cursor : 'pointer',
        minWidth : 170,
        display : 'flex', justifyContent : 'center'
    },
    funnelActive :{
        background : theme.palette.primary.main + ' !important',
        color : 'white',
        borderRadius : 30,
    },
    filterDiv:{
        display: 'flex', flexDirection : 'column !important', justifyContent:'flex-start', alignItems:'flex-start',

        paddingBottom : 50,

        borderBottom : '10px dotted lightgray',

        marginBottom : '50px !important',
    },
    titleDiv: {
        fontSize : 30,
        maxWidth : 650,
        fontWeight : 'bold'
    },
    descpDiv : {
        paddingTop : 15,
        paddingBottom : 25,
        maxWidth : 650,
        fontSize : 21,
    },
    imageCss : {
        width : '100%',
    }
}))