import React from 'react';
import SelectUser from './Events/SelectUser';

const NavBar = ({users, selectedUser, changeUser}) => {
    return (
        <nav className="navbar navbar-inverse navbar-fixed-top" role="navigation">
            <div className="container-fluid">
                <div className="navbar-header">
                    <button type="button" className="navbar-toggle collapsed" data-toggle="collapse"
                            data-target="#sidebar-collapse">
                        <span className="sr-only">Toggle navigation</span>
                        <span className="icon-bar"></span>
                        <span className="icon-bar"></span>
                        <span className="icon-bar"></span>
                    </button>
                    <a className="navbar-brand" href="#"><span>Lumino</span>Admin</a>
                    <div className="user-menu">
                        <SelectUser
                            users={users}
                            changeUser={changeUser} >
                        </SelectUser>
                    </div>
                </div>
            </div>
        </nav>
    )
}

NavBar.propTypes = {
    users: React.PropTypes.array.isRequired,
    changeUser: React.PropTypes.func.isRequired
}

export default NavBar;