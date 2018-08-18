import React, { Component } from "react";

class ProjectItem extends Component {
  deleteProject(id) {
    // console.log("test");
    this.props.onDelete(id);
  }

  // style={{ color: "red" }}

  render() {
    console.log(this.props);
    return (
      <li className="Project">
        <strong>{this.props.project.title}</strong> -
        {this.props.project.category}{" "}
        <a
          href="#"
          onClick={this.deleteProject.bind(this, this.props.project.id)}
          className="btn btn-danger btn-sm"
          role="button"
        >
          X
        </a>
      </li>
    );
  }
}

export default ProjectItem;
