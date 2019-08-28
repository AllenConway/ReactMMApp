import React from "react";
import Header from "./components/@common/Header/Header";
import Footer from "./components/@common/Footer/Footer";
import Nav from "./components/@common/Nav/Nav";
import Main from "./components/@common/Main/Main";
import { CssBaseline } from "@material-ui/core";

const App: React.FC = () => {
  document.body.style.overflow = "hidden";
  return (
    <React.Fragment>
      <CssBaseline />
      <Header />
      <Nav />
      <Main />
      <Footer />
    </React.Fragment>
  );
};

// Reminder: A file can only have one default export and will be imported without bracets by referencing files
// i.e. import App from "./src/App"
export default App;
