import { makeStyles } from '@mui/styles' ;

export const useStyles = makeStyles(() => ({
    root : {
        paddingTop : 40,
        paddingBottom : 40,
        background : '#4569eb',
        color : 'white'
    },
    itemListDiv : {
        display : 'flex', gap : 20,
        fontSize : 20, fontWeight : 'bold'
    },
    itemDiv : {
        paddingRight : 10, paddingLeft : 10,
        cursor : 'pointer',
        textDecoration : 'none',
        "&:hover" :{
            textDecoration : 'underline'
        }
    },
    messageList : {
        display : 'flex', gap : 20,
        marginTop : 10
    },
    messageItem  :{
        background : 'white',
        borderRadius : 20,
        padding : 10,
        maxWidth : 300,
        transition : '3s',

        display : 'block',
        blockSize: 'fit-content'
    },
    messageDiv : {
        background : "#f7fafe",
        padding : 20,
        color : '#333',
        borderRadius : 20,
        fontSize : 18,
        fontStyle : 'italic',
        fontWeight : 300,
        lineHeight : 2
    },
    userDiv : {
        marginTop : '10px',

        "& img" : {
            width : 50,
            borderRadius : 25
        },
        color : '#333',

        display : 'flex', gap : 10
    }
}))