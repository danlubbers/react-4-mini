import React from 'react';
// Must import Switch and Route from react-router-dom
import {Switch, Route} from 'react-router-dom';

// Components
// Imports Route1 function from ./Route1.js
import Route1 from './Route1';
import Route2 from './Route2';
import Route3 from './Route3';

export default (
    <Switch>
        {/* Uses Route1 function variable here in component */}
        <Route exact path="/" component={ Route1 } />
        <Route path="/2" component={ Route2 } />
        <Route path="/3" component={ Route3 } />
    </Switch>
) 