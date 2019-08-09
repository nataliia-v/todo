import React, { Component } from 'react';
import './item-status-filter.css';

export default class ItemStatusFilter extends Component {

  state = {
    all: true,
    active: false,
    done: false
  };


  blue = () => {
    return {
      border:'1px solid red'
    }

  };


  render() {

    const {done, all, active} = this.props;

    let classNames = 'btn';

    if (done) {
      classNames += ' btn-info';
    }

    // if (important) {
    //   classNames += ' important';
    // }

    return (
        <div className="btn-group">
          <button type="button"
                  className={classNames}
                  // className="btn btn-info"
                  onClick={this.blue}
          >All</button>
          <button type="button"
                  // className="btn btn-outline-secondary"
                  // onClick={this.blue}
          >Active</button>
          <button type="button"
                  // onClick={this.blue}
                  // className="btn btn-outline-secondary"
          >Done</button>
        </div>
    );
  }
}


