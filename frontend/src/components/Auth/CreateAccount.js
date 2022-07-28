import * as React from 'react' ;

import {useNavigate} from 'react-router-dom' ;

import { connect } from 'react-redux' ;
import PropTypes from 'prop-types' ;
import { SignUpUser } from '../../redux/actions/auth';

import validator from 'validator';

import ReCAPTCHA from 'react-google-recaptcha' ;
import logoImage from '../../assets/auth/lemlist-logo.svg' ;
import swal from 'sweetalert';

import {
    Box,
    Grid,
    TextField,
    Button,
    FormGroup,
    Checkbox,
    FormControlLabel
} from '@mui/material' ;

import { useStyles } from './StyledDiv/CreateAccount.styles';
import { useTheme } from '@mui/styles';

const CreateAccount = (props) => {
    const classes = useStyles() ;
    const theme = useTheme() ;
    const navigate = useNavigate() ;

    const {
        SignUpUser
    } = props ;
    
    const [email, setEmail] = React.useState('') ;
    const [first_name, setFirstName] = React.useState('') ;
    const [last_name, setLastName] = React.useState('') ;
    const [company_name, setCompanyName] = React.useState('') ;
    const [password, setPassword] = React.useState('');
    const [confirm_password, setConfirmPassword] = React.useState('') ;

    const [agree_term, setAgreeTerm] = React.useState(false) ;
    const [privacy_policy, setPrivacyPolicy] = React.useState(false) ;
    const [recaptcha, setRecaptcha] = React.useState(false) ;

    const handleSignUpUser = async () => {
        if(password !== confirm_password) {
            return  swal({
                title : 'Failed',
                text : 'Password is not matched',
                icon : 'error',
                buttons : false,
                timer: 5000
            })
        }
        if( await SignUpUser(first_name, last_name, email, password, company_name) ) {
            navigate('/auth/signin') ;
            
            return swal({
                title : 'Success',
                text : 'Your account is created successfully',
                icon : 'success',
                buttons : false,
                timer: 5000
            }) ;
        };
        return swal({
            title : 'Failed',
            text : 'Your account creation is failed',
            icon : 'error',
            buttons : false,
            timer: 5000
        }) ;
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
                            <Grid container>
                                <Grid item xs={6}>
                                    <TextField
                                        size='medium'
                                        placeholder='First Name'
                                        focused
                                        fullWidth
                                        value={first_name}
                                        onChange={(e) => setFirstName(e.target.value)}
                                    />
                                </Grid>
                                <Grid item xs={6}>
                                    <TextField
                                        size='medium'
                                        placeholder='Last Name'
                                        focused
                                        fullWidth
                                        value={last_name}
                                        onChange={(e) => setLastName(e.target.value)}
                                    />
                                </Grid>
                                <Grid item xs={6}>
                                    <TextField
                                        size='medium'
                                        placeholder='Email Address'
                                        focused
                                        fullWidth
                                        value={email}
                                        onChange={(e) => setEmail(e.target.value)}
                                    />
                                </Grid>
                                <Grid item xs={6}>
                                    <TextField
                                        size='medium'
                                        placeholder='Company Name'
                                        focused
                                        fullWidth
                                        value={company_name}
                                        onChange={(e) => setCompanyName(e.target.value)}
                                    />
                                </Grid>
                                <Grid item xs={6}>
                                    <TextField
                                        size='medium'
                                        placeholder='Password'
                                        type={'password'}
                                        focused
                                        fullWidth
                                        value={password}
                                        onChange={(e) => setPassword(e.target.value)}
                                    />
                                </Grid>
                                <Grid item xs={6}>
                                    <TextField
                                        size='medium'
                                        type={'password'}
                                        placeholder='Confirmation'
                                        focused
                                        fullWidth
                                        value={confirm_password}
                                        onChange={(e) => setConfirmPassword(e.target.value)}
                                    />
                                </Grid>
                                <Grid item xs={12} sx={{p : '20px'}}>
                                    <FormGroup row >
                                        <FormControlLabel
                                            control={
                                                <Checkbox
                                                    color="primary"
                                                    checked={agree_term}
                                                    onChange={(e) => setAgreeTerm(e.target.checked)}
                                                />
                                            }
                                            label={<span >I agree to the lemlist <a href='#'>Terms of Use</a></span>}
                                        />
                                    </FormGroup>
                                    <FormGroup row >
                                        <FormControlLabel
                                            control={
                                                <Checkbox
                                                    color="primary"
                                                    checked={privacy_policy}
                                                    onChange={(e) => setPrivacyPolicy(e.target.checked)}
                                                />
                                            }
                                            label={<span>I understand that my account information will be used according to lemlist <a href="#">Privacy Policy</a></span>}
                                        />
                                    </FormGroup>
                                </Grid>

                                <Grid item xs={12}>
                                    <Box sx={{p : '20px'}}>
                                        <ReCAPTCHA 
                                            sitekey='6LeKxQwaAAAAAGPOpMltsXMf5Jv5s8_iuIPgn7jA'
                                            onChange={(value) => setRecaptcha(value) }
                                        />
                                        <Button variant='contained' sx={{mt : '10px'}}
                                            onClick={handleSignUpUser}
                                            disabled={
                                                !validator.isEmail(email || '') || !email
                                                || !password || !first_name || !last_name
                                                || !company_name || !privacy_policy || !agree_term
                                                || !recaptcha
                                            }
                                        >
                                            Create Account
                                        </Button>
                                    </Box>
                                </Grid>
                            </Grid>
                            <Box sx={{border : '1px solid lightgray', mt : '30px', mb:'20px'}} />
                            
                            <Box sx={{textAlign : 'center'}}
                                onClick={() => {
                                    navigate('/auth/signin')
                                }}
                            >
                                or simply <Button variant={'contained'}>login</Button> if you already have an account
                            </Box>
                        </Box>
                    </Box>
                </Grid>
            </Grid>
        </Box>
    )
}
CreateAccount.propTypes = {
    SignUpUser : PropTypes.func.isRequired
}
const mapStateToProps = state => ({

})
const mapDispatchToProps = {
    SignUpUser
}
export default connect(mapStateToProps, mapDispatchToProps) (CreateAccount) ;