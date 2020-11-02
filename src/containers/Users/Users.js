import React, { useState } from 'react';
import styles from './Users.module.scss';
import Button from '../../components/Button';
import { withRouter } from 'react-router-dom';
import { useUpdate } from '../../hooks';
import { connect } from 'react-redux';
import {
    usersData
} from '../../selectors';
import * as UsersActions from '../../redux/actions/usersAction';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import Container from '@material-ui/core/Container';


const useStyles = makeStyles({
    table: {
        minWidth: 650,
    },
});

const Users = ({ getUsers, users }) => {
    const [userList, setUserList] = useState([]);

    const classes = useStyles();

    const getUsersFromAPI = () => {
        getUsers();
    }
    useUpdate(() => {
        setUserList(users);
    }, [users]);
    return (
        <Container>
            <h1 className={styles.users}>
                Users
            </h1>

                <TableContainer component={Paper}>
                    <Table className={classes.table} aria-label="simple table">
                        <TableHead>
                            <TableRow>
                                <TableCell>Name</TableCell>
                                <TableCell align="right">Username</TableCell>
                                <TableCell align="right">Email</TableCell>
                                <TableCell align="right">Phone</TableCell>
                                <TableCell align="right">Website</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {users ? users.map((row) => (
                                <TableRow key={row.name}>
                                    <TableCell component="th" scope="row">
                                        {row.name}
                                    </TableCell>
                                    <TableCell align="right">{row.username}</TableCell>
                                    <TableCell align="right">{row.email}</TableCell>
                                    <TableCell align="right">{row.phone}</TableCell>
                                    <TableCell align="right">{row.website}</TableCell>
                                </TableRow>
                            )) : 'Currently no users'}
                        </TableBody>
                    </Table>
                </TableContainer>

            <Button onClick={getUsersFromAPI} className={styles.buttonCustom}>
                Get Users
            </Button>
        </Container>
    )
}

const mapStateToProps = state => ({
    users: usersData(state).users
});

const mapDispatchToProps = {
    getUsers: UsersActions.getUsers
};


export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Users));