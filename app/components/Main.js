import React from 'react';
import {cyan500, white, grey300, cyan700, lightBlack, pinkA200, grey100, grey500, darkBlack} from 'material-ui/lib/styles/colors';
import getMuiTheme from 'material-ui/lib/styles/getMuiTheme';
import MuiThemeProvider from 'material-ui/lib/MuiThemeProvider';

const muiTheme = getMuiTheme({
    primary1Color: cyan500,
    primary2Color: cyan700,
    primary3Color: lightBlack,
    accent1Color: pinkA200,
    accent2Color: grey100,
    accent3Color: grey500,
    textColor: darkBlack,
    alternateTextColor: white,
    canvasColor: white,
    borderColor: grey300,
    pickerHeaderColor: cyan500
});

class Main extends React.Component {
    constructor(){
        super();
    }
    render() {
        return (
        <MuiThemeProvider muiTheme={muiTheme}>
            <div>
                {this.props.children}
            </div>
        </MuiThemeProvider>
        )
    }
}

export default Main;
