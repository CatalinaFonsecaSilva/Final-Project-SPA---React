import React, { useContext } from "react";
import { AppContext } from "../components/AppContainer";

const Carousel = () => {
    const { index, handleForwards, handleBackwards } = useContext(AppContext);

    return (
        <section className="carousel-container">
            <div className={index == 0 ? "active-slide" : "hidde"}>
                {" "}
                <img src="/images/baby_kit.jpg" alt="knitted baby kit" />
            </div>
            <div className={index == 1 ? "active-slide" : "hidde"}>
                {" "}
                <img src="/images/headband.jpg" alt="knitted headband" />
            </div>
            <div className={index == 2 ? "active-slide" : "hidde"}>
                {" "}
                <img
                    src="/images/pullover_M.jpeg"
                    alt="knitted pullover"
                />{" "}
            </div>
            <div className={index == 3 ? "active-slide" : "hidde"}>
                {" "}
                <img src="/images/socken_M.jpg" alt="knitted socken" />{" "}
            </div>
            <div className="carousel-buttons">
                <button
                    aria-label="button image carousel - previous image"
                    onClick={handleBackwards}
                >
                    {" "}
                    ← Previous{" "}
                </button>
                <button
                    aria-label="button image carousel - next image"
                    onClick={handleForwards}
                >
                    {" "}
                    Next →{" "}
                </button>
            </div>
        </section>
    );
};

export default Carousel;
