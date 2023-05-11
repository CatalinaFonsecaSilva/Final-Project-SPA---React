import React, { useEffect, useState, useMemo } from "react";
import { createClient } from "pexels";

// Context erstellen
export const AppContext = React.createContext();

const AppContainer = (props) => {
    const [data, setData] = useState([]); //state für die Data
    const [showNav, setShowNav] = useState(false);
    const [index, setIndex] = useState(0);
    const length = 3;

    //1. Pexels API - Abfrage
    const client = createClient(
        "R0cquR0l8PZjLvSvssOxjOE1aSJX86FDwr7OFGKlHHBIMJPyfHpTSKMZ"
    );
    const API_KEY = import.meta.env.VITE_APO_KEY;

    const query = "Knit";

    useEffect(() => {
        const result = client.photos
            .search({ query, per_page: 10 })
            .then((photos) => {
                setData(photos);
            });
        // console.log("data:  ", data);
    }, []);

    //useMemo um Data zu speichern
    const cachedData = useMemo(() => {
        return data;
    }, [data]);
    // console.log("cachedData:  ", cachedData);

    //2. Handle Show Navbar
    const handleShowNavbar = () => {
        setShowNav(!showNav);
    };

    //3. Carousel
    const handleForwards = () => {
        let newIndex = index + 1;
        setIndex(newIndex <= length ? newIndex : 0);
    };

    const handleBackwards = () => {
        let newIndex = index - 1;
        setIndex(newIndex < 0 ? length : newIndex);
    };

    return (
        <AppContext.Provider
            value={{
                cachedData,
                setData,
                showNav,
                setShowNav,
                handleShowNavbar,
                index,
                handleBackwards,
                handleForwards,
            }}
        >
            {props.children}
        </AppContext.Provider>
    );
};

export default AppContainer;
