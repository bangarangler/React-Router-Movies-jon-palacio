import React, { Component } from "react";

export default class SavedList extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const routeToHome = props => {
      //console.log("test", props);
      this.props.history.push(`/`);
    };
    return (
      <div className="saved-list">
        <h3>Saved Movies:</h3>
        {this.props.list.map(movie => (
          <span key={movie.title} className="saved-movie">
            {movie.title}
          </span>
        ))}
        <button onClick={routeToHome} className="home-button">
          Home
        </button>
      </div>
    );
  }
}
