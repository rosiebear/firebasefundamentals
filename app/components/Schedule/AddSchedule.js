import React from 'react';
import Card from 'material-ui/lib/card/card';
import CardTitle from 'material-ui/lib/card/card-title';
import CardActions from 'material-ui/lib/card/card-actions';
import RaisedButton from 'material-ui/lib/raised-button';
import CardText from 'material-ui/lib/card/card-text';
import TextField from 'material-ui/lib/text-field';

const style = {
    card: {
        button: {
            width: '100%'
        }
    }
}

class AddSchedule extends React.Component {
    constructor() {
        super();

        this.state = {
            schedule: {
                name: "",
                url: ""
            }
        };
    }

    changeScheduleName(e) {
        let newSchedule= {name: e.target.value, url: this.state.schedule.password}
        this.setState({
            schedule: newSchedule
        });
    }

    changeScheduleUrl(e) {
        let newSchedule= {name: this.state.schedule.name, url: e.target.value}
        this.setState({
            schedule: newSchedule
        });
    }

    handleSubmit(){
        this.props.addSchedule(this.state.schedule);
        this.state.schedule = {};
    }

    render() {
        return (
            <Card>
                <CardTitle title="Add New Schedule" />
                <CardText>
                    <TextField hintText="Schedule Name"
                       value={this.state.schedule.name}
                       onChange={(e) => this.changeScheduleName(e)}/>
                    <br/>
                    <TextField floatingLabelText="http://www.schduler.io/"
                       value={this.state.schedule.url}
                       onChange={(e) => this.changeScheduleUrl(e)}
                       hintText="Schedule URL"/>
                    <br/>
                </CardText>
                <CardActions>
                    <RaisedButton
                        onClick={() => this.handleSubmit()}
                        label="Add Schedule" primary={true} style={style.card.button}/>
                </CardActions>
            </Card>
        )
    }
}

export default AddSchedule;