import React, {Component} from 'react';
import {PropTypes} from 'prop-types';
import Table  from './Table';

class Radio extends Component {
	constructor() {
        super()
		this.state = {
			radioClick: "name"
		};
	}

	handelChange(type) {
    if(type =="name"){
     this.setState({
       radioClick:type
     })
    }else{
      this.setState({
        radioClick:type
      })
    }
    
	}

	render() {
		return (
  <div className='radioButtons'>
    <div className='left'>
      <input onChange={()=>this.handelChange('name')} value='name' type='radio' />
      <label>&nbsp;&nbsp;Sort by name</label>
    </div>
    <div className='right'>
      <input onChange={()=>this.handelChange('age')} value ='age' type='radio' />
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
