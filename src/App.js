import React, { Component } from 'react';
import { HashRouter,Switch,Route } from 'react-router-dom';
import BaseLayout from './BaseLayout/BaseLayout';
import EmergencyCommandOnline from './Components/EmergencyCommand/Online/Online';

class App extends Component {
    state = {
        current: 'mail',
    };
    handleClick = e => {
        console.log('click ', e);
        this.setState({
            current: e.key,
        });
    };
    render() {
        return (
            <HashRouter>
              <Switch>
                <Route exact path='/emergency-command/online' component={(routeProps) => (<EmergencyCommandOnline history={routeProps.history}/>)}/>
                <Route path='/' component={(routeProps) => (<BaseLayout history={routeProps.history}/>)}/>
              </Switch>
            </HashRouter>
            );
    }
}
export default App;