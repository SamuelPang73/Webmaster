import { makeStyles } from '@mui/styles' ;

export const useStyles = makeStyles(() => ({
    root : {
        "& .MuiButtonBase-root" : {
            borderRadius : 25,
            marginTop : '15px',
            textTransform : "capitalize"
        },
        paddingTop : 150,
        paddingLeft : '10%',
        paddingRight : '10%'
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