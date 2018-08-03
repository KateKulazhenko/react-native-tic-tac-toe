import React from "react";
import { View } from "react-native";
import PropTypes from "prop-types";
import Game from "../Game";
import Loading from "../Loading";

const GameComponent = ({
  field,
  handleStep,
  userCross,
  userZero,
  isActiveButton,
  winCombination,
  message
}) => {
  return (
    <View>
      {userCross && userZero ? (
        <Game
          field={field}
          handleStep={handleStep}
          isActiveButton={isActiveButton}
          winCombination={winCombination}
          message={message}
        />
      ) : (
        <Loading />
      )}
    </View>
  );
};

GameComponent.propTypes = {
  field: PropTypes.array,
  handleStep: PropTypes.func.isRequired,
  userCross: PropTypes.string,
  userZero: PropTypes.string,
  isActiveButton: PropTypes.bool.isRequired,
  winCombination: PropTypes.array,
  message: PropTypes.string
};

export default GameComponent;
