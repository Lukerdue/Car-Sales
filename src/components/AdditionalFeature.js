import React from 'react';
import { connect } from 'react-redux';

import { addFeature } from '../actions'

const AdditionalFeature = props => {
  const clickHandler=(e)=>{
    e.preventDefault();
    addFeature(props.feature)
  }
  return (
    <li>
      {/* Add an onClick that will let you add a feature to your car */}
      <button className="button">Add</button>
      {props.feature.name} (+{props.feature.price})
    </li>
  );
};

const mapStateToProps=(state, ownProps)=>{
  return{
    additionalFeatures: state.AdditionalFeatures[ownProps.feature.id]
  }
}

export default connect(mapStateToProps, { addFeature })(AdditionalFeature);
