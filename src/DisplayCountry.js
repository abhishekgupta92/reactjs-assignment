import React, { Component } from 'react';
import { withStyles, createStyles } from '@material-ui/core/styles';
import axios from 'axios';

import { Box, Typography } from '@material-ui/core';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';

const styles = (theme) => createStyles({
  iconContainer: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    marginRight: 20
  },
  container: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "flex-start",
    marginRight: 100,
    margin: 50,
    minWidth: 300,
    maxWidth: '80%'
  },
  weatherIcon: {
    float: "left",
  }
})

class DisplayCountry extends Component {
  constructor() {
    super();
    this.state = {
      weatherData: undefined
    }
  }

  componentWillMount() {
  }

  getWeatherData = (capital) => {
    axios.get("http://api.weatherstack.com/current?access_key=cc4d37ded5d706e23d86647a0ed4f816&query=" + capital)
      .then(res => {
        this.setState({
          weatherData: res.data.current
        });
      })
  }

  showWeather = () => {
    const capital = this.props.countryData.capital;
    this.getWeatherData(capital);
  }

  render() {
    const { countryData } = this.props;
    const { classes } = this.props;

    return <Box className={classes.container}>
      <Card>
        <CardActionArea>
          <CardMedia
            image="{countryData.flag}"
            title="Flag for the country"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="h2">
              Capital : {countryData.capital}
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
              Population: {countryData.population}
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
              Lattitude: {countryData.latlng[0]}
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
              Longtitude: {countryData.latlng[0]}
            </Typography>
          </CardContent>
        </CardActionArea>
        <CardActions>
          <Button size="small" color="primary" onClick={this.showWeather}>
            Capital Weather
          </Button>
        </CardActions>
      </Card>
      {this.state.weatherData && <Card>
        <CardActionArea>
          <CardContent>
            {/* <Typography gutterBottom variant="h5" component="h2">
              Capital : {countryData.capital}
            </Typography> */}
            <Typography variant="body2" color="textSecondary" component="p">
              Temperature: {this.state.weatherData.temperature}
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">

              Wind Speed: {this.state.weatherData.wind_speed}
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
              Precipitation: {this.state.weatherData.precip}
            </Typography>
            <Box className={classes.iconContainer}>
              {this.state.weatherData.weather_icons.map((icon) => <img alt="flag" src={icon} className={classes.weatherIcon} />)}
            </Box>
          </CardContent>
        </CardActionArea>
        {/* <CardActions>
          <Button size="small" color="primary" onclick={this.showWeather}>
            Capital Weather
          </Button>
        </CardActions> */}
      </Card>
      }
    </Box>
  }
}

export default withStyles(styles)(DisplayCountry);