import propTypes from "prop-types";
// import { Link } from "react-router-dom";
// import { Router } from "@reach/router";
function Navbar({ navbar, home, link, dropDown, disabled, Search,Mode,Switch,Validity,selectColor,Button}) {
  return (
    <nav className={`navbar navbar-expand-lg navbar-${Mode} bg-${Mode} navbar-light bg-light position-sticky`}>
      <div className="container-fluid">
        <a className="navbar-brand" href="/">
          {navbar}
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0 font-weight-bold">
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="/">
                {home}
              </a>
             </li>
            {/*<li className="nav-item">
              <a className="nav-link" href="#">
                {link}
              </a>
            </li> */}
            {/* <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle"
                href="#"
                id="navbarDropdown"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                {dropDown.title}
              </a>
              <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                <li>
                  <a className="dropdown-item" href="#">
                    {dropDown.option1}
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    {dropDown.option2}
                  </a>
                </li>
                <li>
                  <hr className="dropdown-divider" />
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    Something else here
                  </a>
                </li>
              </ul>
            </li> */}
            {/* <li className="nav-item">
              <a
                className="nav-link "
                href="#"
                tabIndex="-1"
                aria-disabled="true"
              >
                {disabled}
              </a>
            </li> */}
          </ul>
          <div className="me-5 d-flex justify-content-between mb-1" style={{height:"20px",width:"130px"}}>
          <div className="form-check form-check-inline">
  <input className="form-check-input  form-check-input-border" type="radio" name="inlineRadioOptions" id="inlineRadio1" value="Black" onClick={selectColor} disabled={Button}/>
</div>
<div className="form-check form-check-inline">
  <input className="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio2" value="#020326" onClick={selectColor} disabled={Button}/>
</div>
<div className="form-check form-check-inline">
  <input className="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio3" value="grey" onClick={selectColor} disabled={Button}/>
</div>
<div className="form-check form-check-inline">
  <input className="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio4" value=" rgb(1, 38, 1)" onClick={selectColor} disabled={Button} />
</div>
</div>
          <div className={`form-check form-switch text-${Mode==="dark"?"light":"Dark"}`}>
            <input
              className="form-check-input"
              type="checkbox"
              id="flexSwitchCheckDefault"
              onClick={Switch}
            />
            <label
              className="form-check-label"
              forname="flexSwitchCheckDefault"
            >
              {Validity} Dark Mode
            </label>
          </div>
          {/* <form className="d-flex">
            <input
              className="form-control me-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
            />
            <button className="btn btn-outline-success" type="submit">
              {Search}
            </button>
          </form> */}
        </div>
      </div>
    </nav>
  );
}
export default Navbar;
Navbar.propTypes = {
  navbar: propTypes.string.isRequired,
  home: propTypes.string,
  link: propTypes.string,
  dropDown: propTypes.object,
  disabled: propTypes.string,
  Search: propTypes.string,
};
Navbar.defaultProps = {
  Search: "Search",
};
