import * as React from 'react' ;

import { Route, Routes } from 'react-router-dom';

import SignIn from '../../components/Auth/SignIn';
import CreateAccount from '../../components/Auth/CreateAccount';
import CreateProfile from '../../components/Auth/CreateProfile';
import EmailVerify from '../../components/Auth/EmailVerify';
import ForgotPassword from '../../components/Auth/ForgotPassword';
import ChangePassword from '../../components/Auth/ChangePassword';

const Auth = () => {
    return (
        <Routes>
            <Route path="/signin" element={<SignIn />} /> 
            <Route path="/create-account" element={<CreateAccount />} />
            <Route path="/profile/create" element={<CreateProfile />} />
            <Route path="/email-verify" element={<EmailVerify />} />
            <Route path='/forgot-password' element={<ForgotPassword />} />
            <Route path='/change-password' element={<ChangePassword />} />
        </Routes>
    )
}

export default Auth ;