import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom'
import { Home, Pages, Blog, Photos, Fragments, Thrash, Settings } from './main/index'

const Main = () => (
  <main>
    <Switch>
      <Route exact path='/' component={Home}/>
      <Route path='/pages' component={Pages}/>
      <Route path='/blog' component={Blog}/>
      <Route path='/photos' component={Photos}/>
      <Route path='/fragments' component={Fragments}/>
      <Route path='/thrash' component={Thrash}/>
      <Route path='/settings' component={Settings}/>
    </Switch>
  </main>
)

export default Main;