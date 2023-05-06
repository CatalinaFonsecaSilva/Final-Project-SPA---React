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
            <div className={index == 0 ? "active-slide" : "hidde"}> 0 </div>
            <div className={index == 1 ? "active-slide" : "hidde"}> 1 </div>
            <div className={index == 2 ? "active-slide" : "hidde"}> 2 </div>
            <div className={index == 3 ? "active-slide" : "hidde"}> 3 </div>
            <button onClick={handleBackwards}>back</button>
            <button onClick={handleForwards}>forward</button>
        </section>
    );
};

export default Carousel;
