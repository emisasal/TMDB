import React from "react"
import ReactDOM from "react-dom"
import { BrowserRouter } from "react-router-dom"
import { Provider } from "react-redux"
import "./index.css"
import "bulma/css/bulma.min.css"
import "./App.css"

import App from "./App"
import store from "./store/store"

ReactDOM.render(
  <BrowserRouter>
    <Provider store={store}>
      <App />
    </Provider>,
  </BrowserRouter>,
  document.getElementById("root")
)
