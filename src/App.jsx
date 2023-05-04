import React from "react";
import { Route, Routes } from "react-router-dom";

import SharedLayout from "./pages/SharedLayout";
import Home from "./pages/Home";
import Projects from "./pages/Projects";
import About from "./pages/About";
import Inspiration from "./pages/Inspiration";
import NotFound from "./pages/NotFound";
import AppContainer from "./components/AppContainer";

function App() {
    return (
        <AppContainer>
            <div className="App">
                <Routes>
                    <Route path="/" element={<SharedLayout />}>
                        <Route index element={<Home />} />
                        <Route path="/projects" element={<Projects />} />
                        <Route path="/inspiration" element={<Inspiration />} />
                        <Route path="/about" element={<About />} />
                        <Route path="*" element={<NotFound />} />
                    </Route>
                </Routes>
            </div>
        </AppContainer>
    );
}

export default App;
