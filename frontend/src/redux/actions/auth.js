import ActionTypes from './actionTypes' ;

import axios from 'axios' ;
import { api_origin } from '../../constants' ;
import { authorization, setCookie } from '../../utils/Helper' ;

export const SignUpUser = (first_name, last_name, email, password, company_name) => async dispatch => {
    try {
        let res = await axios.post(`${api_origin}/auth/signUp`, {
            first_name : first_name,
            last_name : last_name,
            email : email,
            password: password,
            company_name : company_name
        }) ;

        if(res.status === 200) {
            return true ;
        }

        return false ;
        
    } catch(err) {
        console.log(err) ;
        return false ;
    }
}

export const SignInUser = (email, password) => async dispatch => {
    try {
        let res = await axios.post(`${api_origin}/auth/signIn`, {
            email : email,
            password: password
        }) ;

        console.log(res) ;
        
        setCookie('access_token' , res.data.access_token) ;
        
        if(res.status === 200) {
            return 200 ;
        }

        if(res.status === 201) {
            return res ;
        }
        return false ;
    } catch(err) {
        
        return false ;
    }
}

export const UserProfile = () => async dispatch => {
    try {
        const header = authorization() ;
        
        let res = await axios.post(`${api_origin}/auth/userProfile`, {}, header) ;

        await dispatch({
            type : ActionTypes.UserProfile,
            payload : res.data.profile
        }) ;

        return true ;
    } catch(err) {
        console.log(err) ;
        return true ;
    }
}

export const CreateUserProfile = (profile) => async dispatch => {
    try {   
        const header = authorization() ;

        let fn = new FormData() ;

        fn.append('birthday', profile.birthday);
        fn.append('country', profile.country) ;
        fn.append('city', profile.city) ;
        fn.append('street', profile.street) ;
        fn.append('postal_code', profile.postal_code) ;
        fn.append('language', profile.language) ;
        fn.append('avatar_id', profile.avatar_id) ;

        if(profile.avatar.blob) fn.append(profile.avatar_id, profile.avatar.blob) ;

        let res = await axios.post(`${api_origin}/auth/createProfile`, fn, header) ;

        if(res.status === 200) {
            return true ;
        }

        return false ;
    } catch(err) {
        console.log(err) ;
        return false ;
    }
}

export const SendEmailVerifyCode = (verify_code) => async dispatch => {
    try {
        let res = await axios.post(`${api_origin}/auth/emailVerify`, {
            verify_code : verify_code
        }) ;

        return res.status ;
    } catch(err) {
        console.log(err) ;
        return false ;
    }
}

export const SendForgotCode = (email) => async dispatch => {
    try {
        let res = await axios.post(`${api_origin}/auth/forgotCode`, {
            email : email
        }) ;

        return res ;
    } catch(err) {
        console.log(err) ;
        return false ;
    }
}

export const PasswordChanged = (change_code, password) => async dispatch => {
    try {
        let res = await axios.post(`${api_origin}/auth/passwordChanged`, {
            change_code : change_code,
            new_password: password
        }) ;

        return res ;
    } catch(err) {
        console.log(err) ;
        return false ;
    }
}