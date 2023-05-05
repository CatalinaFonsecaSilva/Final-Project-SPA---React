import React from "react";

const Projects = () => {
    return (
        <div>
            <h2> My Projects</h2>
            <section className="projects-section">
                <article className="project-article">
                    <h3>Current Project</h3>

                    <img src="src/assets/images/pullover_M.jpeg" alt="" />
                    <p>
                        Cat ipsum dolor sit amet, autem for in, and officia for
                        aliqua. Veniam. Magni vitae dolor, so consequatur
                        excepteur occaecat sed. Modi.
                    </p>
                </article>

                <article className="project-article">
                    <h3>Funniest Project</h3>
                    <img src="src/assets/images/headband.jpg" alt="" />
                    <p>
                        Cat ipsum dolor sit amet, autem for in, and officia for
                        aliqua. Veniam. Magni vitae dolor, so consequatur
                        excepteur occaecat sed. Modi.
                    </p>
                </article>
                <article className="project-article">
                    <h3>Cutest Project</h3>
                    <img src="src/assets/images/baby_kit.jpg" alt="" />
                    <p>
                        Cat ipsum dolor sit amet, autem for in, and officia for
                        aliqua. Veniam. Magni vitae dolor, so consequatur
                        excepteur occaecat sed. Modi.
                    </p>
                </article>
            </section>
        </div>
    );
};

export default Projects;
