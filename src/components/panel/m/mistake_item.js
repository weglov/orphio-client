import React, { Component } from 'react'
import { Link } from 'react-router'
import moment from 'moment'

class MistakeItem extends Component {
  constructor(props) {
    super(props);
    this.state = {
      check: this.props.check,
      data: this.props.data,
      date: this.props.data.timestamp,
      intervalId: ''
    }
  }
  onChange = (e) => {
    this.setState({
      check: true
    });
  }
  componentDidMount() {
    this.setState({
      date: moment(this.props.data.timestamp).fromNow() 
    });
    var intervalId = setInterval(this.timer, 60000);
    this.setState({intervalId: intervalId});
  }
  componentWillUnmount() {
    clearInterval(this.state.intervalId);
  }
  timer = (e) => {
    this.setState({ date: moment(this.props.data.timestamp).fromNow()  });
  }
  render() {
    var data = this.props.data;
    let created = this.state.date;
    return (
    <div className='o_mistake'>
      <div className={'o_mistake__check--' + data.check + ' o_mistake__check'}>
        <label className="control control--checkbox">
          <input type="checkbox" onChange={this.onChange} checked={this.state.check ? 'checked' : ''}/>
          <div className="control__indicator"></div>
        </label>
      </div>
      <div className='o_mistake__header'>
        <div className='o_mistake__title'><Link to={data.url} target="_blank">{data.title || data.id}</Link></div>
        
        <div className='o_mistake__mis'>
          {data.left}<strong>{data.m}</strong>{data.right}
        </div>
      </div>
      <div className='o_mistake__setting'> 
        <div className='o_mistake__time'>{created}</div>
      </div>
    </div>
    );
  }
};

export default MistakeItem;