import React, { useEffect } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import { THEMES } from "./helpers/constants/colors";
import Home from "./components/Home/Home";
import "./App.css";
import Article from "./components/Article/Atricle";
import WebFont from "webfontloader";

const App = () => {
  return (
    <Router>
      <ThemeProvider theme={THEMES.light}>
        <>
          <Route exact path="/article" component={Article} />
          <Route exact path="/" component={Home} />
        </>
      </ThemeProvider>
    </Router>
  );
};

export default App;
