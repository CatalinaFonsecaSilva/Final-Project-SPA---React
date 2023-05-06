import React, { useState } from "react";

const Carousel = () => {
    const [index, setIndex] = useState(0);
    const length = 3;

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
            <div className={"active"}> {index} </div>
            <div className={"active"}> 2 </div>
            <div className={"active"}> 3 </div>
            <button onClick={handleBackwards}>back</button>
            <button onClick={handleForwards}>forward</button>
        </section>
    );
};

export default Carousel;
