
import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route, Routes as ReactRoutes } from "react-router-dom";

import App from "./App";
import Create from "./components/Create";
import history from "./history";

const AppRoutes = () => {
    return (
        <Router history={history}>
            <ReactRoutes>
                <Route path="/" exact element={<App/>}/>
                <Route path="/Create" element={<Create/>}/>
            </ReactRoutes>
        </Router>
    )
};

export default AppRoutes;