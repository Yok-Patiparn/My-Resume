import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'

function App() {
  

  return (
    <div className="App">
      <div className="navigate">
        <span className="aboutme">Yok'Yok</span>
        <button className="nav-without-bd">About</button>
        <button className="nav-without-bd">Passions</button>
        <button className="nav-without-bd">Portfolio</button>
        <button className="nav-within-bd">Contact Me</button>
      </div>
      
      <div className="header">
        <div className="information">
          <h2>
            Hi, I'm Patiparn Wongsawang (Yok).
            a Front-End Developer
          </h2>
          <p> Front-End devel oper based in Bekasi, Indonesian
            I'am coding with a clean and beautiful problem
            solving in mind. </p>
        </div>
        <a href="https://www.facebook.com/yok.yok.9/" target="_blank">
          <img src="./img/YokYok.jpg" className="logo" alt="Vite logo" />
        </a>
      </div>

      <div className="intelligence-port" id="passion">
        <div className="topics">
          <h1>Additional Passions</h1>
        </div>
        <div className="main">
          <div className="main-object"></div>
          <div className="main-object"></div>
          <div className="main-object"></div>
        </div>
      </div>
      
      <div className="intelligence-port" id="portfolio">
        <div className="topics">
          <h1>My Portfolio</h1>
        </div>
        <div className="main">
          <div className="main-object"></div>
          <div className="main-object"></div>
          <div className="main-object"></div>
        </div>
      </div>

      <div className="intelligence-port" id="portfolio">
        <div className="topics">
          <h1>Contact Me</h1>
        </div>
        <div className="main">
          <div className="main-object"></div>
          <div className="main-object"></div>
          <div className="main-object"></div>
          <div className="main-object"></div>
        </div>
      </div>

      <footer className="footage">
        <div>Design By Yok'Yok</div>
      </footer>
    </div>
  )
}

export default App



// const [count, setCount] = useState(0)
      {/* <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div> */}
      {/* <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p> */}
