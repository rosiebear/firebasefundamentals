import React from 'react';
import Toolbar from 'material-ui/lib/toolbar/toolbar';
import ToolbarGroup from 'material-ui/lib/toolbar/toolbar-group';
import ToolbarTitle from 'material-ui/lib/toolbar/toolbar-title';
import SelectUser from './Events/SelectUser';

const NavBar = ({users, changeUser}) => (
    <Toolbar>
        <ToolbarTitle text="Bookd.in" />
        <ToolbarGroup firstChild={true} float="left">
            <SelectUser
                users={users}
                changeUser={changeUser} >
            </SelectUser>
        </ToolbarGroup>
    </Toolbar>
);

NavBar.propTypes = {
    users: React.PropTypes.array.isRequired,
    changeUser: React.PropTypes.func.isRequired
}

export default NavBar;