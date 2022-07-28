import React from 'react' ;

import { useState, useEffect, useMemo } from 'react' ;
import { useLocation, useNavigate } from 'react-router-dom' ;

import { connect } from 'react-redux' ;
import PropTypes from 'prop-types' ;
import { SendForgotCode } from '../../redux/actions/auth';

import logoImage from '../../assets/auth/lemlist-logo.svg' ;
import { errorEmailHelper } from '../../utils/Error';
import { sendChangePasswordLink } from '../../email';

import validator from 'validator';
import { api_origin } from '../../constants';

import {
    Box ,
    TextField ,
    Button ,
    Grid ,
    FormControl,
    MenuItem,
    Select,
    InputLabel,
} from '@mui/material' ;

import { useStyles } from './StyledDiv/ForgotPassword.styles';

const ForgotPassword = (props) => {

    const classes = useStyles() ;
    const {
        error ,

        SendForgotCode
    } = props ;

    const navigate = useNavigate() ;
    const location = useLocation() ;

    const [email, setEmail] = React.useState(null) ;

    const handleSendCode = async () => {
        let res = await SendForgotCode(email) ;

        if(res.status === 200) {
            await sendChangePasswordLink( 'http://10.10.10.186:3000/auth/change-password?change_code=' + res.data.code, email) ;
            
            navigate('/auth/signin') ;
            
            return swal({
                title : 'Success',
                text  :'Please, check your email box',
                buttons : false,
                timer : 5000,
                icon : 'success'
            })
        }

        navigate('/auth/signin') ;

        return swal({
            title : 'Failed',
            text  :'Reset code is not sent',
            buttons : false,
            timer : 5000,
            icon : 'error'
        })
    }

    return (
        <Box className={classes.root}>
            <Box className={classes.logoDiv} onClick={() => navigate('/')}>
                <img src={logoImage} width={40}/>
                <Box sx={{fontSize : '40px',color : 'white'}}>
                    lem<b>list</b>
                </Box>
            </Box>
            <Grid container>
                <Grid item xs={12} sx={{display : 'flex', justifyContent : 'center'}}>
                    <Box className={classes.formDiv}>
                        <Grid container spacing={3}>
                            <Grid item xs={12} >
                                <Box className={classes.titleDiv}>
                                    Forgot Password ?
                                </Box>
                            </Grid>
                            <Grid item xs={12}>
                                <TextField 
                                    fullWidth
                                    value={email || ''}
                                    onChange={(e) => setEmail(e.target.value)}
                                    helperText={errorEmailHelper(email)}
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <Box className={classes.buttonGroup}>
                                    <Button variant='contained'
                                        onClick={handleSendCode}
                                        disabled={
                                            !validator.isEmail(email || '')
                                        }
                                       
                                    >Send Reset Code</Button>
                                    <Button variant='contained'
                                        onClick={() => navigate('/auth/signin')}
                                    >Login</Button>
                                </Box>
                            </Grid>
                        </Grid>
                    </Box>
                </Grid>
            </Grid>
        </Box>
    )
}
ForgotPassword.propTypes = {
    SendForgotCode : PropTypes.func.isRequired
}
const mapStateToProps = state => ({
})

const mapDispatchToProps = {
    SendForgotCode
}

export default connect(mapStateToProps, mapDispatchToProps)(ForgotPassword) ;