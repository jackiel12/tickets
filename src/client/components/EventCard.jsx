import React, { Component } from "react";
import "../../styles/styles.css";

class EventCard extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    let sellingFast = [];

    if (this.props.fast === true) {
      sellingFast = (
        <div className="redflag">
          <p>Tickets for this event are selling fast!</p>
        </div>
      );
    }

    return (
      <div className="eventCard">
        <div className="date">
          <p className="aqua eighteen">
            {this.props.dayOfWeek + " " + this.props.date}
          </p>
          <p>{this.props.time}</p>
        </div>
        <div className="eventDetails">
          <p className="eventInfo eighteen">
            {this.props.country + " - " + this.props.venue}
          </p>
          <p className="eventInfo fourteen">{this.props.artist}</p>
          {sellingFast}
        </div>
        <a
          href=""
          title={this.props.linkInfo}
          className="ticketsButton"
        >
          Tickets
        </a>
      </div>
    );
  }
}

export default EventCard;
