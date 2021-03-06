'use strict';

import React, {Component} from 'react';

import Users from './Users';
import AddUser from './AddUser';

export default class AppContainer extends Component{
    constructor (props){
        super(props);
        this.state ={
            users: [{
                id: Date.now(),
                name: 'John'
            }]
        }
        // super(props);
    }
    addUser(user){
        this.setState(state=> ({
            users: state.users.concat({id: Date.now(),
                name: user.name})
        }))
    }


    render() {
        return <div>
            <h2>User App</h2>
            <AddUser addUser={user => this.addUser(user)}/>
            <Users users={this.state.users}/>
        </div>;
    }

    // render(){
    //     return <div>
    //         <h2>HELLO WORLD!</h2>
    //     </div>;
    // }
}