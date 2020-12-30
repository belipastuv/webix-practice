import React from 'react';
import { Container   } from '@material-ui/core';
import classes from './Component.module.scss';


const StampContainer = ({children}) => {
    return (
        <>
            <Container fixed className={classes.stampWrapper}>{children}</Container>
        </>
    )
}  

export default StampContainer