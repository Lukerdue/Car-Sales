import React from 'react';
import { removeFeature } from '../actions';
import { connect } from 'react-redux';

const AddedFeature = props => {
  function clickHandler(e){
    e.preventDefault();
    removeFeature(props.feature.id)
  }
  return (
    <li>
      {/* Add an onClick to run a function to remove a feature */}
      <button className="button" onClick={clickHandler}>X</button>
      {props.feature.name}
    </li>
  );
};

const mapStateToProps=(state, ownProps)=>{
  return{
    feature: state.features[ownProps.feature.id]
  }
}

export default connect(mapStateToProps, {removeFeature})(AddedFeature);
