import React, { Component } from "react";
import ProjectItem from "./ProjectItem";

class Projects extends Component {
  render() {
    let projectItems;
    if (this.props.projects) {
      projectItems = this.props.projects.map(project => {
        // console.log(project);
        return <ProjectItem key={project.title} project={project} />;
      });
    }

    // console.log(this.props);

    // <h1>Project Manager</h1>
    // {this.props.test}

    return (
      <div className="Projects">
        <h1>Project Manager</h1>
        {projectItems}
      </div>
    );
  }
}

export default Projects;
