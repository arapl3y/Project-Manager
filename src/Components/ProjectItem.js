import React, { Component } from 'react';

class ProjectItem extends Component {
  render() {
    return (
      <li className="Projects">
        {this.props.test}
      </li>
    );
  }
}

export default ProjectItem;
