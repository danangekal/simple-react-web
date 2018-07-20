import React, { Component } from 'react';
import { connect } from 'react-redux';

import { filterExplores } from '../actions/explore';

import Content from '../components/explore/Content';

class Explore extends Component {
  
  render() {
    const exploreReducer = this.props.exploreReducer;

    return (
      <div>
        <Content exploreReducer={exploreReducer} />
      </div>
    )
  }
}

const mapStateToProps = (state)=> {
  return {
    exploreReducer: state.exploreReducer
  }
}

const mapDispatchToProps = (dispatch) => {
  const id = 1;
  const params = `?id_ne${id}&_expand=user`;

  return {
    actions: dispatch(filterExplores(params))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Explore);