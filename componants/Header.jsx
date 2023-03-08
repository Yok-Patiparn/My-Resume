

function Header() {
  return (
    <>
      <div className="header">
        <div className="navigate">
          <span className="me">Yok'Yok</span>
          <button className="nav-without-bd">About</button>
          <button className="nav-without-bd">Passions</button>
          <button className="nav-without-bd">Portfolio</button>
          <a href="https://bit.ly/3F7i31E">
            <button className="nav-within-bd">My CV</button>
          </a>
        </div>

        <div className="sub-header">
          <div className="aboutme">
            <div className="information" id="myinformation">
              <h1>
                Hi, I'm Patiparn Wongsawang (Yok).
                <br />a Front-End Developer
              </h1>
              <p>
                <strong>
                  I am 28 years old and graduate from University of the thai
                  chamber of commerce major in Logistic Management.
                  <br /> After that I passed work as sales and marketing in
                  Siamsteel co.ltd, for 2 yrs and I had worked as marketing at
                  TMB Thanachart Bank for 3 more yrs.
                </strong>{" "}
              </p>
              <p>
                <strong>Now, I'm Developer Training at </strong>
                <a href="https://www.techupth.com/">
                  <strong>Techup Bootcamp.</strong>
                </a>
              </p>
            </div>
          </div>
          <div className="myphoto">
            <a
              href="https://www.facebook.com/yok.yok.9/videos/1896962570363476"
              target="_blank"
            >
              <img src="/img/YokYok.jpg" className="logo" alt="img-me" />
            </a>
          </div>
        </div>
        <img src="/img/Pin.png" alt="pin-logo" className="pin-logo" />
      </div>
    </>
  );
}

export default Header;
