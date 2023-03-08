function Footer() {
  return (
    <>
      <div className="intelligence-port" id="contact-me">
        <div className="topics">
          <h1>Contact Me</h1>
        </div>
        <div className="main-btn">
          <button className="contact">
            <a href="https://www.facebook.com/yok.yok.9/" target="_blank">
              <img src="./img/facebook.png" alt="fb-icon" />
            </a>
          </button>
          <button className="contact">
            <a href="https://www.instagram.com/patiparn.wong/" target="_blank">
              <img src="./img/instagram.png" alt="ig-icon" />
            </a>
          </button>
          <button className="contact">
            <a href="https://github.com/Yok-Patiparn" target="_blank">
              <img src="./img/github.png" alt="github-icon" />
            </a>
          </button>
          <button className="contact">
            <a
              href="https://www.linkedin.com/in/yok-yokkk-752381269/"
              target="_blank"
            >
              <img src="./img/linkedin.png" alt="linkedin-icon" />
            </a>
          </button>
        </div>
      </div>

      <footer className="footage">
        <div>Design By Yok'Yok</div>
      </footer>
    </>
  );
}

export default Footer