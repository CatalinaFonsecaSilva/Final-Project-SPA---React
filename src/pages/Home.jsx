import React from "react";
import Carousel from "../components/Carousel";
import About from "../pages/About";

const Home = () => {
    return (
        <section className="home-section">
            <h2>Welcome to my page!</h2>
            <p>
                Cat ipsum dolor sit amet, autem for in, and officia for aliqua.
                Veniam. Magni vitae dolor, so consequatur excepteur occaecat
                sed. Modi. Suscipit. Irure error aliqua perspiciatis, for magnam
                id aliquid. In consequuntur et for nihil suscipit for
                perspiciatis. Ut sed and pariatur ipsum, dolores nemo.
            </p>

            <Carousel />

            <article className="about-home-section">
                <About />
            </article>
        </section>
    );
};

export default Home;
