import React, { Component } from "react";
// import {render} from 'react-dom';
import EventCard from "./EventCard.jsx";
import DropDown from "./DropDown.jsx";
import "../../styles/styles.css";

//import EventList static data
import Data from "../../../eventlist.js";

const eventsData = [...Data.Items];

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      venues: [],
      cities: [...new Set(eventsData.map(el => el.VenueCity))],
      events: [...eventsData],
      currentCity: "All",
      currentVenue: "All"
    };
    this.updateEvents = this.updateEvents.bind(this);
    this.updateCity = this.updateCity.bind(this);
    this.updateVenue = this.updateVenue.bind(this);
  }

  updateEvents(e) {
    e.preventDefault();

    let newEvents;

    if (this.state.currentCity === "All") {
      this.setState({ events: [...eventsData] });
    } else if (this.state.currentVenue === "All") {
      newEvents = eventsData.filter(el => {
        return el.VenueCity === this.state.currentCity;
      });

      this.setState({ events: newEvents });
    } else {
      newEvents = eventsData.filter(el => {
        return (
          el.VenueName === this.state.currentVenue &&
          el.VenueCity === this.state.currentCity
        );
      });

      this.setState({ events: newEvents });
    }
  }

  updateCity(val) {
    let newVenues = eventsData.filter(el => {
      if (el.VenueCity === val) {
        return el.VenueName;
      }
    });
    let uniqueVenues = [...new Set(newVenues.map(el => el.VenueName))];

    this.setState({
      currentCity: val,
      venues: uniqueVenues,
      currentVenue: "All"
    });
  }

  updateVenue(val) {
    if (val) this.setState({ currentVenue: val });
  }

  render() {
    return (
      <div className="appContainer">
        <div className="titleContainer">
          {/* <img className="eltonPic" src="https://www.nme.com/wp-content/uploads/2020/02/GettyImages-1206597242-1392x884.jpg" alt="Elton John"></img> */}
          <h1 className="bottom">Elton John Tickets</h1>
        </div>
        <br />
        <div className="locationFilter">
          <h2>Filter by Location: </h2>
          <form onSubmit={e => this.updateEvents(e)}>
            <DropDown
              label="City"
              data={this.state.cities}
              onSelection={this.updateCity}
            />
            <br />
            <br />
            <DropDown
              label="Venue"
              data={this.state.venues}
              onSelection={this.updateVenue}
            />
            <input
              className="filterButton"
              type="submit"
              value="Apply Filters"
            />
          </form>
        </div>
        <br />
        <h2>Events: </h2>
        <div className="eventsContainer">
          {this.state.events.map(el => {
            return (
              <EventCard
                artist={el.EventName}
                date={el.Date}
                country={el.VenueCountry}
                dayOfWeek={el.CalendarViewModel.Weekday}
                linkInfo={el.LinkTitleText}
                time={el.CalendarViewModel.Time}
                key={el.EventId}
                venue={el.VenueName}
                cheap={el.IsCheapestCity}
                fast={el.IsSellingFast}
              />
            );
          })}
        </div>
      </div>
    );
  }
}

export default App;
