import { makeStyles } from "@mui/styles";

export const useStyles = makeStyles((theme) => ({
    root : {
        marginTop : -80,
        background : theme.palette.primary.main,
        widht : '100vw',
        height : '100vh',

        padding : 20
    },
    logoDiv : {
        cursor : 'pointer',
        
        borderTopRightRadius : 20,
        borderBottomRightRadius : 20,

        borderBottomLeftRadius : 50,
        
        background : '#2a277c1f',
        paddingLeft : 30,
        paddingRight : 30,
        paddingTop : 15,
        paddingBottom : 15,
        
        borderBottom : '1px solid #2a277c1f',
        borderLeft : '1px solid #2a277c1f' ,

        display : 'flex', alignItems : 'center', gap : 20,
        position : "fixed",
        top : 30, 
        left : 'calc(50% - 50px)',
        "& img" : {
            color : 'white',
        }
    },
    formDiv : {
        background : 'white',
        height : 'calc(100vh - 40px)',
        borderRadius : 20,

        display : 'flex', justifyContent : 'center',
        alignItems : 'center',

        '& .MuiOutlinedInput-root': {
            marginBottom : 20,
            '& fieldset': {
                borderColor: theme.palette.primary.main + ' !important',
            },
            '&:hover fieldset': {
                borderColor: theme.palette.primary.main + ' !important',
            },
            '&.Mui-focused fieldset': {
                borderColor: theme.palette.primary.main + ' !important'
            },
        },
        "& .MuiInputBase-input" :{
        },

        "& .MuiButtonBase-root" : {
            textTransform : 'capitalize !important',
            borderRadius : '10px !important'
        }
    }
}))