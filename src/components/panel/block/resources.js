import React, { Component } from 'react';

class ResourcesBlock extends Component {
  constructor(props) {
    super(props);
    this.state = {

    }
  }
  componentDidMount() {
    this.props.action('ren.tv');

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