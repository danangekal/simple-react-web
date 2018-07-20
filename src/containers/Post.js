import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import { readPost } from '../actions/post';

import Content from '../components/post/Content';

class Post extends Component {

  componentWillMount() {
    const id = this.props.match.params.id;
    const params = `/${id}?_expand=user&_embed=comments&_order=desc`;

    this.props.readPost(params);
  }
  
  render() {
    const postReducer = this.props.postReducer;
    const id = this.props.match.params.id;

    return (
      <div>
        <Content postReducer={postReducer} id={id} />
      </div>
    )
  }
}

const mapStateToProps = (state)=> {
  return {
    postReducer: state.postReducer
  }
}

// const mapDispatchToProps = (dispatch, props) => {
//   const id = props.match.params.id;
//   const params = `/${id}?_expand=user&_embed=comments&_order=desc`;

//   return {
//     actions: dispatch(readPost(params))
//   }
// }

const mapDispatchToProps = (dispatch) =>
  bindActionCreators({ readPost }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Post);