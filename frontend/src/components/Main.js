import * as React from 'react' ;

import { useLocation } from 'react-use';

import { connect } from 'react-redux';
import PropTypes from 'prop-types' ;

import Header from './Layouts/Header' ;
import Footer from './Layouts/Footer' ;

import Routing from './Routes';

import {
    Box
} from '@mui/material' ;

import { makeStyles } from '@mui/styles';

const useStyles = makeStyles(() => ({
    root : {
        marginTop : 80
    }
}))

const Main = (props) => {
    const classes = useStyles() ;
    const location = useLocation() ;

    React.useEffect(() => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        });
    }, [location]) ;

    return (
        <Box className={classes.root}>
            {
                !(location.pathname.search('/auth') >= 0) && <Header />
            }
            <Routing />
            {
                !(location.pathname.search('/auth') >= 0) && <Footer /> 
            }
        </Box>
    )
}

Main.propTypes = {
}
const mapStateToProps = state => ({

}) ;
const mapDispatchToProps = {
} ;

export default connect(mapStateToProps, mapDispatchToProps)(Main) ;