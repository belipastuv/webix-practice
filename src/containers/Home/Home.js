import React, { useState } from 'react';
import classes from './Home.module.scss';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import {
    getHomeData
} from '../../selectors';
import { useMount, useUpdate } from '../../hooks';
import * as HomeActions from '../../redux/actions/homeAction';


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
            <h1 className={classes.red}>Home</h1>
            <ul>
                {zivko.map(post => {
                    return <li>
                        {post.title}
                    </li>
                })}
            </ul>
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
