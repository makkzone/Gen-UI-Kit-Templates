import React from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
import DefaultLayout from './layout/DefaultLayout';
import HomeView from './views/HomeView/HomeView';
import HomeViewSidebarNavigation from './views/HomeView/HomeViewSidebarNavigation';
/*import new routes*/
/**
 * Contains routes of application
 * @usage
 * 
 * if new routes to be added, add necessary import statements and fill the values for sidebarkNavigation, view and disableSideBar as shown in below example.
 * <Route path={'/'} >
        <DefaultLayout sidebarNavigation={<HomeViewSidebarNavigation/>} view={<ModelsView/>} disableSideBar={false} />
    </Route>
 * and then add it in below Routes function right above the comment {Add new routes}
 */
const Routes = () => {

  return (
      <Switch>
      {/*Add new routes*/}

      <Route path={'/'} >
        <DefaultLayout sidebarNavigation={<HomeViewSidebarNavigation/>} view={<HomeView/>} disableSideBar={false} />
      </Route>
      <Route>
          <Redirect to={'/'} />
        </Route>
      </Switch>
  );
};

export default Routes;
