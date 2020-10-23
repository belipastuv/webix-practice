import React, {useState} from 'react';
import styles from './Users.module.scss';
import Button from '../../components/Button';
import { withRouter } from 'react-router-dom';
import { useMount, useUpdate } from '../../hooks';
import { connect } from 'react-redux';
import {
    usersData
} from '../../selectors';
import * as UsersActions from '../../redux/actions/usersAction';

const Users = ({getUsers, users}) => {
    const [userList, setUserList] = useState([]);

    const getUsersFromAPI = () => {
        getUsers();
    }
    useUpdate(()=>{
        setUserList(users);
    },[users]);
    return (
        <>
            <h1 className={styles.users}>
                Users
            </h1>
        
            <ul>
                {userList ? userList.map(user =>{
                    return <li>
                        {user.name}
                    </li>
                }) : null}
            </ul>
            
            <Button onClick={getUsersFromAPI} className={styles.buttonCustom}>
                Get Users
            </Button>
        </>
    )
}

const mapStateToProps = state => ({
    users: usersData(state).users
});

const mapDispatchToProps = {
    getUsers: UsersActions.getUsers
};


export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Users));