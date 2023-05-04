import React, { useContext } from "react";
import { NavLink } from "react-router-dom";
import { AppContext } from "../components/AppContainer";
import { Spin as Hamburger } from "hamburger-react";

const Navbar = () => {
    const { showNav, handleShowNavbar } = useContext(AppContext);
    return (
        <>
            <nav className="navbar">
                <div className="menu-icon" onClick={handleShowNavbar}>
                    <Hamburger />
                </div>

                <div className={`nav-elements  ${showNav && "active"}`}>
                    <ul>
                        <li>
                            {" "}
                            <NavLink
                                className={({ isActive }) =>
                                    isActive ? "link active" : "link"
                                }
                                to="/"
                            >
                                Home
                            </NavLink>{" "}
                        </li>
                        <li>
                            {" "}
                            <NavLink
                                className={({ isActive }) =>
                                    isActive ? "link active" : "link"
                                }
                                to="/projects"
                            >
                                My Projects
                            </NavLink>{" "}
                        </li>
                        <li>
                            {" "}
                            <NavLink
                                className={({ isActive }) =>
                                    isActive ? "link active" : "link"
                                }
                                to="/inspiration"
                            >
                                Inspiration
                            </NavLink>{" "}
                        </li>
                        <li>
                            {" "}
                            <NavLink
                                className={({ isActive }) =>
                                    isActive ? "link active" : "link"
                                }
                                to="/about"
                            >
                                About me
                            </NavLink>{" "}
                        </li>
                    </ul>
                </div>
            </nav>
        </>
    );
};

export default Navbar;
