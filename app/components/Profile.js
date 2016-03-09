import React from 'react';
var createFragment = require('react-addons-create-fragment');

import Events from './Events/Events';
import Rebase from 're-base';

const base = Rebase.createClass('https://fundatmental.firebaseio.com');

class Profile extends React.Component {
    constructor(){
        super();
        this.state = {
            events: []
        }
    }
    componentDidMount(){
        this.ref = base.bindToState('users', {
            context: this,
            asArray: true,
            state: 'events'
        });
    }

    componentWillUnmount(){
        base.removeBinding(this.ref);
    }

    render(){
        console.log(this.state.events);
        return (
            <div className="row">
                <div className="col-md-4">
                    <ul>
                        {
                            this.state.events.map((item, index) => {
                              return <li key={ index }> { item.name } </li>
                            })
                        }
                    </ul>
                </div>
            </div>
        )
    }
}

export default Profile;