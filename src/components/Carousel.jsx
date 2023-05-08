import React, { useState } from "react";

const Carousel = () => {
    const [index, setIndex] = useState(0);
    const length = 3;
    let key;

    const handleForwards = () => {
        let newIndex = index + 1;
        setIndex(newIndex <= length ? newIndex : 0);
    };

    const handleBackwards = () => {
        let newIndex = index - 1;
        setIndex(newIndex < 0 ? length : newIndex);
    };

    return (
        <section className="carousel-container">
            <div className={index == 0 ? "active-slide" : "hidde"}>
                {" "}
                <img
                    src="src/assets/images/baby_kit.jpg"
                    alt="knitted baby kit"
                />
            </div>
            <div className={index == 1 ? "active-slide" : "hidde"}>
                {" "}
                <img
                    src="src/assets/images/headband.jpg"
                    alt="knitted headband"
                />
            </div>
            <div className={index == 2 ? "active-slide" : "hidde"}>
                {" "}
                <img
                    src="src/assets/images/pullover_M.jpeg"
                    alt="knitted pullover"
                />{" "}
            </div>
            <div className={index == 3 ? "active-slide" : "hidde"}>
                {" "}
                <img
                    src="src/assets/images/socken_M.jpg"
                    alt="knitted socken"
                />{" "}
            </div>
            <div className="carousel-buttons">
                <button onClick={handleBackwards}> ⬅️ Previous </button>
                <button onClick={handleForwards}> Next ➡️</button>
            </div>
        </section>
    );
};

export default Carousel;
