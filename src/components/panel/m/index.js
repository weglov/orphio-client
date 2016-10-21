import React, { Component } from 'react';
import ResourcesBlock from '../block/resources';
import io from 'socket.io-client';
import { connect } from 'react-redux'
import  { resourceAll, setActiveResource, mLoad } from '../../../actions'
import MistakeItem from "./mistake_item";
import moment from 'moment'
import Loader from '../../ui/loader'
const socket = io('http://78.155.218.217:888/');

class MistakePage extends Component {
  constructor(props, context){
    super();
    this.state = {
      resource: '',
      data: [],
      offset: 0,
      count: 25
    };
  }
  componentWillMount() {
    this.props.resourceAll(window.localStorage.getItem('o__id'))
    socket.on('m', (change) => {
      if (!change.old_val) {
        this.setState({
          data: [change.new_val, ...this.state.data]
        });
        console.log('1', change.new_val);
      }
    });
  }
  componentWillReceiveProps(next) {
    if (next.active !== this.state.resource) {
      this.setState({ resource: next.active });
      this.props.mLoad(next.active, this.state.offset, this.state.count, this.props.token).then(() => {
        this.setState({
          data: this.props.m[next.active],
        });
      })
    }
  }
  loadMore = (e) => {
    var offset = this.state.offset || this.state.count
    this.props.mLoad(this.props.active, offset, this.state.count, this.props.token).then(() => {
        this.setState({
          data: this.props.m[this.state.resource],
          offset: offset + this.state.count
        });
    })
  }
  render() {
    var data = this.state.data;
        var mistakes = data.map((nodes, i) => {
             var time = moment(nodes.timestamp).fromNow()
             return (<MistakeItem key={i} data={nodes} time={time}/>);
        });
    return (
    <div className='o_container'>  
      <div className="o_sidebar">  
        <ResourcesBlock action={this.props.setActiveResource} set={this.props.active} data={this.props.resource}/>
      </div>
      <div className="o_panel__container">
        <div className="o_mistake__container">
          <Loader active={this.props.throbbler} />
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
  mLoad,
  m: state.mistake.m,
  throbbler: state.mistake.isFetching,
  active: state.resource.active,
  resource: state.resource.resources,
  login: state.login.id
  }
}



export default connect(mapStateToProps, {mLoad, resourceAll, setActiveResource})(MistakePage)