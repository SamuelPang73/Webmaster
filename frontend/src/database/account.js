import { api_origin } from "../constants";
import axios from "axios";
import { authorization } from "../utils/Helper";
import { createAccountLink } from "../stripe/account_api";

export const CreateStripeAccount  = async (stripe_customer_id, stripe_account_id) => {
    try {
        const header = authorization() ;

        let res = await axios.post(`${api_origin}/user/createStripe`, {
            stripe_customer_id : stripe_customer_id,
            stripe_account_id : stripe_account_id
        }, header) ;
        
        if(res.status === 200) {
            let req_create_account_link  = {
                'account': stripe_account_id,
                'refresh_url': location.origin + '/payment/stripe-account',
                'return_url':   location.origin + "/payment/stripe-account",
                'type': 'account_onboarding'
            }
    
            let res_create_account_link = await createAccountLink(req_create_account_link) ;
    
            if(!res_create_account_link) {
                return 'create_account_link_error' ;
            }
    
            window.open(res_create_account_link.url, '_self') ;
            return 200 ;
        }
        return false ;
    } catch(err) {
        console.log(err) ;
        return false ;
    }
}

export const SubmitAccountDetail = async (stripe_account_id) => {
    try {
        let req_create_account_link  = {
            'account': stripe_account_id,
            'refresh_url': location.origin + '/payment/stripe-account',
            'return_url':   location.origin + "/payment/stripe-account",
            'type': 'account_onboarding'
        }

        let res_create_account_link = await createAccountLink(req_create_account_link) ;

        if(!res_create_account_link) {
            return 'create_account_link_error' ;
        }

        window.open(res_create_account_link.url, '_self') ;

        return 200 ;
    } catch(err) {
        console.log(err) ;
        return false ;
    }
}

export const IncStripeBalance = async (amount) => {
    try {
        const header = authorization() ;

        let res = await axios.post(`${api_origin}/user/incBalance`, {
            amount : amount
        }, header) ;

        if(res.status === 200) {
            window.open(location.origin + '/payment/stripe-account', '_self') ;

            return true ;
        }

        return false ;
    } catch(err) {
        console.log(err) ;
        return false ;
    }
}
