import React from 'react';
import AddSchedule from './Schedule/AddSchedule';
import Schedule from './Schedule/Schedule';
import Paper from 'material-ui/lib/paper';
import AppBar from 'material-ui/lib/app-bar';
import {black} from 'material-ui/lib/styles/colors';
import Rebase from 're-base';

const base = Rebase.createClass('https://fundamental.firebaseio.com');

const style = {
    paper: {
        width: 300,
        margin: 20,
        display: 'inline-block'
    },
    layout: {
        width: '100%',
        marginLeft: 'auto',
        marginRight: 'auto',
        overflow: 'hidden',
        background: '#f1f2f2',
        paddingBottom: 50
    },
    appBar: {
        backgroundColor: black
    }
};

class Dash extends React.Component {
    constructor(){
        super();
        let authData = base.getAuth();

        this.state = {
            schedules: [],
            user: authData.uid
        }
    }

    componentDidMount(){
        this.ref = base.bindToState(`schedules/${this.state.user}`, {
            context: this,
            asArray: true,
            state: 'schedules'
        });
    }
    componentWillUnmount(){
        base.removeBinding(this.ref);
    }

    handleAddSchedule(newSchedule){
        base.post(`schedules/${this.state.user}`, {
            data: this.state.schedules.concat([newSchedule]),
            then(e){
                if(e) {
                    console.log(e);
                } else {
                    console.log('schedule saved');
                }
            }
        });
    }
    render(){
        return (
            <div style={style.layout}>
                <AppBar style={style.appBar} title="home" />
                <Paper style={style.paper} zDepth={1}>
                    <AddSchedule addSchedule={(newSchedule) => this.handleAddSchedule(newSchedule)} />
                </Paper>
                {
                    this.state.schedules.map((schedule, index) => {
                        return (
                            <Paper key={index} style={style.paper} zDepth={1}>
                                <Schedule name={schedule.name} url={schedule.url} key={index}/>
                            </Paper>
                        )
                    })
                }
            </div>
        )
    }
}



export default Dash;