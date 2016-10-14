import React, { Component } from 'react';
import ResourcesBlock from '../block/resources';
import { load } from '../../../actions/Api';
import io from 'socket.io-client';
import { connect } from 'react-redux'
import  { resourceAll, setActiveResouce } from '../../../actions'
import MistakeItem from "./mistake_item";
const socket = io('http://78.155.218.217:888/');

class MistakePage extends Component {
  constructor(props, context){
    super();
    this.state = {
      resource: 'ren.tv',
      data: [],
      offset: 0,
      count: 25
    };
  }
  componentWillMount() {
    this.props.resourceAll(window.localStorage.getItem('o__id'))
    this.loadMistake(this.state.offset, this.state.count);
    socket.on('m', (change) => {
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
  loadMore = (e) => {
    let offset = this.state.data.length
    let count = this.state.count
    load('m/?resource=ren.tv&offset=' + offset + '&count=' + count, this.props.token).then((m) => {
      m = this.state.data.concat(m);
      this.setState({
        data: m
      });
    });
  }
  loadMistake(offset, count) {
    load('m/?resource=ren.tv&offset=' + offset + '&count=' + count, this.props.token).then((m) => {
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
      <div className="o_sidebar">  
        <ResourcesBlock action={this.props.setActiveResouce} set={this.props.active} data={this.props.resource}/>
      </div>
      <div className="o_panel__container">
        <div className="o_mistake__container">
          {mistakes}
          <button className="o_loadmore" onClick={this.loadMore}>Загрузить еще</button>
        </div>
      </div>
    </div>
    );
  }
};


function mapStateToProps(state) {
  return { 
  resourceAll,
  active: state.resource.active,
  resource: state.resource.resources,
  login: state.login.id
  }
}



export default connect(mapStateToProps, {resourceAll, setActiveResouce})(MistakePage)