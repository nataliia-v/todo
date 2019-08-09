import React, { Component } from 'react';
import './add-item.css'

export default class AddItem extends Component {
  state = {
    label: ''
  };

  onLabelChange = (e) => {
    this.setState({
      label: e.target.value
    })
  };

  onSubmit = (e) => {
    e.preventDefault();
    this.props.onAddItem(this.state.label)
  };

  render() {
    const {onAddItem} = this.props;

    return (
        <form className='item-add-form d-flex' onSubmit={this.onSubmit}>
          <input onChange={this.onLabelChange} type="text" className='form-control' placeholder="My todo"/>
          <button className='btn btn-outline-secondary' >Add</button>
        </form>
    );
  }
}
