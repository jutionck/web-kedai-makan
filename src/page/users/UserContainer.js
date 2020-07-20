import React, {Component} from 'react';
import {getUsers} from "../../api/UserService";
import UserList from "./UserList";

class UserContainer extends Component {

    constructor(pros) {
        super(pros);
        this.state = {
            users : [],
            userID: "",
            username: "",
            firstName: "",
            lastName: "",
            password:""
        }
    }

    loadData = () => {
        getUsers().then(res => {
            this.setState({
                ...this.state, users: res.data
            })
        })
    }

    componentDidMount() {
        this.loadData()
    }

    render() {
        return (
            <div>
                <UserList users={this.state.users} isLoading={this.state.isLoading}/>
            </div>
        );
    }
}

export default UserContainer;