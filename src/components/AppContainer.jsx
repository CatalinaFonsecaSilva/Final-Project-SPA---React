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
    const API_KEY = import.meta.env.VITE_API_KEY;
    const query = "Knit";

    // const client = createClient(
    //     "R0cquR0l8PZjLvSvssOxjOE1aSJX86FDwr7OFGKlHHBIMJPyfHpTSKMZ"
    // );

    useEffect(() => {
        //Solucion usando API Pexels
        // const result = client.photos
        //     .search({ query, per_page: 10 })
        //     .then((photos) => {
        //         setData(photos);
        //     });
        // console.log("data:  ", data);

        //Solucion usando fetch
        const fetchPhotos = async () => {
            try {
                const response = await fetch(
                    `https://api.pexels.com/v1/search?query=${query}&per_page=10`,
                    {
                        headers: {
                            Authorization: API_KEY,
                        },
                    }
                );
                const result = await response.json();
                console.log("Test:", result);
                setData(result.photos);
            } catch (error) {
                console.error("Error fetching photos:", error);
            }
        };
        fetchPhotos();
    }, []);

    //useMemo um Data zu speichern
    const cachedData = useMemo(() => {
        return data;
    }, [data]);
    console.log("cachedData:  ", cachedData);

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
