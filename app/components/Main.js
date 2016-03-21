import React from 'react';
import Rebase from 're-base';
import NavBar from './NavBar';

const base = Rebase.createClass('https://fundatmental.firebaseio.com');

class Main extends React.Component {
    constructor(){
        super();
        this.state = {
            users: []
        }
    }
    componentDidMount(){
        this.usersRef = base.bindToState('users', {
            context: this,
            asArray: true,
            state: 'users'
        });
    }
    componentWillUnmount(){
        base.removeBinding(this.usersRef);
    }
    handleChangeUser(e){
        this.props.history.push(`/user/${e.target.value}`);
        this.setState({selectedUser: e.target.value});
    }
    render() {
        return (
            <div>
                <NavBar
                    users={this.state.users}
                    changeUser={(e) => this.handleChangeUser(e)}>
                </NavBar>
                {this.props.children}
            </div>
        )
    }
}

export default Main;
