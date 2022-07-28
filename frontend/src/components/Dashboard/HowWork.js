import * as React from 'react' ;

import Avatar1 from '../../assets/blog/avatar_1.jpg' ;

import CheckIcon from '@mui/icons-material/Check';

import { 
    Box, 
    Grid,
    Button
} from '@mui/material';

import { useStyles } from './StyledDiv/HowWork.styles';
import { useTheme } from '@mui/styles';

const HowWork = () => {
    const classes = useStyles() ;
    const theme = useTheme() ;

    return (
        <Box className={classes.root}>
            <Grid container>
                <Grid item xs={12} sx={{textAlign : 'center', fontSize : '45px', fontWeight : 'bold', marginBottom : '20px'}}>
                    How does it work?
                </Grid>
            </Grid>
            <Grid container spacing={5}>
                <Grid item xs={4}>
                    <Box className={classes.cardDiv}>
                        <Box className={classes.mainCardDiv}>
                            <Button variant='contained'>Get Started</Button>
                        </Box>
                        <Box sx={{fontSize : 15, color : theme.palette.primary.main, fontWeight : 'bold'}}>STEP 1</Box>
                        <Box className={classes.titleDiv}>Setup</Box>
                        <Box className={classes.contentDiv}>
                            Create your unique website in minutes. Connect your Social Media accounts and add your services.
                        </Box>
                    </Box>
                </Grid>
                <Grid item xs={4}>
                    <Box className={classes.cardDiv}>
                        <Box className={classes.mainCardDiv}>
                            <Box className={classes.smallCardDiv}>
                                <Box sx={{display : 'flex', gap : '20px'}}>
                                    <img src={Avatar1} width={50} height={50} style={{borderRadius : '50%'}}/>
                                    <Box>
                                        <Box sx={{fontWeight : 'bold', fontSize:  '20px'}}>
                                            Haily
                                        </Box>
                                        <Box sx={{color : theme.palette.primary.main, cursor : 'pointer', "&:hover":{textDecoration : 'underline'}}}>
                                            creatble.io/haileyra
                                        </Box>
                                    </Box>
                                </Box>
                            </Box>
                        </Box>
                        <Box sx={{fontSize : 15, color : theme.palette.primary.main, fontWeight : 'bold'}}>STEP 2</Box>
                        <Box className={classes.titleDiv}>Share Link</Box>
                        <Box className={classes.contentDiv}>
                            Put your new website link in your Social Media bios and send your bookings link to advertising clients.
                        </Box>
                    </Box>
                </Grid> 
                <Grid item xs={4}>
                    <Box className={classes.cardDiv}>
                        <Box className={classes.mainCardDiv}>
                            <Box className={classes.smallCardDiv}>
                                <Box sx={{display : 'flex', gap : '20px', alignItems : 'center'}}>
                                    <Box className={classes.checkDiv}>
                                        <CheckIcon />
                                    </Box>
                                    <Box sx={{fontWeight : 'bold', fontSize : '18px'}}>
                                        Nike accepted your proposal for $30,000
                                    </Box>
                                </Box>
                            </Box>
                        </Box>
                        <Box sx={{fontSize : 15, color : theme.palette.primary.main, fontWeight : 'bold'}}>STEP 3</Box>
                        <Box className={classes.titleDiv}>Make Money</Box>
                        <Box className={classes.contentDiv}>
                            That's it! Brands and agencies can now easily find and book you. Enjoy making more money in less time.
                        </Box>
                    </Box>
                </Grid>
            </Grid>
        </Box>
    )
}

export default HowWork ;