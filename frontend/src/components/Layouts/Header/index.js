import * as React from 'react' ;

import { useNavigate } from 'react-router-dom' ;

import { connect } from  'react-redux' ;
import PropTypes from 'prop-types' ;
import { UserProfile } from '../../../redux/actions/auth' ;

import { eraseCookie, getCookie } from '../../../utils/Helper' ;

import LemlistImage from '../../../assets/dashboard/lemlist.png' ;
import UserImage from '../../../assets/auth/user.svg' ;

import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';

import ProductPopOver from './ProductPopOver';
import ResourcePopOver from './ResourcePopOver';
import SettingPopOver from './SettingPopOver';

import { api_origin } from '../../../constants';

import {
    Box,
    Button
} from '@mui/material' ;

import { makeStyles } from '@mui/styles';

const useStyles = makeStyles(() => ({
    root : {
        background : 'white',
        zIndex : 1000,
        height : 80,
        position : 'fixed',
        top : 0,
        width  :'100vw',

        display : 'flex', alignItems  :'center', justifyContent : 'space-around'
    },
    menuItemDiv : {
        display : 'flex', alignItems : 'center',
        "&:hover" : {
            color : '#4d19ff'
        },
        cursor : 'pointer',
        fontSize : 15
    },
    buttonCss : {
        textTransform : 'capitalize !important',
        height : '40px !important',
        paddingLeft: '30px !important',
        paddingRight : '30px !important',
        fontSize: '15px !important',
        borderRadius : '30px !important',
    }
})) ;

const Header = (props) => {
    const classes = useStyles() ;
    const navigate = useNavigate() ;
    
    const {
        UserProfile,
        profile 
    } = props ;

    const productAnchorRef = React.useRef(null);
    const resourceAnchorRef = React.useRef(null);
    const settingAnchorRef = React.useRef(null);

    const [ isOpenProductPop , setOpenProductPop ] = React.useState(false) ;
    const [ isOpenResourcePop , setOpenResourcePop ] = React.useState(false) ;
    const [ isOpenSettingPop , setOpenSettingPop ] = React.useState(false) ;

    const handleProductPopOver = () => {
        setOpenProductPop(!isOpenProductPop) ;
    }

    const handleResourcePopOver = () => {
        setOpenResourcePop(!isOpenResourcePop) ;
    }

    const handleSettingPopOver = () => {
        setOpenSettingPop(!isOpenSettingPop) ;
    }

    React.useEffect(() => {
        if(getCookie('access_token')) {
            UserProfile() ;
        }
    }, [getCookie('access_token')]) ;

    React.useEffect(() => {
    }, [profile]) ;

    return (
        <>
            <Box className={classes.root}>
                <Box sx={{display : 'flex', alignItems  :'center', justifyContent : 'flex-start', gap : '20px'}}>
                    <img src={LemlistImage} height={24}
                        onClick={() => navigate('/')}
                        style={{cursor : 'pointer'}}
                    />
                    <Box className={classes.menuItemDiv}
                        ref={productAnchorRef}
                        onClick={handleProductPopOver}
                    >
                        PRODUCT <ArrowDropDownIcon/>
                    </Box>
                    <Box className={classes.menuItemDiv}
                        onClick={() => navigate('/pricing')}
                    >
                        PRICING
                    </Box>
                    <Box className={classes.menuItemDiv}
                        ref={resourceAnchorRef}
                        onClick={handleResourcePopOver}
                        // onClick={() => navigate('/blog/list')}
                    >
                        BLOG 
                        <ArrowDropDownIcon/>
                    </Box>
                    
                </Box>
                {
                    !getCookie('access_token') ? <>
                        <Box sx={{display : 'flex', alignItems  :'center', justifyContent : 'flex-start', gap :"10px"}}>
                            <Button variant="outlined" className={classes.buttonCss} 
                                onClick={() => navigate('/auth/signin')}
                            >LOG IN</Button>
                            <Button variant="contained" className={classes.buttonCss}
                                onClick={() => navigate('/auth/create-account')}
                            >Start For Free</Button>
                        </Box>
                    </> : <>
                        <Box sx={{display : 'flex', alignItems  :'flex-end', justifyContent : 'flex-start', gap :"10px"}}>
                            <Button variant="outlined" className={classes.buttonCss} 
                                onClick={() => {
                                    eraseCookie('access_token') ;
                                    navigate('/auth/signin') ;
                                }}
                            >Sign Out</Button>
                            {
                                profile && <Box className={classes.menuItemDiv}
                                    ref={settingAnchorRef}
                                    onClick={handleSettingPopOver}
                                >
                                    <Box sx={{display : 'flex', flexDirection :"column", alignItems : 'center'}}>
                                        <img src={profile?.avatar_id ? `${api_origin}/files/avatars/${profile.avatar_id}` : UserImage} 
                                            style={{width : '30px',height : '30px', borderRadius : '50%'}}
                                        />
                                        <Box>
                                            {
                                                profile?.first_name + " " + profile?.last_name
                                            }
                                        </Box>
                                    </Box>
                                    <ArrowDropDownIcon/>
                                </Box>
                            }
                        </Box>
                    </>
                }
            </Box>

            <ProductPopOver
                open={isOpenProductPop}
                handleProductPopOver={handleProductPopOver}
                anchorEl={productAnchorRef ? productAnchorRef.current : null}
            />

            <ResourcePopOver
                open={isOpenResourcePop}
                handleResourcePopOver={handleResourcePopOver}
                anchorEl={resourceAnchorRef ? resourceAnchorRef.current : null}
            />

            <SettingPopOver
                open={isOpenSettingPop}
                handleSettingPopOver={handleSettingPopOver}
                anchorEl={settingAnchorRef ? settingAnchorRef.current : null}
            />
        </>
    )
}
Header.propTypes = {
    UserProfile : PropTypes.func.isRequired
}
const mapStateToProps = state => ({
    profile : state.auth.profile
})
const mapDispatchToProps = {
    UserProfile
}
export default connect(mapStateToProps, mapDispatchToProps)(Header) ;