import * as React from 'react' ;

import { useSearchParams } from 'react-router-dom';

import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { UserProfile} from '../../redux/actions/auth';
import { CreateStripeAccount , SubmitAccountDetail,IncStripeBalance} from '../../database/account';

import StripeImage from '../../assets/payment/stripe.png' ;

import Loading from 'react-loading-components' ;

import { createCustomer } from '../../stripe/customer_api';
import { createAccount, retrieveAccount } from '../../stripe/account_api';
import { createPaymentIntent, retrievePaymentIntent } from '../../stripe/payment_api';

import { loadStripe } from "@stripe/stripe-js";

import {
    Elements,
} from "@stripe/react-stripe-js";

import PaymentCheckOut from './PaymentCheckOut';

import {
    Box,
    Button,
    Grid,
    TextField
} from '@mui/material' ;

import { useStyles } from './StyledDiv/StripeAccount.styles';
import { useTheme } from '@mui/styles' ;

const stripePromise =  loadStripe(process.env.REACT_APP_STRIPE_PUB_KEY);

const StripeAccount = (props) => {
    const classes = useStyles() ;
    const theme = useTheme() ;

    const {
        UserProfile,

        profile
    } = props ;

    const [urlParams, setUrlParams] = useSearchParams() ;
    const [status, setStatus] = React.useState('loading') ;
    const [loading, setLoading] = React.useState(false) ;
    const [payAmount, setPayAmount] = React.useState(0) ;
    const [clientSecret, setClientSecret] = React.useState(false) ;
    const [paymentId, setPaymentId] = React.useState(false) ;

    const appearance = {
        theme: 'stripe',

        variables: {
            colorPrimary: '#0570de',
            colorBackground: 'white',
            colorText: theme.palette.primary.main,
            colorDanger: '#df1b41',
            fontSizeBase : '20px',
            borderRadius: '4px',
        }
    };

    const options = {
        clientSecret,
        appearance,
    };

    const handleCreateAccount = async () => {
        setLoading(true) ;

        let req_create_customer = {
            name : profile.first_name + ' ' + profile.last_name,
            email : profile.email
        }

        let res_create_customer = await createCustomer(req_create_customer) ;

        let req_create_account = {
            "type" : "standard",
            "default_currency" : "usd",
        }

        let res_create_account = await createAccount(req_create_account) ;

        let api_result = await CreateStripeAccount(res_create_customer.id, res_create_account.id) ;

        if(api_result !== 200) {
            setLoading(false) ;

            return swal({
                title : 'Error',
                text : "Account Creation Failed",
                buttons : false,
                timer : 5000,
                icon : 'error'
            }) ; 
        }
    } 

    const handleSubmitDetail = async () => {
        setLoading(true) ;

        let api_result = await SubmitAccountDetail(profile.stripe_account_id) ;

        if(api_result == 'create_account_error') {
            setLoading(false) ;
            
            return swal({
                title : 'Error',
                text : "Account Creation Failed",
                buttons : false,
                timer : 5000,
                icon : 'error'
            }) ;
        }

        if(api_result === 'create_account_link_error')  {
            setLoading(false) ;

            return swal({
                title : 'Error',
                text : "Account Creation Failed",
                buttons : false,
                timer : 5000,
                icon : 'error'
            }) ;
        }
    }

    const handlePayWithCard = async () => {
        console.log(payAmount) ;


        let data = {
            "amount" : payAmount * 100,
            "currency"  : 'usd',
            "payment_method_types[]" : 'card',
            "customer" : profile.stripe_customer_id,
            "metadata[created_at]" : new Date().getTime() ,
            "metadata[creator_stripe_account_id]" : profile.stripe_account_id,
        } ;
        
        let res = await createPaymentIntent(data) ;


        if(res) {
            setClientSecret(res.client_secret) ;
            setPaymentId(res.id) ;
            
            return ;
        }
    }

    React.useEffect(async () => {
        if(urlParams.get('redirect_status') === 'succeeded') {
            let payment_intents = await retrievePaymentIntent(urlParams.get('payment_intent')) ;

            swal({
                title : 'Success',
                text : 'Your payment is successful',
                icon : 'success',
                buttons : false,
                timer : 5000
            }) ;

            setTimeout(async () => {
                await IncStripeBalance(payment_intents.amount / 100) ;
            } , 1500)
        }
    } ,[urlParams]) ;

    React.useEffect(() => {
        UserProfile() ;
    }, []) ;

    React.useEffect(async () => {
        if(profile) {
            if(!profile?.stripe_account_id) setStatus('not created') ;
            else {
                let stripeAccount = await retrieveAccount(profile.stripe_account_id) ;

                if(stripeAccount.details_submitted){
                    if(stripeAccount.capabilities?.transfers === 'pending') setStatus('pending') ;
                    else if(stripeAccount.capabilities?.transfers === 'active') setStatus('active') ;
                    else setStatus('inactive') ;
                } else setStatus('incomplete') ;
            }
        }
    }, [profile]) ;

    return (
        <Box className={classes.root}>
            <Box className={classes.titleDiv}>
                Create stripe account for payment
            </Box>
            <Box className={classes.balanceDiv}>
                Your stripe balance is <span style={{color : theme.palette.primary.main, fontWeight : 'bold'}}>${profile?.stripe_balance}</span>
            </Box>
            <Grid container spacing={5} sx={{mt : '40px'}}>
                <Grid item xs={6}>
                    <Box className={classes.imgDiv}>
                        <img src={StripeImage} />
                    </Box>
                </Grid>
                <Grid item xs={6}>
                    <Box className={classes.itemTitle}>You can deposit with any debit card</Box>
                    <Box className={classes.itemDescp}>
                        Millions of companies of all sizes—from startups to Fortune 500s—use Stripe’s software and APIs to accept payments, send payouts, and manage their businesses online.
                    </Box>
                </Grid>
                <Grid item xs={12}>
                    <Box className={classes.startDiv}>
                        {
                            !(clientSecret && paymentId) && <>
                                {
                                    status === 'loading' && <Loading type='oval' width={50} height={50} fill={theme.palette.primary.main} />
                                }
                                {
                                    status === 'not created' && <>
                                        <Box className={classes.startLabel}>Get Started With Stripe</Box>
                                        <Box className={classes.startDescp}>
                                            Create your stripe account
                                        </Box>
                                        <Button variant='contained'
                                            onClick={handleCreateAccount}
                                            disabled={loading}
                                            startIcon={ loading && <Loading type='tail_spin' width={20} height={20} fill='#10d51f' />}
                                        >Create Account</Button>
                                    </>
                                }
                                {
                                    status === 'incomplete' && <>
                                        <Box className={classes.startLabel}>Get Started With Stripe</Box>
                                        <Box className={classes.startDescp}>
                                            Submit account details
                                        </Box>
                                        <Button variant='contained'
                                            onClick={handleSubmitDetail}
                                            disabled={loading}
                                            startIcon={loading && <Loading type='tail_spin' width={20} height={20} fill='#10d51f' />}
                                        >Submit Details</Button>
                                    </>
                                }
                                {
                                    status === 'inactive' && <>
                                        <Box className={classes.startLabel}>Get Started With Stripe</Box>
                                        <Box className={classes.startDescp}>
                                            You can pay any debit card.
                                        </Box>
                                        <TextField
                                            type={'number'}
                                            value={payAmount}
                                            onChange={(e) => setPayAmount(e.target.value)}
                                        />
                                        <Button variant='contained'
                                            disabled={loading || payAmount <= 0}
                                            startIcon={loading && <Loading type='tail_spin' width={20} height={20} fill='#10d51f' />}
                                            onClick={handlePayWithCard}
                                        >
                                            Pay With Card
                                        </Button>
                                    </>
                                }
                            </>
                        }
                        {
                            (clientSecret && paymentId) &&  <Box className={classes.cardPaymentDiv}>
                                <Elements options={options} stripe={stripePromise}>
                                    <PaymentCheckOut
                                        clientSecret={clientSecret}
                                        id={paymentId}
                                    />
                                </Elements>
                            </Box>
                        }
                    </Box>
                </Grid>
            </Grid>
        </Box>
    )
}
StripeAccount.proptypes = {
    UserProfile : PropTypes.func.isRequired,
}
const mapStateToProps = state => ({
    profile : state.auth.profile
})
const mapDispatchToProps = {
    UserProfile,
}
export default connect(mapStateToProps, mapDispatchToProps)(StripeAccount) ;