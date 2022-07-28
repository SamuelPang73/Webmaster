import { makeStyles } from '@mui/styles' ;

export const useStyles = makeStyles(() => ({
    root : {
        "& img" : {
            maxWidth : 550,
            width : '100%'
        },
        "& .MuiButtonBase-root" : {
            borderRadius : 25,
            marginTop : '15px',
            textTransform : "capitalize"
        },

        
        paddingLeft : '10%',
        paddingRight : '10%'
    },
    listDiv : {
        "& .MuiGrid-item" : {
            marginBottom : 100
        },
    },
    sectionDiv : {
        maxWidth : 550,
    },
    sectionTitleDiv : {
        fontSize : 30,
        fontWeight : 'bold'
    },
    sectionDesDiv : {
        fontSize : 18,
        color : '#333',
        marginBottom : '10px'
    },
    iconListDiv : {
        display : 'flex', gap : 10, alignItems: 'center',
        marginTop : '10px',

        "& img" : {
            width : 40,
            borderRadius : '50%'
        },
    },
    iconDiv : {
        "& svg" : {
            color : 'white',
            fontSize : 17
        },
        display : 'flex', justifyContent : 'center', alignItems : 'center',
        borderRadius : '50%',
        background : '#4d19ff',
        padding  :5
    }
}))