
/**
 * Created by Administrator on 2018/8/11 0011.
 */
import  React from 'react';
import  ReactDOM from 'react-dom';
// import {Provider} from 'react-redux'
import {HashRouter,Switch,Route} from 'react-router-dom'

import login from './containers/login/login'
import register from './containers/register/register'
import   main   from './containers/main/main'
ReactDOM.render(
  <HashRouter>
    <Switch>
      <Route path="/login" component={login}/>
      <Route path="/register" component={register}/>
      <Route component={main}/>
    </Switch>
  </HashRouter>,document.getElementById('root')
)
