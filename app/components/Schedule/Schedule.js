import React from 'react';
import Card from 'material-ui/lib/card/card';
import CardActions from 'material-ui/lib/card/card-actions';
import CardHeader from 'material-ui/lib/card/card-header';
import CardMedia from 'material-ui/lib/card/card-media';
import CardTitle from 'material-ui/lib/card/card-title';
import FlatButton from 'material-ui/lib/flat-button';
import CardText from 'material-ui/lib/card/card-text';

const Schedule = (props) => (
    <Card>
        <CardTitle title={props.name} />
        <CardText>
            {props.url}
        </CardText>
        <CardActions>
            <FlatButton label="Add Client Member" />
            <FlatButton label="Add Team Member" />
        </CardActions>
    </Card>
);

Schedule.propTypes = {
    name: React.PropTypes.string.isRequired,
    url: React.PropTypes.string.isRequired
}

export default Schedule;