import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { Router, Route, Switch } from 'react-router';
import { createBrowserHistory } from 'history';
import { configureStore } from './store';
import Dashboard from './containers/Dashboard';
import Contacts from './modules/Contacts';
import Contact from './modules/Contact';
import initialize from './core/initialize';

const store = configureStore();
const history = createBrowserHistory();

// Initialize application data
initialize(store);

ReactDOM.render(
    <Provider store={store}>
        <Router history={history}>
            <Dashboard>
                <Switch>
                  <Route path="/contacts" component={Contacts} />
                  <Route path="/contact/:id" component={Contact} />
                </Switch>
            </Dashboard>
        </Router>
    </Provider>,
    document.getElementById('root')
);