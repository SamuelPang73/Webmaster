import * as React from 'react' ;

import { useLocation, useSearchParams } from 'react-router-dom';

import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { PasswordChanged } from '../../redux/actions/auth';

import Loading from 'react-loading-components' ;
import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';

import {
    Box,
    TextField,
    InputAdornment,
    Button
} from '@mui/material' ;

import { useStyles } from './StyledDiv/ChangePassword.styles';
import {useTheme} from '@mui/styles';
import { errorMandatoryHelper, errorPasswordHelper } from '../../utils/Error';

const ChangePassword = (props) => {
    const classes = useStyles() ;
    const theme = useTheme() ;
    const {
        PasswordChanged
    } = props ;

    const [urlParams, setUrlParams] = useSearchParams() ;
    const [loading, setLoading] = React.useState(false) ;
    const [password, setPassword] = React.useState('') ;
    const [passwordVisible, setPasswordVisible] = React.useState(false);
    const [succeeded, setSucceeded] = React.useState(null) ;

    const handleChangePassword = async () => {
        setLoading(true) ;

        let res = await PasswordChanged(urlParams.get('change_code'), password) ;

        if(res.status === 200) {
            setSucceeded(res.data.message) ;

        } else setSucceeded(res.data.message) ;

        setLoading(false) ;
    }

    return (
        <Box className={classes.root}>
            <Box className={classes.changeDiv}>
                {
                    loading ? <>
                        <Loading type='oval' width={50} height={50} fill={theme.palette.primary.main} />
                    </> : !succeeded ? <>
                            <Box className={classes.labelDiv}>
                                Change Password
                            </Box>
                            <TextField 
                                type={!passwordVisible ? 'password' : 'text'}
                                value={password}
                                fullWidth
                                onChange={(e) => setPassword(e.target.value)}
                                helperText={errorPasswordHelper(password)}

                                InputProps={{
                                        endAdornment: <InputAdornment position="end" sx={{cursor : 'pointer'}} onClick={() => setPasswordVisible(!passwordVisible)}>
                                        {
                                            !passwordVisible ? <VisibilityIcon/> : <VisibilityOffIcon/>
                                        }
                                    </InputAdornment>,
                                }}
                            />
                            <Button variant={'contained'}
                                onClick={handleChangePassword}
                            >
                                Change Password
                            </Button>
                        </> :<>
                        <Box className={classes.labelDiv}>
                            {succeeded}
                        </Box>
                    </>
                }
            </Box>   
        </Box>
    )
}

ChangePassword.propTypes = {
    PasswordChanged : PropTypes.func.isRequired
}
const mapStateToProps = state => ({

})
const mapDispatchToProps = {
    PasswordChanged
}
export default connect(mapStateToProps, mapDispatchToProps)(ChangePassword) ;