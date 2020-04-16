import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import DisplayCountry from './DisplayCountry';
import axios from 'axios';

const styles = (theme) => {

}

class DisplayCountries extends Component {
  constructor() {
    super();
    this.state = {
      countryResponse: []
    }
  }

  componentWillMount() {
    axios.get("https://restcountries.eu/rest/v2/name/"+this.props.name)
      .then(res=>{
        this.setState({
          countryResponse: res.data
        });
      })
  }

  render() {
    if(!this.state.countryResponse)
      return <></>
    return this.state.countryResponse.map(
      countryData => <DisplayCountry key={countryData.cioc} countryData={countryData} />
    )
  }
}

export default withStyles(styles)(DisplayCountries);