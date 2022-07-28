import { makeStyles } from "@mui/styles";

export const useStyles = makeStyles((theme) => ({
    root : {
        paddingLeft : '10%',
        paddingRight : '10%',

        paddingBottom : 120,
        paddingTop : 100,

        display : 'flex', flexDirection : 'column' , alignItems : 'center'
    },
    titleDiv : {
        paddingTop : 20,
        paddingBottom : 10,

        fontSize : 35,
        fontWeight : 'bold',
        textAlign :'center'
    },
    dividerDiv : {
        border : '1px solid lightgray',
        marginTop : 10,
        marginBottom : 10,
        width : 750
    },
    creatorDiv : {
        width : 750,
        marginBottom : 50,

        display :'flex', gap : 10, alignItems : 'center'
    },
    descpDiv : {
        fontFamily : '"Roboto","Helvetica","Arial",sans-serif',
        fontSize : 20,
        width : 750,

        whiteSpace: 'pre-wrap !important',
    },
    listDiv : {
        width : '100%',
        paddingLeft : 30,
        paddingRight : 20,

        "&::-webkit-scrollbar":{
            width : "0px",
            height : '0px',
            cursor : 'pointer !important'
        } ,
    },
    secTitleDiv : {
        fontSize : 25,
        fontWeight : 'bold'
    },
    secContentDiv : {
        paddingTop : 10,

        fontSize : 20,
        "& img" : {
            maxWidth : '100%'
        }
    },
    itemDiv : {
        paddingBottom : 20,

        fontSize : 18,
        fontWeight : 'bold',

        cursor : 'pointer',
        textDecoration : 'underline',

        "&:hover" :{
            color : theme.palette.primary.main,
        }
    }
}))