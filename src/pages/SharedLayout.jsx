import React from "react";
import { Outlet, Link } from "react-router-dom";
import Navbar from "../components/Navbar";

const SharedLayout = () => {
    return (
        <div>
            {/* <div className="hero-img">
                <h1>The Endless Yarn 🧶</h1>
            </div> */}

            <Link className="hero-img" to={"/"}>
                <h1>The Endless Yarn 🧶</h1>
            </Link>
            <Navbar />
            <Outlet />
            <footer>
                <a
                    target="_blank"
                    href="https://github.com/CatalinaF-S/Final-Project-SPA-React"
                >
                    GitHub
                </a>
                <p> CaTaLiNa © 2023</p>
            </footer>
        </div>
    );
};

export default SharedLayout;
