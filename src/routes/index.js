import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Loadable from 'react-loadable';

// import AuthenticatedRoute from '../components/authenticated-route';
// import UnauthenticatedRoute from '../components/unauthenticated-route';
import Notfound from '../components/Notfound';
import Loading from '../components/Loading';

const Home = Loadable({
  loader: () => import('../containers/Home'),
  loading: () => <Loading/>
});

const Explore = Loadable({
  loader: () => import('../containers/Explore'),
  loading: () => <Loading/>
});

const Friend = Loadable({
  loader: () => import('../containers/Friend'),
  loading: () => <Loading/>
});

const Register = Loadable({
  loader: () => import('../containers/Register'),
  loading: () =>  <Loading/>
});

const About = Loadable({
  loader: () => import('../containers/About'),
  loading: () =>  <Loading/>
});

const Careers = Loadable({
  loader: () => import('../containers/Careers'),
  loading: () =>  <Loading/>
});

const Partnerships = Loadable({
  loader: () => import('../containers/Partnerships'),
  loading: () =>  <Loading/>
});

const Terms = Loadable({
  loader: () => import('../containers/Terms'),
  loading: () =>  <Loading/>
});

const Privacy = Loadable({
  loader: () => import('../containers/Privacy'),
  loading: () =>  <Loading/>
});

const Contact = Loadable({
  loader: () => import('../containers/Contact'),
  loading: () =>  <Loading/>
});

const Post = Loadable({
  loader: () => import('../containers/Post'),
  loading: () =>  <Loading/>
});

// const Album = Loadable({
//   loader: () => import('../containers/Album'),
//   loading: () =>  <Loading/>
// });

// const Dashboard = Loadable({
//   loader: () => import(/* webpackChunkName: "dashboard" */ './dashboard'),
//   loading: () => null,
//   modules: ['dashboard']
// });

// const Login = Loadable({
//   loader: () => import(/* webpackChunkName: "login" */ './login'),
//   loading: () => null,
//   modules: ['login']
// });

// const Logout = Loadable({
//   loader: () => import(/* webpackChunkName: "logout" */ './logout'),
//   loading: () => null,
//   modules: ['logout']
// });

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
    {/* <Route exact path="/albums/:id" component={Album} /> */}

    {/* <AuthenticatedRoute exact path="/dashboard" component={Dashboard} />

    <UnauthenticatedRoute exact path="/login" component={Login} />
    <AuthenticatedRoute exact path="/logout" component={Logout} /> */}

    <Route component={Notfound} />
  </Switch>
);
