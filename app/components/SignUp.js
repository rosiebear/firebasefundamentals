import React from 'react';
import Rebase from 're-base';
import Divider from 'material-ui/lib/divider';
import Paper from 'material-ui/lib/paper';
import TextField from 'material-ui/lib/text-field';
import RaisedButton from 'material-ui/lib/raised-button';
import FlatButton from 'material-ui/lib/flat-button';
import FontIcon from 'material-ui/lib/font-icon';

const base = Rebase.createClass('https://fundamental.firebaseio.com');

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

class SignUp extends React.Component {
    constructor() {
        super();

        this.state = {
            user: {
                email: "",
                password: ""
            }
        };
    }

    changeEmail(e) {
        let newUser = {email: e.target.value, password: this.state.user.password}
        this.setState({
            user: newUser
        });
    }

    changePassword(e) {
        let newUser = {email: this.state.user.email, password: e.target.value}
        this.setState({
            user: newUser
        });
    }

    createUser() {
        base.createUser(this.state.user, (e, f) => console.log(e, f));
    }

    loginOAuth(provider) {
        base.authWithOAuthPopup(provider, (error, authData) => {
            if (error) {
                if (error.code === "TRANSPORT_UNAVAILABLE") {
                    // fall-back to browser redirects, and pick up the session
                    // automatically when we come back to the origin page
                    base.authWithOAuthRedirect("google", function(error, authData) {
                        if (error) {
                            //TODO: notify error
                        } else if (authData) {
                            this.addUser(authData, provider);
                        }
                    });
                }
            } else if (authData) {
                console.log(authData);
                this.addUser(authData, provider)
            }
        });
    }

    addUser(authData, provider){
        let userData = {
            name: authData[provider].displayName
        }

        base.fetch(`users/${authData.uid}`, {
            context: this,
            asArray: true,
            then(data){
                if(!data.length){
                    base.post(`schedules/${authData.uid}`, {
                        data: [].concat(
                            {
                                name: "first schedule",
                                url: "schedule url"
                            }
                        ),
                        then(e){
                            console.log(e);
                        }
                    });
                    base.post(`owners/${authData.uid}`, {
                        data: userData,
                        then(e){
                            console.log(e);
                        }
                    });
                }
            }
        });
    }

    render() {
        return (
            <Paper style={style.paper} zDepth={2} rounded={true}>
                <h2 className="login-header">Sign Up</h2>
                <TextField
                    hintText="Email Address"
                    onChange={(e) => this.changeEmail(e)}
                /><br/>
                <TextField
                    hintText="Password"
                    type="password"
                    onChange={(e) => this.changePassword(e)}
                /><br/><br/>
                <RaisedButton onMouseUp={() => this.createUser()} label="SIGN UP" primary={true} />
                <FlatButton label="LOGIN" secondary={true} />
                <Divider style={style.divider} />
                <RaisedButton
                    onMouseUp={() => this.loginOAuth('github')}
                    label="Sign up with Github"
                    secondary={true}
                    style={style.button}
                    icon={<FontIcon className="muidocs-icon-custom-github"/>}
                /><br /><br />
                <RaisedButton
                    onMouseUp={() => this.loginOAuth('google')}
                    label="Sign up with Google"
                    secondary={true}
                    style={style.button}
                    icon={<FontIcon className="muidocs-icon-custom-github"/>}
                />
            </Paper>
        )
    }
}

export default SignUp;