import React, {Component} from 'react';
import {Table} from "react-bootstrap/cjs";

class UserList extends Component {
    render() {
        let { users, isLoading } = this.props
        console.log(users)

        if(isLoading) {
            return <div className="spinner-border text-success" role="status">
                <span className="sr-only">Loading...</span>
            </div>
        }

        let user = users.map((user, index) => {
            return <tr key={index}>
                <td>{index+1}</td>
                <td>{user.userID}</td>
                <td>{user.username}</td>
                <td>{user.firstName}</td>
                <td>{user.lastName}</td>
                <td>{user.password}</td>
            </tr>
        })

        return (
            <>
                <h3>User List</h3>
                <Table striped bordered hover>
                    <thead>
                    <tr>
                        <th>No</th>
                        <th>User ID</th>
                        <th>Username</th>
                        <th>Firstname</th>
                        <th>Lastname</th>
                        <th>Password</th>
                    </tr>
                    </thead>
                    <tbody>
                    {user}
                    </tbody>
                </Table>
            </>
        );
    }
}

export default UserList