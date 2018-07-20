import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import { filterPosts } from '../actions/home';

import Page from '../components/Page';
import Content from '../components/home/Content';

class Home extends Component {

  componentWillMount() {
    const params = `?_expand=user&_embed=comments&_order=desc`;

    this.props.filterPosts(params);
  }
  
  render() {
    const { homeReducer } = this.props;
    
    return (
      <div>
        <Page title="Home" description="This is home page">
          <Content homeReducer={homeReducer} />
        </Page>
      </div>
    )
  }
}

const mapStateToProps = (state)=> {
  return {
    homeReducer: state.homeReducer
  }
}

// const mapDispatchToProps = (dispatch) => {
//   const params = `?_expand=user&_embed=comments&_order=desc`;

//   return {
//     actions: dispatch(filterPosts(params))
//   }
// }

const mapDispatchToProps = (dispatch) =>
  bindActionCreators({ filterPosts }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Home);