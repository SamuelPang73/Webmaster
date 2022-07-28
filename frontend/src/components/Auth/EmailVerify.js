import * as React from 'react' ;

import { useLocation, useSearchParams } from 'react-router-dom';

import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { SendEmailVerifyCode } from '../../redux/actions/auth';

import Loading from 'react-loading-components' ;

import {
    Box
} from '@mui/material' ;

import { useStyles } from './StyledDiv/EmailVerify.styles';
import {useTheme} from '@mui/styles';

const EmailVerify = (props) => {
    const classes = useStyles() ;
    const theme = useTheme() ;
    const {
        SendEmailVerifyCode
    } = props ;

    const [urlParams, setUrlParams] = useSearchParams() ;
    const [loading, setLoading] = React.useState(true) ;
    const [passed, setPassed] = React.useState(false) ;

    const failLoading = async () => {
        setPassed(false) ;
        setLoading(false) ;
    }

    const successLoading = async () => {
        setPassed(true) ;
        setLoading(false) ;
    }

    React.useEffect(async () => {
        if(urlParams) {
            if(!urlParams.get('verify_code')) {
                return failLoading() ;
            }

            let status = await SendEmailVerifyCode(urlParams.get('verify_code')) ;

            if(status === 200) {
                return successLoading() ;    
            }

            return failLoading() ;
            
        }
    }, [urlParams]) ;

    return (
        <Box className={classes.root}>
            {
                loading && <Box className={classes.verifyDiv}>
                    <Box className={classes.labelDiv}>
                        ... Email Verification
                    </Box>
                   <Loading type='oval' width={50} height={50} fill={theme.palette.primary.main} />
                </Box> 
            }
            {
                !loading && (
                    !passed ? <Box className={classes.verifyDiv}>
                        <Box className={classes.labelDiv}>
                            Verification Failed
                        </Box>
                    </Box> : <Box className={classes.verifyDiv}>
                        <Box className={classes.labelDiv}>
                            Verification Successed
                        </Box>
                    </Box>
                )
            }
        </Box>
    )
}

EmailVerify.propTypes = {
    SendEmailVerifyCode : PropTypes.func.isRequired
}
const mapStateToProps = state => ({

})
const mapDispatchToProps = {
    SendEmailVerifyCode
}
export default connect(mapStateToProps, mapDispatchToProps)(EmailVerify) ;