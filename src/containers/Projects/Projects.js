import React, { useState } from 'react';
import classes from './Projects.module.scss';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { useMount, useUpdate } from '../../hooks';
import * as HomeActions from '../../redux/actions/homeAction';
import { Container, Grid   } from '@material-ui/core';
import { palette } from '@material-ui/system';
import Box from '@material-ui/core/Box';
import StampContainer from '../../components/StampContainer';
import Sidebar from '../../components/Sidebar';
import Navbar from '../../components/Navbar';

const Projects = ({ }) => {
    return (
        <>
            <Navbar></Navbar>
            <StampContainer>
                <Grid 
                    container
                    justify="center"
                    alignItems="center"
                    fixed
                    maxWidth={"lg"}
                >
                    <Grid item>

                    </Grid>
                </Grid>
            </StampContainer>
            <Sidebar></Sidebar>
        </>
    )
}


export default withRouter((Projects));
