import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";

const SharedLayout = () => {
    return (
        <div>
            <Navbar />

            <div className="hero-img">
                <h1>The Endless Yarn 🧶</h1>
            </div>
            <Outlet />
            <footer> By CataFS 2023</footer>
        </div>
    );
};

export default SharedLayout;
