import React from 'react';
import { Switch, Route } from 'react-router-dom'
import { Home, Pages, Blog, Photos, Fragments, Thrash, Settings, GallerySection } from './main/index'
import EditPage from './main/pages/EditPage';

const Main = () => (
  <Switch>
    <Route exact path='/' component={Home} />
    <Route path='/pages/:page_name' component={EditPage} />
    <Route path='/pages' component={Pages} />
    <Route path='/blog' component={Blog} />
    <Route path='/gallery/:gallery_name' component={GallerySection} />
    <Route path='/photos' component={Photos} />
    <Route path='/fragments' component={Fragments} />
    <Route path='/thrash' component={Thrash} />
    <Route path='/settings' component={Settings} />
  </Switch>
)

export default Main;
