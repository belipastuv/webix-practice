import React, { useState } from 'react';
import classes from './Home.module.scss';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import {
    getHomeData
} from '../../selectors';
import Button from '../../components/Button';
import { useMount, useUpdate } from '../../hooks';
import * as HomeActions from '../../redux/actions/homeAction';
import { Container, Grid   } from '@material-ui/core';
import Input from '../../components/Input';
import { palette } from '@material-ui/system';
import logo from '../../resources/images/logo.png';
import Box from '@material-ui/core/Box';
import StampContainer from '../../components/StampContainer';

const Home = ({ getPosts, posts }) => {
    const [zivko, setZivko] = useState([]);

    useMount(() => {
        getPosts();
    })

    useUpdate(() => {
        setZivko(posts);
    }, [posts])

    return (
        <>
            <StampContainer>
                <Grid 
                    container
                    direction="column"
                    justify="center"
                    alignItems="center"
                    fixed
                    maxWidth={"lg"}
                >
                    <Grid item>
                        <img src={logo} className={classes.logo}/>
                    </Grid>
                    <Grid item>
                        <Box clone color="primary.main">
                            <Input placeholder="User Name" className={classes.meInput}></Input>
                        </Box>
                    </Grid>
                    <Grid item>
                        <Box clone color="primary.main">
                            <Input placeholder="Password" className={classes.meInput}></Input>
                        </Box>
                    </Grid>
                    <Grid item>
                        <Box 
                            mt={.6}
                            mb={5}
                            component="span"
                            color="accent.main" 
                            className={classes.link}
                        >
                            Forgot Password?
                        </Box>
                    </Grid>
                    <Grid item>
                        <Box clone bgcolor="primary.main">
                            <Button className={classes.logInBtn}>Log in</Button>
                        </Box>
                    </Grid>
                    <Grid item>
                        <Box 
                            component="span"
                            color="accent.main"
                            className={classes.link}
                            mt={.5}
                        >
                            Sign up
                        </Box>
                    </Grid>
                </Grid>
            </StampContainer>
        </>
    )
}


const mapStateToProps = state => ({
    posts: getHomeData(state).posts
});

const mapDispatchToProps = {
    getPosts: HomeActions.getPosts
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Home));
