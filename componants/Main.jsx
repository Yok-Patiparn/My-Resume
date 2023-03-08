function Main() {
  return (
    <>
      <div className="intelligence-port" id="passion">
        <div className="topics">
          <h1>Additional Passions</h1>
        </div>
        <div className="main">
          <div className="main-object-passion">
            <img
              src="/img/coding1.jpg"
              alt="frontendlogo"
              className="passion-logo"
            />
          </div>
          <div className="main-object-passion">
            <img
              src="/img/backend.jpg"
              alt="backendlogo"
              className="passion-logo"
            />
          </div>
          <div className="main-object-passion">
            <img src="/img/UXUI.jpg" alt="uxuilogo" className="passion-logo" />
          </div>
        </div>
      </div>

      <div className="intelligence-port" id="portfolio">
        <div className="topics">
          <h1>My Portfolio</h1>
        </div>
        <div className="main">
          <div className="main-object-portfolio">
            <img src="/img/programmer.jpg" alt="" className="portlogo" />
          </div>
          <div className="main-object-portfolio">
            <img src="/img/programming.jpg" alt="" className="portlogo" />
          </div>
          <div className="main-object-portfolio">
            <img src="/img/deskprogram.jpg" alt="" className="portlogo" />
          </div>
        </div>
      </div>
    </>
  );
}

export default Main