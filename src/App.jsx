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
            Hi, I'm Patiparn Wongsawang (Yok).<br/>
            a Front-End Developer
          </h2>
          <p>I am 28 years old and graduate from University of the thai chamber of commerce major in Logistic Management.<br/> After that I passed work as sales and marketing in Siamsteel co.ltd, for 2 yrs and I had worked as marketing 
          <br/>at TMB Thanachart Bank for 3 more yrs. </p>
          <p>Now, I'm Developer Training at <a href="https://www.techupth.com/">Techup Bootcamp.</a></p>
        </div>
        <img src="./img/Pin.png" alt="pin-logo" className="pin-logo"/>
        <div className="myphoto">
          <a href="https://www.facebook.com/yok.yok.9/videos/1896962570363476" target="_blank">
            <img src="./img/YokYok.jpg" className="logo" alt="img-me" />
          </a>
        </div>
      </div>

      <div className="intelligence-port" id="passion">
        <div className="topics">
          <h1>Additional Passions</h1>
        </div>
        <div className="main">
          <div className="main-object-passion">
            <span className="info"><strong>Front-End</strong> Developer</span>
            <span className="info">(HTML, CSS, JavaScript, React)</span>
          </div>
          <div className="main-object-passion">
            <span className="info"><strong>Back-End</strong> Developer</span>
            <span className="info">(NodeJS, Laravel, Codeigniter)</span>
          </div>
          <div className="main-object-passion">
            <span className="info"><strong>UI/UX</strong> Designer</span>
            <span className="info">(Figma, Zeplin, Adobe XD)</span>
          </div>
        </div>
      </div>
      
      <div className="intelligence-port" id="portfolio">
        <div className="topics">
          <h1>My Portfolio</h1>
        </div>
        <div className="main">
          <div className="main-object-portfolio"></div>
          <div className="main-object-portfolio"></div>
          <div className="main-object-portfolio"></div>
        </div>
      </div>

      <div className="intelligence-port" id="contact-me">
        <div className="topics">
          <h1>Contact Me</h1>
        </div>
        <div className="main-btn">
          <button className="contact"><a href="https://www.facebook.com/yok.yok.9/" target="_blank"><img src="./img/icons8-facebook-100.png" alt="fb-icon"/></a></button>
          <button className="contact"><a href="https://www.instagram.com/patiparn.wong/" target="_blank"><img src="./img/icons8-instagram-100.png" alt="ig-icon"/></a></button>
          <button className="contact"><a href="https://github.com/Yok-Patiparn" target="_blank"><img src="./img/icons8-github-100.png" alt="github-icon"/></a></button>
          <button className="contact"><a href="https://www.linkedin.com/in/yok-yokkk-752381269/" target="_blank"><img src="./img/icons8-linkedin-100.png" alt="linkedin-icon"/></a></button>
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
