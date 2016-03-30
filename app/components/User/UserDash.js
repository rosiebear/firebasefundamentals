import React from 'react';
import Rebase from 're-base';
import {grey50} from 'material-ui/lib/styles/colors';
import AppBar from 'material-ui/lib/app-bar';
import SelectUser from '../Events/SelectUser';

const base = Rebase.createClass('https://fundatmental.firebaseio.com');

class UserDash extends React.Component {
    constructor(){
        super();
        this.state = {
            users: []
        }
        this.handleChangeUser = this.handleChangeUser.bind(this)
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
        this.props.history.push(`/test/user/${e.target.value}`);
        this.setState({selectedUser: e.target.value});
    }

    getStyles() {
        const styles = {
            appBar: {
                backgroundColor: grey50
            }
        }
        return styles;
    }

    render(){
        const styles = this.getStyles();
        return (
            <div>
            <AppBar
                style={styles.appBar}
                title="home"
                iconElementRight={<SelectUser users={this.state.users} changeUser={this.handleChangeUser} />}
            />
                {this.props.children}
            </div>
        )
    }
}

export default UserDash;