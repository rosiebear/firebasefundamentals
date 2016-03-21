import React from 'react';
import Input from 'react-bootstrap/lib/Input';

const SelectUser = (props) => {
    return (
        <Input type="select" placeholder="select" onChange={props.changeUser}>
            {
                props.users.map((item, index) => {
                    return (
                        <option value={item.key} key={index}>{item.name}</option>
                    )
                })
            }
        </Input>
    );
}

SelectUser.propTypes = {
    users: React.PropTypes.array.isRequired,
    changeUser: React.PropTypes.func.isRequired
}

export default SelectUser;