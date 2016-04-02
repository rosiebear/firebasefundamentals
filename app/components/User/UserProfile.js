import React from 'react';
import Rebase from 're-base';

const base = Rebase.createClass('https://fundamental.firebaseio.com');

class UserProfile extends React.Component {
    constructor(){
        super();
        this.state = {
            schedules: []
        }
    }
    componentDidMount(){
        this.userObjectsRef = base.bindToState(`schedules/${this.props.params.userID}`, {
            context: this,
            asArray: true,
            state: 'schedules'
        });
    }
    componentWillUnmount(){
        base.removeBinding(this.userObjectsRef);
    }
    render(){
        console.log(this.state.schedules);
        let { userID } = this.props.params
        return (
            <div>
                <h1>User: {userID} </h1>
            </div>
        )
    }
}

export default UserProfile;