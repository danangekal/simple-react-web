import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Loadable from 'react-loadable';

import Notfound from '../components/Notfound';
import Loading from '../components/Loading';

const Home = Loadable({
  loader: () => import(/* webpackChunkName: "home" */ '../containers/Home'),
  loading: () => <Loading />,
  modules: ['home']
});

const Explore = Loadable({
  loader: () => import(/* webpackChunkName: "explore" */ '../containers/Explore'),
  loading: () => <Loading />,
  modules: ['explore']
});

const Friend = Loadable({
  loader: () => import(/* webpackChunkName: "friend" */ '../containers/Friend'),
  loading: () => <Loading />,
  modules: ['friend']
});

const Register = Loadable({
  loader: () => import(/* webpackChunkName: "register" */ '../containers/Register'),
  loading: () => <Loading />,
  modules: ['register']
});

const About = Loadable({
  loader: () => import(/* webpackChunkName: "about" */ '../containers/About'),
  loading: () => <Loading />,
  modules: ['about']
});

const Careers = Loadable({
  loader: () => import(/* webpackChunkName: "careers" */ '../containers/Careers'),
  loading: () => <Loading />,
  modules: ['careers']
});

const Partnerships = Loadable({
  loader: () => import(/* webpackChunkName: "partnerships" */ '../containers/Partnerships'),
  loading: () => <Loading />,
  modules: ['partnerships']
});

const Terms = Loadable({
  loader: () => import(/* webpackChunkName: "terms" */ '../containers/Terms'),
  loading: () => <Loading />,
  modules: ['terms']
});

const Privacy = Loadable({
  loader: () => import(/* webpackChunkName: "privacy" */ '../containers/Privacy'),
  loading: () => <Loading />,
  modules: ['privacy']
});

const Contact = Loadable({
  loader: () => import(/* webpackChunkName: "contact" */ '../containers/Contact'),
  loading: () => <Loading />,
  modules: ['contact']
});

const Post = Loadable({
  loader: () => import(/* webpackChunkName: "post" */ '../containers/Post'),
  loading: () => <Loading />,
  modules: ['post']
});

const Album = Loadable({
  loader: () => import(/* webpackChunkName: "album" */ '../containers/Album'),
  loading: () => <Loading />,
  modules: ['album']
});

export default () => (
  <Switch>
    <Route exact path="/" component={Home} />
    <Route exact path="/explore" component={Explore} />
    <Route exact path="/friend" component={Friend} />
    <Route exact path="/about-us" component={About} />
    <Route exact path="/register" component={Register} />
    <Route exact path="/careers" component={Careers} />
    <Route exact path="/partnerships" component={Partnerships} />
    <Route exact path="/terms-conditions" component={Terms} />
    <Route exact path="/privacy-policies" component={Privacy} />
    <Route exact path="/contact-us" component={Contact} />

    <Route exact path="/posts/:id" component={Post} />
    <Route exact path="/albums/:id" component={Album} />

    <Route component={Notfound} />
  </Switch>
);
