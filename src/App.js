import { Component } from "react"
import Project from "./Project"
import "./App.css"

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1>Jasmin Cortez</h1>

          <div class="projects-grid">
            <Project
              href="https://jasmincortez.github.io/JasminCortez/"
              img="https://i.pinimg.com/originals/9f/9a/77/9f9a77d8b66300b3f7b3770fe3660318.jpg"
              title="Acting Portfolio"
            />
            <Project
              href="https://jasmincortez.github.io/WebDev/"
              img="https://i.pinimg.com/originals/c6/54/0d/c6540d582fccc1ae0548daa89af92e65.jpg"
              title="&lt; WebDev Portfolio /&gt;"
            />
          </div>
        </header>
      </div>
    )
  }
}

export default App
