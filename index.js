import React    from 'react';
import {render} from 'react-dom';
import {
  Router,
  Route,
  IndexRoute
} from 'react-router';

import App      from './components/App';
import Travolta from './components/common/Travolta';

import injectTapEventPlugin from 'react-tap-event-plugin';

// Needed for onTouchTap
// Can go away when react 1.0 release
// Check this repo:
// https://github.com/zilverline/react-tap-event-plugin
injectTapEventPlugin();

render(
  (
    <Router>
      <Route path="/" component={App} />
      <Route path="*" component={Travolta} />
    </Router>
  ),  document.getElementById('content')
);
