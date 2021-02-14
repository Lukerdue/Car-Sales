import React from 'react';
import { connect } from 'react-redux';

import { addFeature } from '../actions'

const AdditionalFeature = props => {
  const clickHandler=(e)=>{
    props.addFeature(props.feature);
    e.preventDefault();
  }
  return (
    <li>
      {/* Add an onClick that will let you add a feature to your car */}
      <button className="button" onClick={clickHandler}>Add</button>
      {props.feature.name} (+{props.feature.price})
    </li>
  );
};

const mapStateToProps=(state, ownProps)=>{
  return{
    feature: state.additionalFeatures.find(feature=>{
      if(feature.id === ownProps.feature.id){
        return feature
      }
    })
  }
}

export default connect(mapStateToProps, { addFeature })(AdditionalFeature);
