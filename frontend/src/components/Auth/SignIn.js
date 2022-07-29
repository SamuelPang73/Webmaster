import * as React from 'react' ;

import {useNavigate} from 'react-router-dom' ;

import { connect } from 'react-redux' ;
import PropTypes from 'prop-types' ;
import { SignInUser } from '../../redux/actions/auth';

import logoImage from '../../assets/auth/lemlist-logo.svg' ;
import swal from 'sweetalert';

import {
    Box,
    Grid,
    TextField,
    Button
} from '@mui/material' ;

import { useStyles } from './StyledDiv/SignIn.styles';

import { useTheme } from '@mui/styles';
import { sendEmailVerifyLink } from '../../email';

const SignIn = (props) => {
    const classes = useStyles() ;
    const theme = useTheme() ;
    const navigate = useNavigate() ;

    const {
        SignInUser
    } = props ;

    const [email, setEmail] = React.useState('') ;
    const [password, setPassword] = React.useState('') ;

    const handleSignInUser = async () => {
        let res  = await SignInUser(email, password) ;
        if(res) {
            if(res === 200) {
                navigate('/blog/create-blog') ;
            
                return swal({
                    title : 'Success',
                    text : 'Sign In successfully',
                    icon : 'success',
                    buttons: false,
                    timer : 5000,
                })
            }
            if(res.data.message === "Email isn't verified") {
                await sendEmailVerifyLink('http://10.10.10.186:3000/auth/email-verify?verify_code=' + res.data.code, email) ;

                return swal({
                    title : 'Warning',
                    text : res.data.message +"\nPlease, check email box.",
                    icon : 'warning',
                    buttons : false,
                    timer : 5000
                })
            }
            
            return swal({
                title : 'Warning',
                text : res.data.message,
                icon : 'warning',
                buttons : false,
                timer : 5000
            })
        }
        return swal({
            title : 'Failed',
            text  :'Sign In failed',
            icon :'error',
            buttons : false,
            timer : 5000
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
                        <Box>
                            <Box sx={{display : 'flex', alignItems : 'flex-end', gap : '15px', marginBottom : '30px'}}>
                                <Box sx={{fontSize: '30px', fontWeight:'bold', maxWidth : '250px'}}>
                                    Start getting <span style={{color : theme.palette.primary.main}}>more</span> replies to your cold emails
                                </Box>
                                <Box sx={{borderLeft : '2px solid lightgray', pl : '10px'}}>
                                    <Box sx={{color :'gray'}}>
                                        NO CREDIT CARDS REQUIRED
                                    </Box>
                                    <Box sx={{color : theme.palette.primary.main, fontWeight : 'bold'}}>
                                        14 DAYS FREE TRIAL
                                    </Box>
                                </Box>
                            </Box>
                            <TextField
                                size='medium'
                                label='Email'
                                name='email'
                                placeholder='Email Address'
                                focused
                                fullWidth
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                            />
                            <TextField
                                size='medium'
                                type={'password'}
                                label='Password'
                                name='email'
                                placeholder='Password'
                                focused
                                fullWidth
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                            />

                            <Box sx={{display : 'flex', justifyContent : 'flex-end', gap : '10px', alignItems:'center'}}>
                                <Box sx={{color : "#9a8ced", "&:hover" :{color : theme.palette.primary.main, textDecoration : 'underline', cursor : 'pointer'}}}
                                    onClick={() => navigate('/auth/forgot-password')}
                                >
                                    Forgot password?
                                </Box>
                                <Button variant='contained'
                                    disabled={
                                        !email || !password
                                    }
                                    onClick={handleSignInUser}
                                >Login</Button>
                            </Box>


                            <Box sx={{display : 'flex', gap : '10px', alignItems:'center',justifyContent : 'center', mt : '30px', mb : '20px'}}>
                                <Box sx={{border : '0.5px solid lightgray', width : 'calc(50% - 50px)'}} />
                                <Box sx={{color : 'gray'}}>
                                    or
                                </Box>
                                <Box sx={{border : '0.5px solid lightgray', width : 'calc(50% - 50px)'}} />
                            </Box>

                            <Box sx={{display : 'flex', justifyContent : 'center'}}>
                                <Button variant={'contained'}>Email magic link</Button>
                            </Box>
                            <Box sx={{border : '1px solid lightgray', mt : '100px', mb:'20px'}} />
                            
                            <Box sx={{display : 'flex', justifyContent : 'center', gap : '10px', alignItems : 'center'}}>
                                <Button variant={'contained'}
                                    onClick={() => {
                                        navigate('/auth/create-account')
                                    }}
                                >Create Account</Button>
                                <Box>
                                    If you don't have one
                                </Box>
                            </Box>
                        </Box>
                    </Box>
                </Grid>
            </Grid>
        </Box>
    )
}
SignIn.propTypes = {
    SignInUser : PropTypes.func.isRequired
}
const mapStateToProps = state => ({

})
const mapDispatchToProps = {
    SignInUser
}
export default connect(mapStateToProps, mapDispatchToProps) (SignIn) ;