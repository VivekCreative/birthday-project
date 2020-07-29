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
    if(){}
    
	}

	render() {
		return (
  <div className='radioButtons'>
    <div className='left'>
      <input onChange={()=>this.handelChange('name')} type='radio' />
      <label>&nbsp;&nbsp;Sort by name</label>
    </div>
    <div className='right'>
      <input onChange={()=>this.handelChange('age')} type='radio' />
      <label>&nbsp;&nbsp;Sort by age</label>
    </div>
    <Table />
  </div>
);

	}
}

// Uncomment the snippet below
// Radio.propTypes = {
// 	sortBy: PropTypes.func
// }

export default Radio;
