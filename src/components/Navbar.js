import React from 'react'

function Navbar() {
  return (
    <header>
      <nav className="navbar navbar-expand-lg bg-dark fixed-top fixed-top-nav">
        <div className="navbar container-fluid">
          <a className="navbar-brand" href="#">
            <img src="https://cdn.prod.website-files.com/639b3e775b326dcf7cea3e70/63d8262cbfe9e806aca29403_Crest%20white%20font%20small.png" alt="brand-logo" className="navbar-logo" />
          </a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav mx-auto">
              <li className="nav-item nav-product">
                <a className="nav-link mx-3" href="#">Product</a>
              </li>
              <li className="nav-item">
                <a className="nav-link mx-3" href="#">Pricing</a>
              </li>
              <li className="nav-item">
                <a className="nav-link mx-3" href="#">Industry</a>
              </li>
              <li className="nav-item">
                <a className="nav-link mx-3" href="#">Customer Stories</a>
              </li>
              <li className="nav-item">
                <a className="nav-link mx-3" href="#">About</a>
              </li>
              <li className="nav-item">
                <a className="nav-link mx-3" href="#">Blog</a>
              </li>
              <li id="login" className="nav-item">
                <a className="nav-link mx-3" href="#">Login</a>
              </li>
            </ul>
            <form className="form-inline my-2 my-lg-0">
              <button id="search" className="btn" type="submit">Talk To Us</button>
            </form>
          </div>
        </div>
      </nav>
    </header>
  )
}

export default Navbar

