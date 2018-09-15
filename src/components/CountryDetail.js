import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter, Link } from 'react-router-dom'

import 'bootstrap/dist/css/bootstrap.css'

import countries from "../countries.json"

class CountryDetail extends React.Component {
  render() {
    let id= this.props.match.params.name
    let country= countries.find(c=>c.name.common===id)
  
    return (
      <div>
        <h1>{country.name.common}</h1>
        <p>Capital:{country.capital}</p>
        <p> Area: {country.area}</p>
        {country.borders.length === 0 && <div>No border countries</div>}
        <ul>
        {country.borders.length > 0 && country.borders.map(border => {
              let countryToDisplay = countries.find(country => country.cca3 === border)
              return (
                <Link to={"/country/" + countryToDisplay.name.common}>
                  <li>{countryToDisplay.name.common}</li>
                </Link>
              )
            })}
        </ul>



      </div>

      
      
    );
  }
}

export default CountryDetail 