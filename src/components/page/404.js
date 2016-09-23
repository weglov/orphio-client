import React, { Component } from 'react';

class NotFound extends Component {
  render() {
    return (
    <div className='o_container'>
      <div className='o_404'>
        <h1>404</h1>
        <div className="o_404__text">
          Ничего не найденно
        </div>
      </div>
    </div>
    );
  }
};

export default NotFound;