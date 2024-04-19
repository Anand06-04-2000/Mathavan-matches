import React from "react";
import {BrowserRouter as Router,Routes,Route} from "react-router-dom";
import App from "./App";
import Signup from "./Signup";
import Login from "./login";
import Product from "./Product";
function Main(){
    return(
        <Router>
            <Routes>
                <Route path="/" element={<App/>}/>
                <Route path="/signup" element={<Signup/>}/>
                <Route path="/login" element={<Login/>}/>
                <Route path="/product" element={<Product/>}/>
            </Routes>
        </Router>
    )
}
export default Main;