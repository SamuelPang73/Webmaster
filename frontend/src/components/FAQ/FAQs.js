import * as React from 'react';

import FAQItem from './FAQItem';

import {
    Box,
    Grid,
} from '@mui/material' ;

import { useStyles } from './StyledDiv/FAQs.styles';
import { useTheme } from '@mui/styles';

const FAQs = () => {
    const classes = useStyles() ;
    const theme =  useTheme() ;

    const questionList = [
        {
            question : "Can I upgrade/downgrade whenever I want?",
            answer : "Absolutely. Note that lemlist works based on the prorate model. We will always charge you only for what you have used. For example, if you downgrade in October - we will prorate on the November invoice and take off the amount you did not spend."
        },
        {
            question : "Can I cancel my plan anytime?",
            answer : "Yes, you can. Just go to the billing section and click on “Cancel your account”."
        },
        {
            question : "Will I be charged automatically after the free trial ends?",
            answer : "No! Once your free trial expires, we'll ask you to add your credit card and choose the package first. What happens next is up to you."
        },
        {
            question : "Is tax included in all the prices?",
            answer : "It isn't. Additional taxes may apply depending on your country."
        },
        {
            question : "Is it possible to have multiple emails under one account?",
            answer : "Of course. Both packages involve the option to invite teammates into your account. Keep in mind that you will be charged per user (one user = one email)."
        },
        {
            question : "Can I test all the features during free trial?",
            answer : "Yes, you can test anything you like outside lemwarm, sending more than 50 emails per day, creating lemlist teams and using the Dropcontact native integration."
        },
        {
            question : "What’s the difference between “Email outreach” & “Sales engagement”?",
            answer : "The difference is that “Sales engagement” allows you to add cold calls and social selling to your campaigns. For example, you can send a cold email and then cold call your prospect. All in one sequence, directly in lemlist."
        },
        {
            question : "How to get in touch with Sales or Support?",
            answer : "Looking forward to connecting with you. In your lemlist dashboard, you will notice the HELP section. Open it and select CHAT WITH US. Alternatively, you can send an email at ena@lemlist.com."
        },
        {
            question : "Where you can watch lemlist tutorials?",
            answer : "A few useful links: Help Center, Video Blog and lemlist Blog"
        }
    ]

    return (
        <Grid container spacing={5} sx={{pt : '80px'}}>
            <Grid item xs={12} sx={{display : 'flex', alignItems : 'center', flexDirection : 'column',}}>
                <Box sx={{fontSize : '48px', fontWeight: 'bold', textAlign : 'center'}}>
                   FAQ
                </Box>
            </Grid>
            <Grid item xs={12} sx={{display : 'flex', justifyContent : 'center'}}>
                <Box>
                    {
                        questionList.map((item, index) => (
                            <FAQItem
                                question={item.question}
                                answer={item.answer}
                                key={index}
                            />
                        ))
                    }
                </Box>
            </Grid>
        </Grid>
    )
}

export default FAQs ;