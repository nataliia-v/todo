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
    this.props.onAddItem(this.state.label);
    this.setState({
      label: ''
    })
  };

  render() {

    return (
        <form className='item-add-form d-flex' onSubmit={this.onSubmit}>
          <input onChange={this.onLabelChange}
                 type="text"
                 className='form-control'
                 placeholder="My todo"
                 value={this.state.label} ///для того, чтобы сделать элкмкнт контролируемым
          />
          <button className='btn btn-outline-secondary'>Add</button>
        </form>
    );
  }
}
