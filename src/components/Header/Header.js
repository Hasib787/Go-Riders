import React from 'react';
import { Link } from 'react-router-dom'
import './Header.css';

const Header = () => {
    return (
        <div>
            {/* Nav Start  */}
            <nav className="container navbar navbar-expand-lg navbar-light">
                
                <div className="container d-flex justify-content-right">
                <div><h2>Go Riders</h2></div>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
                        data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false"
                        aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse justify-content-end" id="navbarNavAltMarkup">
                        <ul className="navbar-nav penguin-navbar fw-bold">
                            <li className="nav-item">
                                <a className="nav-link active" aria-current="page" ><Link to="/home">Home</Link></a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link"><Link to="/destination">Destination</Link></a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link"><Link to="/blog">Blog</Link></a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link"><Link to="/contact">Contact</Link></a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
            {/* <!-- nav end --> */}
        </div>
    );
};

export default Header;