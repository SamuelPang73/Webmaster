import React from 'react' ;

import { useState, useEffect, useMemo } from 'react' ;
import { useLocation, useNavigate } from 'react-router-dom' ;

import { connect } from 'react-redux' ;
import PropTypes from 'prop-types' ;
import { CreateUserProfile, UserProfile } from '../../redux/actions/auth';

import validate from 'validate.js';
import countries from 'react-select-country-list'
import languages from 'language-list' ;
import clsx from 'clsx' ;
import logoImage from '../../assets/auth/lemlist-logo.svg' ;
import swal from 'sweetalert';
import {v4 as uuidv4} from 'uuid' ;

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

import { useStyles } from './StyledDiv/CreateProfile.styles';
import { api_origin } from '../../constants';

const schema = {
    city: {
        presence: { allowEmpty: false, message: 'is required' },
    },
    street: {
        presence: { allowEmpty: false, message: 'is required' },
    },
    country: {
        presence: { allowEmpty: false, message: 'is required' },
    },
    postal_code: {
        presence: { allowEmpty: false, message: 'is required' },
    },
    birthday : {
        presence: { allowEmpty: false, message: 'is required' },
    },
    language : {
        presence: { allowEmpty: false, message: 'is required' },
    }
};

const CreateProfile = (props) => {

    const classes = useStyles() ;
    const {
        error ,
        CreateUserProfile,
        UserProfile,

        profile
    } = props ;

    const languageList = useMemo(() => languages().getData()  , []) ;
    const countryList = useMemo(() => countries().getData() , []) ;
    const [avatar, setAvatar] = useState({
        preview : "",
        blob : ""
    })

    const navigate = useNavigate() ;
    const location = useLocation() ;

    const [formState, setFormState] = useState({
        isValid: false,
        values: {},
        touched: {},
        errors: {},
    });
    
    const handleChange = event => {
        setFormState(formState => ({
            ...formState,
            values: {
                ...formState.values,
                [event.target.name]:
                    event.target.type === 'checkbox'
                    ? event.target.checked
                    : event.target.value,
            },
            touched: {
                ...formState.touched,
                [event.target.name]: true,
            },
        }));
    };

    const hasError = field => formState.touched[field] && formState.errors[field] ? true : false;

    const handleSubmit = async() => {
        if(formState.isValid && avatar.preview) {
            if(await CreateUserProfile({
                ...formState.values,
                avatar : avatar,
                avatar_id : avatar.blob ? uuidv4() : profile?.avatar_id
            })) {
                navigate('/blog/list') ;
                return swal({
                    title : 'Success',
                    text : 'Your profile is created successfully',
                    icon : 'success',
                    buttons : false,
                    timer : 5000
                })
            } else return swal({
                title : 'Error',
                text : 'Profile creation is failed',
                icon : 'error',
                buttons : false,
                timer: 5000
            })
        }
        else return swal({
            title : 'Warning',
            text : 'Please, Fill all field',
            buttons : false,
            icon : 'warning',
            timer: 3000
        })
    }

    useEffect(()=>{
        const errors = validate(formState.values, schema);
        
        setFormState(formState => ({
          ...formState,
          isValid: errors ? false : true,
          errors: errors || {},
        }));
    
    }, [formState.values] );  

    useEffect(() => {
        UserProfile() ;
    }, []) ;

    useEffect(() => {
        if(profile?.is_profile_created) {
            setFormState(formState => ({
                ...formState,
                values : {
                    ...formState.values,
                    birthday : profile.birthday,
                    country : profile.country,
                    city : profile.city,
                    street : profile.street,
                    postal_code : profile.postal_code,
                    language : profile.language,
                    isValid: true,
                },
            }));

            setAvatar({
                preview : `${api_origin}/files/avatars/${profile.avatar_id}`,
                blob : ''
            })
        }
    }, [profile]) ;

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
                        <Box  className={classes.controls }>
                            <Grid container spacing={3}>
                                <Grid item xs={12} >
                                    <Box className={classes.titleDiv}>
                                        PROFILE
                                    </Box>
                                </Grid>
                                <Grid item xs={6}>
                                    <Box className={classes.labelDiv}>Country</Box>
                                    <FormControl fullWidth>
                                        <Select
                                            name={"country"}
                                            value={formState.values.country || countryList[0].label}
                                            onChange={handleChange}
                                        >
                                            {
                                                countryList.map( (country , index) => {
                                                    return (
                                                        <MenuItem value={country.label} key={index}>{country.label}</MenuItem>
                                                    )
                                                } )
                                            }
                                        </Select>
                                    </FormControl>
                                </Grid>
                                <Grid item xs={6}>
                                    <Box className={classes.labelDiv}>City</Box>
                                    <TextField
                                        name={"city"}
                                        type={"text"}
                                        placeholder={"City"}

                                        helperText={
                                            hasError('city') ? formState.errors.city[0] : null
                                        }
                                        error={hasError('city')}
                                        onChange={handleChange}
                                        value={formState.values.city || ''}
                                    />
                                </Grid>

                                <Grid item xs={6}>
                                    <Box className={classes.labelDiv}>Street</Box>
                                    <TextField
                                        name={"street"}
                                        type={"text"}
                                        placeholder={"Street"}

                                        helperText={
                                            hasError('street') ? formState.errors.street[0] : null
                                        }
                                        error={hasError('street')}
                                        onChange={handleChange}
                                        value={formState.values.street || ''}
                                    />
                                </Grid>
                                <Grid item xs={6}>
                                    <Box className={classes.labelDiv}>Postal Code</Box>
                                    <TextField
                                        name={"postal_code"}
                                        type={"text"}
                                        placeholder={"Postal code"}

                                        helperText={
                                            hasError('postal_code') ? formState.errors.postal_code[0] : null
                                        }
                                        error={hasError('postal_code')}
                                        onChange={handleChange}
                                        value={formState.values.postal_code || ''}
                                        
                                    />
                                </Grid>
                                
                                <Grid item xs={6}>
                                    <Box className={classes.labelDiv}>Birthday</Box>
                                    <TextField
                                        name={'birthday'}
                                        type={'date'}
                                        
                                        helperText={
                                            hasError('birthday') ? formState.errors.birthday[0] : null
                                        }
                                        error={hasError('birthday')}
                                        onChange={handleChange}
                                        value={formState.values.birthday || ''}
                                    />
                                </Grid>
                                <Grid item xs={6}>
                                    <Box className={classes.labelDiv}>Language</Box>
                                    <FormControl fullWidth>
                                        <Select
                                            name={"language"}
                                            value={formState.values.language || languageList[0].language}
                                            onChange={handleChange}
                                        >
                                            {
                                                languageList.map( (language , index) => {
                                                    return (
                                                        <MenuItem value={language.language} key={index}>{language.language}</MenuItem>
                                                    )
                                                } )
                                            }
                                        </Select>
                                    </FormControl>
                                </Grid>

                                <Grid item xs={6}>
                                    <Box className={classes.labelDiv}>Avatar</Box>
                                    <Box sx={{mb : '20px'}}>
                                        <InputLabel htmlFor={"upload-avatar-image"} >
                                            {
                                                !avatar?.preview ? <Box className={classes.avatarDiv}>
                                                    Upload Avatar
                                                </Box> : <Box className={classes.avatarDiv}>
                                                    <img src={avatar.preview} width={'100%'} />
                                                </Box>
                                            }
                                        </InputLabel>
                                        <input
                                            type="file"
                                            id={"upload-avatar-image"}
                                            style={{ display: "none" }}
                                            onChange={(e) => {
                                                setAvatar({
                                                    preview : URL.createObjectURL(e.target.files[0]),
                                                    blob : e.target.files[0]
                                                })
                                            }}
                                        />
                                    </Box>
                                </Grid>
                                <Grid item xs={12} sx={{display : 'flex', justifyContent : 'flex-start'}}>
                                    <Button variant='contained' onClick={() => handleSubmit()}>Save</Button>
                                </Grid>
                            </Grid>
                        </Box>
                    </Box>
                </Grid>
            </Grid>
        </Box>
    )
}
CreateProfile.propTypes = {
    CreateUserProfile : PropTypes.func.isRequired,
    UserProfile : PropTypes.func.isRequired
}
const mapStateToProps = state => ({
    profile : state.auth.profile
})

const mapDispatchToProps = {
    CreateUserProfile,
    UserProfile
}

export default connect(mapStateToProps, mapDispatchToProps)(CreateProfile) ;