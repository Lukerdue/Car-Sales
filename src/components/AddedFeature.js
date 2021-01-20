import React from 'react';
import { removeFeature } from '../actions';
import { connect } from 'react-redux';

const AddedFeature = props => {
  function clickHandler(e){
    e.preventDefault();
    props.removeFeature(props.feature)
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
    feature: state.car.features.find(feature=>{
      if(feature.id === ownProps.feature.id){
        return feature
      }
    })
  }
}

export default connect(mapStateToProps, { removeFeature })(AddedFeature);
