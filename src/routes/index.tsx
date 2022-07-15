import { useContext, useState } from 'react';
import { Switch } from 'react-router-dom';
import { Home } from '../pages';

import {Route} from './Route';

export function Routes() {
  return(
    <Switch>
      <Route path="/Home" exact component={Home} />
    </Switch>
  );
}