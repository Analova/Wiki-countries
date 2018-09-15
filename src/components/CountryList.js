import React from "react"
import ReactDOM from "react-dom"
import { BrowserRouter, Link } from "react-router-dom"


import "bootstrap/dist/css/bootstrap.css"

import countries from "../countries.json"

class CountryList extends React.Component {
  render() {
    return (
      <div>
        {countries.map(country=>(
          <div>
            <span>{country.flag}</span>
            <Link to={"/country/" + country.name.common}>
            {country.name.common}
            </Link>
          </div>
        ))}
      </div>
    )
  }
}

export default CountryList