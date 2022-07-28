import * as React from 'react' ;

import ExpandImage from '../../assets/pricing/expand.png' ;

import {
    Box ,
    Accordion,
    AccordionSummary,
    AccordionDetails
} from '@mui/material' ;

import { makeStyles, useTheme } from '@mui/styles' ;

const useStyles = makeStyles((theme) => ({
    root : {
        maxWidth : 940,

        "& .MuiAccordion-root" : {
            boxShadow : "none",
            borderBottom : '1px solid lightgray',
            borderRadius : '0px !important',
        } ,
        "& .MuiAccordionSummary-root" : {
            cursor : 'pointer',
            minHeight : '0px !important',
            height : '90px !important',

            borderRadius : '0px !important',

            fontSize : 20,
            fontWeight : 'bold',

            display : 'flex', justifyContent : 'space-between', alignItems : 'center',
            "& svg" : {
                color : 'black !important'
            },
        },
        "& .MuiAccordionSummary-root.Mui-expanded" : {
            minHeight : '0px !important',
            height : '90px !important',
        },
        "& .MuiAccordionDetails-root" : {
            padding : 20
        },
    },
})) ;

const FAQItem = (props) => {
    const classes = useStyles() ;
    
    const {
        question,
        answer
    } = props ;

    const theme = useTheme() ;

    const [expanded, setExpanded] = React.useState(false) ;

    return (
        <Box className={classes.root}>
            <Accordion
                onChange={(e, expanded) => setExpanded(expanded)}
            >
                <AccordionSummary
                    expandIcon={!expanded ? <img src={ExpandImage} /> : <img src={ExpandImage} 
                        style={{    
                            transform: 'translate3d(0px, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(45deg) skew(0deg, 0deg)',
                            transformStyle:' preserve-3d'
                        }}
                    />}
                >
                    {question}
                </AccordionSummary>
                <AccordionDetails
                    sx={{padding : '0px', marginRight : '20px'}}
                >
                    {answer}
                </AccordionDetails>
            </Accordion>
        </Box>
       
    )
}

export default FAQItem ;