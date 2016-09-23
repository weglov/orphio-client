import React, { Component } from 'react';
import { load } from '../../../action/Api';
import io from 'socket.io-client'
const socket = io('http://localhost:888/')

class MistakePage extends Component {
  componentDidMount() {
    socket.on('m', function(data) {
        console.log(data);
    });
  }
  render() {
    return (
    <div className='o_login'>
      Отлично
    </div>
    );
  }
};

export default MistakePage;