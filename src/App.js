import React from 'react';
// import MuiThemeProvider from '@material-ui/styles/MuiThemeProvider'; // add
import { Button } from '@material-ui/core';
import { Input } from '@material-ui/core';
import DisplayCountries from './DisplayCountries';

import './App.css';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      country: "",
      showData: false
    }
  }

  formSubmit = (event) => {
    console.log("country value is", this.state.country);
    event.preventDefault();
    this.setState({
      showData: true
    })
  }

  handleChange = event => {
    this.setState({ country: event.target.value });
  }

  render() {
    if (!this.state.showData) {
      return (
        <div className="App">
          <form>
            <Input placeholder="Enter Country" inputProps={{ 'aria-label': 'description' }} name="name" onChange={this.handleChange} /><br/><br/>
            <Button color="primary" disabled={!this.state.country.length} onClick={this.formSubmit}>Submit</Button>
          </form>
        </div>
        //</MuiThemeProvider>
      );
    } else {
      return (
        <DisplayCountries name={this.state.country} />
      )
    }
  }
}

export default App;