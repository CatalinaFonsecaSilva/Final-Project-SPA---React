import React, { useContext } from "react";
import { AppContext } from "../components/AppContainer";

const Inspiration = () => {
    const { cachedData } = useContext(AppContext);
    // console.log("dataInspiration:  ", cachedData);
    return (
        <div>
            {" "}
            <section className="inpiration-section">
                <h2> Inspiration</h2>
                <p>
                    <a
                        className="pexel-tag"
                        target="blank"
                        href="https://www.pexels.com"
                    >
                        Photos provided by Pexels
                    </a>
                </p>
                <p>
                    {" "}
                    Cat ipsum dolor sit amet, autem for in, and officia for
                    aliqua. Veniam. Magni vitae dolor, so consequatur excepteur
                    occaecat sed. Modi. Cat ipsum dolor sit amet, autem for in,
                    and officia for aliqua. Veniam. Magni vitae dolor, so
                    consequatur excepteur occaecat sed. Modi.
                </p>
            </section>
            {/* <img
        src={cachedData.photos[5].url}
        alt={cachedData.photos[1].alt}
        width="200px"
    /> */}
            {cachedData.map((photo, index) => {
                return (
                    <div className="inspiration-box" key={index + 1}>
                        <img src={photo.src.tiny} alt={photo.alt} />
                        <p>
                            <em>Photographer:</em> {photo.photographer}
                        </p>
                    </div>
                );
            })}
        </div>
    );
};

export default Inspiration;
