import React from 'react';

const EventsList = ({name, email,}) => {
    return <li className="list-group-item"> {item} </li>
};

EventsList.propTypes = {
    name: React.PropTypes.string.isRequired
};
export default EventsList;