import React from 'react';
import Divider from 'material-ui/lib/divider';
import Paper from 'material-ui/lib/paper';
import TextField from 'material-ui/lib/text-field';
import RaisedButton from 'material-ui/lib/raised-button';
import FlatButton from 'material-ui/lib/flat-button';
import FontIcon from 'material-ui/lib/font-icon';

const style = {
    paper: {
        height: 400,
        width: 300,
        marginTop: 50,
        marginLeft: 'auto',
        marginRight: 'auto',
        marginBottom: 100,
        textAlign: 'left',
        fontFamily: 'Roboto',
        padding: 20,
        paddingTop: 3
    },
    button: {
        width: '100%',
        textAlign: 'center'
    },
    divider: {
        marginTop: 20,
        marginBottom: 20
    }
};

class Login extends React.Component {
    constructor() {
        super();

        this.state = {
            email: "",
            password: ""
        };

        this.changeEmail.bind(this);
        this.changePassword.bind(this);
    }

    changeEmail(e) {
        this.setState({email: e.target.value});
    }

    changePassword(e) {
        this.setState({password: e.target.value});
    }

    render() {
        return (
            <Paper style={style.paper} zDepth={2} rounded={true}>
                <h2 className="login-header">Login</h2>
                <TextField
                    hintText="Email Address"
                    onChange={this.changeEmail}
                /><br/>
                <TextField
                    hintText="Password"
                    type="password"
                    onChange={this.changePassword}
                /><br/><br/>
                <RaisedButton label="LOGIN" primary={true} />
                <FlatButton label="SIGN UP" secondary={true} />
                <Divider style={style.divider} />
                <RaisedButton
                    label="Sign in with Github"
                    linkButton={true}
                    href="https://github.com/callemall/material-ui"
                    secondary={true}
                    style={style.button}
                    icon={<FontIcon className="muidocs-icon-custom-github"/>}
                />
            </Paper>
        )
    }
}

export default Login;