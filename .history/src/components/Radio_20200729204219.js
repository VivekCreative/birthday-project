import React, {Component} from 'react';
import {PropTypes} from 'prop-types';
import Table  from './Table';

class Radio extends Component {
	constructor() {
        super()
		this.state = {
      radioClick: "name",
      checkStatusName:true,
      checkStatusAge:false
		};
	}

	handelChange(type) {
    if(type =="name"){
     this.setState({
       radioClick:type,
       checkStatusName:true,
      checkStatusAge:false
     })
    }else{
      this.setState({
        radioClick:type,
        checkStatusName:false,
        checkStatusAge:true
      })
    }
    
	}

	render() {
		return (
  <div className='radioButtons'>
    <div className='left'>
      <input onChange={()=>this.handelChange('name')} checked type='radio' />
      <label>&nbsp;&nbsp;Sort by name</label>
    </div>
    <div className='right'>
      <input onChange={()=>this.handelChange('age')} value ={this.state.radioClick} type='radio' />
      <label>&nbsp;&nbsp;Sort by age</label>
    </div>
    <Table radioClick = {this.state.radioClick}/>
  </div>
);

	}
}

// Uncomment the snippet below
// Radio.propTypes = {
// 	sortBy: PropTypes.func
// }

export default Radio;
