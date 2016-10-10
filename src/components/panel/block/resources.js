import React, { Component } from 'react';

class ResourcesBlock extends Component {
  constructor(props) {
    super(props);
    this.state = {

    }
  }
  componentDidMount() {
    this.props.action('d70059eb-088f-4b11-86f8-d570621c8929');
    
  }
  render() {
    return (
    <div className='o_ResourcesBlock'>
      <header>
        <h3>Ресурсы</h3>
      </header>
    </div>
    );
  }
};

export default ResourcesBlock;