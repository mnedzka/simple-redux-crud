import React, { Component } from "react";
import { connect } from "react-redux";
import GamesList from "./GamesList";
import PropTypes from "prop-types";

class GamesPage extends Component {
  render() {
    return (
      <div>
        <h1>Games list</h1>

        <GamesList games={this.props.games} />
      </div>
    );
  }
}

GamesPage.propTypes = {
  games: PropTypes.array.isRequired
};

function mapStateToProps(state) {
  return {
    games: state.games
  };
}

export default connect(mapStateToProps)(GamesPage);
