import React from "react";
import { BrowserRouter as Router } from 'react-router-dom'
import "../styles/App.css";
import Header from "./Header";
import Main from "./Main";
import Footer from "./Footer";

class App extends React.Component {
  render() {
    return (
      <Router basename={process.env.PUBLIC_URL}>
        <Header />
        <Main />
        <Footer />
      </Router>

    );
  }
}

export default App;
