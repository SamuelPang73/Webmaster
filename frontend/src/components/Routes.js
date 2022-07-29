import React, { memo } from "react";

import { Routes , Route } from "react-router-dom";

import Dashboard from "../pages/Dashboard";
import Lemwarm from "../pages/Lemwarm";
import EmailDeliverability from "../pages/EmailDeliverability";
import Personalization from "../pages/Personalization";
import FollowUp from "../pages/FollowUp";
import Engagement from "../pages/Engagement";
import Integrations from "../pages/Integrations";
import Pricing from "../pages/Pricing";
import Blog from "../pages/Blog";
import FAQ from "../pages/FAQ";
import Auth from "../pages/Auth";
import Payment from "../pages/Payment";

// import NFTDashboard from "../pages/main";

const Routing = () => {
    return (
        <Routes>
            <Route path="/*" element={< Dashboard/>} />
            <Route path='/auth/*' element={<Auth />} />
            <Route path="/lemwarm" element={<Lemwarm />} />
            <Route path="/email-deliverability" element={<EmailDeliverability />} />
            <Route path="/personalization" element={<Personalization />} />
            <Route path="/follow-up" element={<FollowUp />} />
            <Route path="/sales-engagement" element={<Engagement />} />
            <Route path="/integrations" element={<Integrations />} />
            <Route path="/pricing" element={<Pricing />} />
            <Route path="/blog/*" element={<Blog />} />
            <Route path='/payment/*' element={<Payment />} />
            <Route path="/faq" element={<FAQ />} />
        </Routes>
    );
}
Routing.propTypes = {
};
export default memo(Routing);
