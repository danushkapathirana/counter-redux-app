import React, { Fragment } from "react";

import Auth from "./components/Auth";
import Counter from "./components/Counter";
import Header from "./components/Header";

const App = () => {
  return(
    <Fragment>
      <Header />
      <Auth />
      <Counter />
    </Fragment>
  )
}

export default App

// libraries

// redux
// react-redux
// @reduxjs/toolkit
