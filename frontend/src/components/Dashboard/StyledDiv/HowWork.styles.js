import { makeStyles } from "@mui/styles";

export const useStyles = makeStyles((theme) => ({
    root : {
        paddingLeft : '10%',
        paddingRight : '10%',

        marginBottom : '150px',
        paddingTop : '100px'
    },
    cardDiv : {
    },
    mainCardDiv : {
        borderRadius : 20,
        padding : 50,

        minHeight : 200,

        display : 'flex', justifyContent : 'center', alignItems : 'center',
        background : 'white',
        marginBottom : 20
    },
    titleDiv : {
        marginTop : 10,
        fontSize : 25,
        fontWeight : 'bold',
    },
    contentDiv : {
        fontSize : 20
    },
    checkDiv : {
        minWidth : 40,
        height : 40,
        display : 'flex',alignItems : 'center', justifyContent : 'center',
        "& svg" : {
            color : 'white'
        },
        background : theme.palette.primary.main,
        borderRadius : '50%'
    }
}))