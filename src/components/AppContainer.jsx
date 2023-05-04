import React, { useEffect, useState, useMemo } from "react";
import { createClient } from "pexels";

// Context erstellen
export const AppContext = React.createContext();

const AppContainer = (props) => {
    const [data, setData] = useState([]); //state für die Data
    const [showNav, setShowNav] = useState(false);

    //1. Pexels API - Abfrage
    const client = createClient(
        "R0cquR0l8PZjLvSvssOxjOE1aSJX86FDwr7OFGKlHHBIMJPyfHpTSKMZ"
    );
    const query = "Yarn";

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

    return (
        <AppContext.Provider
            value={{
                cachedData,
                setData,
                showNav,
                setShowNav,
                handleShowNavbar,
            }}
        >
            {props.children}
        </AppContext.Provider>
    );
};

export default AppContainer;
