import { Component } from "react"
import "./App.css"

class Project extends Component {
  render() {
    return (
      <a
        href={this.props.href}
        target="_blank"
        rel="noreferrer"
        class="project project-tile"
      >
        <img class="project-image" src={this.props.img} alt="project-img" />
        <p class="project-title">{this.props.title}</p>
      </a>
    )
  }
}

export default Project
