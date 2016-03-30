import React from 'react';
import Rebase from 're-base';

const base = Rebase.createClass('https://fundatmental.firebaseio.com');

class UserProfile extends React.Component {
    constructor(){
        super();
        this.state = {
            tweets: []
        }
    }
    componentDidMount(){
        this.userObjectsRef = base.bindToState(`userObjects/tweets/${this.props.params.userID}`, {
            context: this,
            asArray: true,
            state: 'tweets'
        });
    }
    componentWillUnmount(){
        base.removeBinding(this.userObjectsRef);
    }
    render(){
        console.log(this.state.tweets);
        let { userID } = this.props.params
        return (
            <div>
                <h1>User: {userID} </h1>
            </div>
        )
    }
}

export default UserProfile;