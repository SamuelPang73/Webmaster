import { makeStyles } from "@mui/styles";

export const useStyles = makeStyles((theme) => ({
    root: {
        paddingTop : 50
    },
    articleDiv : {
        width : 550,
    },
    titleDiv : {
        fontWeight :'bold',
        fontSize : 20
    },
    itemDiv : {
        display : 'flex', alignItems : 'center', justifyContent: 'space-between',
        paddingBottom : 15,
        paddingTop : 15,
        borderBottom : '1px solid black',
        cursor : 'pointer',
        transition : '0.2s',

        "&:hover" : {
            color : theme.palette.primary.main,
            paddingLeft : 15,
            paddingRight : 15,
            background : '#f5c9f2'
        }
    }
}))