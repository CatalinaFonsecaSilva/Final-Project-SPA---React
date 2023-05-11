import React, { useContext } from "react";
import { NavLink } from "react-router-dom";
import { AppContext } from "../components/AppContainer";
import { Spin as Hamburger } from "hamburger-react";

const Navbar = () => {
    const { showNav, handleShowNavbar } = useContext(AppContext);
    return (
        <>
            <nav className="navbar">
                <div className="nav-container">
                    <div className="menu-icon" onClick={handleShowNavbar}>
                        <Hamburger rounded aria-label="icon menu mobil view" />
                    </div>

                    <div className={`nav-elements  ${showNav && "active"}`}>
                        <ul>
                            <li>
                                <NavLink
                                    className={({ isActive }) =>
                                        isActive ? "link active" : "link"
                                    }
                                    to="/"
                                    aria-label="link menu home"
                                >
                                    Home
                                </NavLink>
                            </li>
                            <li>
                                <NavLink
                                    className={({ isActive }) =>
                                        isActive ? "link active" : "link"
                                    }
                                    to="/projects"
                                    aria-label="link menu my projects"
                                >
                                    My Projects
                                </NavLink>
                            </li>
                            <li>
                                <NavLink
                                    className={({ isActive }) =>
                                        isActive ? "link active" : "link"
                                    }
                                    to="/inspiration"
                                    aria-label="link menu inspiration"
                                >
                                    Inspiration
                                </NavLink>
                            </li>
                            <li>
                                <NavLink
                                    className={({ isActive }) =>
                                        isActive ? "link active" : "link"
                                    }
                                    to="/about"
                                    aria-label="link menu about me"
                                >
                                    About me
                                </NavLink>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </>
    );
};

export default Navbar;
