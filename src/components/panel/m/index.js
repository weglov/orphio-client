import React, { Component } from 'react';
import ResourcesBlock from '../block/resources';
import { load } from '../../../actions/Api';
import io from 'socket.io-client';
import MistakeItem from "./mistake_item";
const socket = io('http://78.155.218.217:888/');

class MistakePage extends Component {
  constructor(props, context){
    super();
    this.state = {
      resource: 'ren.tv',
      data: []
    };
  }
  componentDidMount() {
    this.loadMistake();
    socket.on('m', (change) => {
      console.log(change);
      if (!change.old_val) {
        this.setState({
          data: [change.new_val, ...this.state.data]
        });
        console.log('1', change.new_val);
      } else if (!change.new_val) {
        console.log('2', change.old_val);
      } else {
        console.log('3', change.new_val);
      }
    });
  }
  loadMistake() {
    load('m/?resource=ren.tv&offset=0&count=30', this.props.token).then((m) => {
      this.setState({
        data:m 
      });
    });
  }
  render() {
    var mistakes = this.state.data.map((nodes, i) => {
             return (<MistakeItem key={i} data={nodes} />);
        });
    return (
    <div className='o_container'>
      <div className="o_mistake__container">
        {mistakes}
      </div>
      <div className="o_sidebar">  
        <ResourcesBlock action={this.props.action}/>
      </div>
    </div>
    );
  }
};

export default MistakePage;