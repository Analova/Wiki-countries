import React from "react"
import ReactDOM from "react-dom"
import { BrowserRouter, Route } from "react-router-dom"

import CountryDetail from "./components/CountryDetail"
import CountryList from "./components/CountryList"

import "bootstrap/dist/css/bootstrap.css"

class App extends React.Component {
  render() {
    return (
      <div>
        <h1>Wiki Countries</h1>
        <div className="row">
          <div className="col-6">
            <CountryList />
          </div>

          <div>
            <Route path="/country/:name" component={CountryDetail} />
          </div>
        </div>
      </div>
    )
  }
}

ReactDOM.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  document.getElementById("root")
)