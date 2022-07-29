import * as React from 'react' ;

import { Routes, Route } from 'react-router-dom' ;

import StripeAccount from '../../components/Payment/StripeAccount';

const Payment  = () => {
    return (
        <Routes>
            <Route path='/stripe-account' element={<StripeAccount />} />
        </Routes>
    )
}

export default Payment ;