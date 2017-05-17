import React, { Component } from 'react';

class ProjectItem extends Component {
  deleteProject() {
    this.props.onDelete(id);
  }

  render() {
    return (
      <li className="Projects">
        <strong>{this.props.project.title}</strong>: {this.props.project.category} <a href="#" onClick={this.deleteProject.bind(this, this.props.project.id)}>X</a>
      </li>
    );
  }
}

ProjectItem.propTypes = {
  project: React.PropType.object,
  onDelete: React.PropType.func
}

export default ProjectItem;
