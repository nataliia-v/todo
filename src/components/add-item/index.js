import React, { Component } from 'react';
import './add-item.css'

export default class AddItem extends Component {

  render() {
    const {onAddItem} = this.props;

    return (
        <div className='item-add-form'>
          <button className='btn btn-outline-secondary' onClick={() => onAddItem('added item')}>Add item</button>
        </div>
    );
  }
}
