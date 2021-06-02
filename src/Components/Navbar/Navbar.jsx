import React, { Component } from 'react';
import Styles from './Navbar.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { NavLink } from 'react-router-dom'

import { faFacebook, faSpotify, faInstagram , faYoutube } from '@fortawesome/free-brands-svg-icons'

export class Navbar extends Component {
    render() {
        return (
            <>
                <nav className={`navbar ${Styles.navbar} navbar-expand-lg navbar-dark `}>
                    <a className="navbar-brand" href="/home">Noxe</a>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav mr-auto">
                            <li className="nav-item">
                                <NavLink className="nav-link" to="/home">Home</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link" to="/movies">Movies</NavLink>

                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link" to="/tvshows">Tv show</NavLink>

                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link" to="/people">People</NavLink>

                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link" to="/about">About</NavLink>

                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link" to="/networks">Networks</NavLink>
                            </li>

                        </ul>
                        <form className="form-inline my-2 my-lg-0">
                            <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" id="search_input" />
                        </form>
                        <ul className="navbar-nav  p-2 ">
                           
                            <li className="nav-item p-2">
                                <FontAwesomeIcon color='white' icon={faFacebook}/>
                            </li>
                            <li className="nav-item p-2">
                                <FontAwesomeIcon color='white' icon={faSpotify}/>
                            </li>
                            <li className="nav-item p-2">
                                <FontAwesomeIcon color='white' icon={faInstagram}/>
                            </li>
                            <li className="nav-item p-2">
                                <FontAwesomeIcon color='white' icon={faYoutube}/>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link" to="/logout">Logout</NavLink>
                            </li>
                        </ul>
                    </div>
                </nav>
            </>
        )
    }
}
