import React, { PureComponent } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";

import io from "socket.io-client";
import _ from "lodash";

import * as authSelectors from "../../Auth/selectors";
import GameComponent from "../components/GameComponent";
import SocketProvider from "../../../pages/Socket/SocketProvider";

class GameContainer extends PureComponent {
  constructor(props) {
    super(props);
    this.socket = io.connect(
      "http://localhost:3001/",
      {
        query: { token: this.props.token }
      }
    );
    this.handleStep = this.handleStep.bind(this);
    this.isPlayerTurn = this.isPlayerTurn.bind(this);
    this.isUserCross = this.isPlayerTurn.bind(this);

    this.state = {
      gameId: null,
      playerTurn: null,
      userCross: null,
      userZero: null,
      field: null,
      winCombination: null,
      message: null
    };
  }

  componentDidMount() {
    this.socket
      .on("gameStarted", game => {
        this.setState({
          gameId: game._id,
          playerTurn: game.playerTurn,
          userCross: game.userCross,
          userZero: game.userZero
        });
      })
      .on("playTurn", game => {
        this.setState({
          gameId: game._id,
          playerTurn: game.playerTurn,
          field: game.field,
          userCross: game.userCross,
          userZero: game.userZero
        });
      })
      .on("gameFinished", ({ message, winCombination }) => {
        this.setState({ winCombination: winCombination, message: message });
        this.socket.disconnect();
      });
    this.socket.emit("startGame");
  }

  handleStep(item) {
    const { gameId, playerTurn } = this.state;
    !_.isNil(gameId) &&
      !_.isNil(playerTurn) &&
      this.socket.emit("turnPlayed", { fieldIndex: item, gameId: gameId });
  }

  isPlayerTurn() {
    const { userId } = this.props;
    const { playerTurn } = this.state;

    return !_.isNil(playerTurn) && _.isEqual(playerTurn, userId);
  }

  render() {
    const {
      gameId,
      field,
      userCross,
      userZero,
      winCombination,
      message
    } = this.state;
    return (
      <SocketProvider socket={this.socket}>
        <GameComponent
          game={gameId}
          field={field}
          handleStep={this.handleStep}
          isActiveButton={this.isPlayerTurn()}
          userCross={userCross}
          userZero={userZero}
          winCombination={winCombination}
          message={message}
        />
      </SocketProvider>
    );
  }
}

const mapStateToProps = state => ({
  token: authSelectors.getToken(state),
  userId: authSelectors.getUserId(state)
});

GameContainer.propTypes = {
  token: PropTypes.string.isRequired,
  userId: PropTypes.string.isRequired
};

export default connect(mapStateToProps)(GameContainer);
