import { makeStyles } from '@mui/styles' ;

export const useStyles = makeStyles((theme) => ({
    root : {
        display : 'flex', justifyContent : 'center',

        "& .MuiTableContainer-root" : {
            maxWidth : '940px !important',
            borderTop : '1px solid lightgray',
            borderLeft : '1px solid lightgray',
            padding : 0
        },
        "& .MuiTable-root" : {
            borderSpacing: '0 10px',
            "& .MuiTableCell-root" : {
                padding : '30px  !important',
                borderRight : '1px solid lightgray',
                borderBottom : '1px solid lightgray'
            }
        },
        "& .MuiTableBody-root" : {
            "& .MuiTableRow-root" : {
                cursor : 'pointer',
                transition : '0.2s',
                "&:hover" : {
                },
            },
            "& .MuiTableCell-root" : {
                fontSize : '15px !important',
                textAlign : 'center !important'
            }
        },
    },
    headTitleDiv : {
        fontWeight : 'bold',
        fontSize : 18,
        paddingBottom : 10
    },
    priceValue : {
        color : theme.palette.primary.main,
        fontSize : 30,
        fontWeight : 'bold'
    },
    unitDiv : {
        fontSize : 14,
        color : 'gray'
    },
    buttonCss : {
        textTransform : 'capitalize !important',
        height : '45px !important',
        paddingLeft: '30px !important',
        paddingRight : '30px !important',
        fontSize: '15px !important',
        borderRadius : '30px !important',
    }
}))