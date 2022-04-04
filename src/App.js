import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Header from "./Components/Header";
import Home from "./Page/Home";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Footer from "./Components/Footer";
const App = () => {
    return (
        <React.Fragment>
            <Header />
            <Home />
            <Footer />
        </React.Fragment>
    );
};

export default App;
