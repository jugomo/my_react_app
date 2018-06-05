import React, { Component } from 'react';
import Intro from '../../components/Intro';
import SeriesList from '../../components/SeriesList';
import Loader from '../../components/Loader';

class Series extends Component {
  state = {
    series: [],
    seriesName: '',
    isFetching: false
  }

  componentDidMount() {
    // sample for timeout
    //const series = ["Vikings", "Game of thrones"];
    //setTimeout(() => {
    //  this.setState({ series:series });
    //}, 2000);
  }

  onSeriesInputChange = e => {
    this.setState({ seriesName: e.target.value, isFetching: true });

    // sample for fetch
    fetch(`http://api.tvmaze.com/search/shows?q=${e.target.value}`)
    .then(response => response.json())
    .then(json => this.setState({ series: json, isFetching: false }));
    //.then(json => console.log(json))
  }

  render() {
    const { series, seriesName, isFetching } = this.state;

    return (
      <div>
        <Intro message="here we can find all of your most loved series" />
        <div>
          <input
            value={seriesName}
            type="text"
            onChange={this.onSeriesInputChange} />
        </div>
        {
          series.length === 0 && seriesName.trim() === ''
          &&
          <p>Please enter series name into the input</p>
        }
        {
          //!isFetching &&
          series.length === 0 && seriesName.trim() !== ''
          &&
          <p>No TV series have been found</p>
        }
        {
          isFetching && <Loader />
          //<p>Loading...</p>
        }
        {
          !isFetching &&
            <SeriesList list = {this.state.series} />
        }
      </div>
    )
  }
}

export default Series;
