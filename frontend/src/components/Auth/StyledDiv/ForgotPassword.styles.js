import { makeStyles } from '@mui/styles';

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
        
        border : '1px solid #2a277c1f',

        display : 'flex', alignItems : 'center', gap : 20,
        position : "fixed",
        top : 30, 
        
        minWidth : 246,

        left : 'calc(50% - 123px)',
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

        padding : 40,

        maxWidth : 700,

        '& .MuiOutlinedInput-root': {
            '& fieldset': {
                border: '1px solid !important',
            },
            '&:hover fieldset': {
                border: '1px solid !important',
            },
            '&.Mui-focused fieldset': {
                border: '1px solid !important',
            },
        },
        "& .MuiInputBase-input" :{
        },

        "& .MuiButtonBase-root" : {
            textTransform : 'capitalize !important',
            borderRadius : '10px !important'
        },
        "& .MuiGrid-item" : {
           
        }
    },
    titleDiv : {
        fontSize : 40,
        textAlign : 'left',
        fontWeight : 'bold',
        color :theme.palette.primary.main
    },
    labelDiv : {
        fontSize : 20,
        color :theme.palette.primary.main
    },
    buttonGroup : {
        display : 'flex', gap : 20
    }
}));