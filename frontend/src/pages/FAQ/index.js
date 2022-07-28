import * as React from 'react' ;

import ContactDiv from '../../components/FAQ/ContactDiv';
import FAQs from '../../components/FAQ/FAQs';
import HelpDiv from '../../components/FAQ/HelpDiv';
import Articles from '../../components/FAQ/Articles';

const FAQ = () => {
    return (
        <>
            <ContactDiv />
            <Articles />
            <FAQs />
            <HelpDiv />
        </>
    )
}

export default FAQ ;