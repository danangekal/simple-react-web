import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import { readAlbum } from '../actions/album';

import Content from '../components/album/Content';

class Album extends Component {

  componentWillMount() {
    const id = this.props.match.params.id;
    const params = `/${id}?_embed=photos`;

    this.props.readAlbum(params);
  }
  
  render() {
    const albumReducer = this.props.albumReducer;

    return (
      <div>
        <Content albumReducer={albumReducer} />
      </div>
    )
  }
}

const mapStateToProps = (state)=> {
  return {
    albumReducer: state.albumReducer
  }
}

// const mapDispatchToProps = (dispatch, props) => {
//   const id = props.match.params.id;
//   const params = `/${id}?_embed=photos`;

//   return {
//     actions: dispatch(readAlbum(params))
//   }
// }

const mapDispatchToProps = (dispatch) =>
  bindActionCreators({ readAlbum }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Album);