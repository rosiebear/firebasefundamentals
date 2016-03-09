import React from 'react';
import EventsList from './EventsList';

const Events = ({events}) => {
    return (
        <div>
            <h3>Events</h3>
                <li className="list-group-item"> {events.email} </li>
        </div>
    )
};

Events.propTypes = {
    events: React.PropTypes.object.isRequired
}

export default Events;