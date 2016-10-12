import React, { Component } from 'react';

class ResourcesBlock extends Component {
  constructor() {
    super()
    this.state = {
       data: [],
       id: window.localStorage.getItem('o__id')
    }
  }
  componentDidMount() {
    this.setState({
          data: this.props.action(this.state.id)  
        });    
  }
  render() {
    console.log(this.state.data);
    // var list = this.state.data.map((e) => {
    //   console.log(e);
    //   return 'fff';
    // })
    return (
    <div className='o_ResourcesBlock'>
      <header>
        <h3>Ресурсы</h3>
      </header>
      <div className='o_ResourcesBlock_container'></div>
        <div className='o_ResourcesBlock_add'></div>
    </div>
    );
  }
};

export default ResourcesBlock;