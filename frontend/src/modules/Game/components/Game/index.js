import React from "react";
import { View, Text } from "react-native";
import PropTypes from "prop-types";
import _ from "lodash";
import { Button } from "native-base";
import { compose } from "redux";
import classNames from "classnames";

import styles from "./styles";

import SocketConnect from "../../../../pages/Socket/SocketConnect";

const Game = ({
  field,
  handleStep,
  isActiveButton,
  winCombination,
  message
}) => {
  const gameWrapperClass = classNames(styles.gameField, {
    disabled: !isActiveButton
  });

  return (
    <View style={styles.gameWrapper}>
      <View style={styles.header}>
        <Button style={styles.link} component={CustomLink} to="/home">
          <Text>Back</Text>
        </Button>
        <View style={styles.logo}>
          <Text style={styles.logoFirst}>O</Text>
          <Text style={styles.logoSecond}>X</Text>
        </View>
      </View>
      <View style={gameWrapperClass}>
        {_.map(field, (cell, index) => {
          const winCell = classNames(styles.cell, {
            [styles.winCell]: _.includes(winCombination, index)
          });

          return _.isNil(cell) ? (
            <Button
              key={index}
              style={styles.cell}
              onPress={() => handleStep(index)}
              disabled={!isActiveButton}
            >
              &nbsp;
            </Button>
          ) : (
            <View key={index} style={winCell}>
              {cell === 1 ? (
                <View style={styles.cross}>X</View>
              ) : (
                <View style={styles.zero}>O</View>
              )}
            </View>
          );
        })}
      </View>
      <View style={styles.turnName}>
        {isActiveButton ? <View>Your Turn</View> : <View>Opponent Turn</View>}
        {_.isNil(winCombination) && <View>{message}</View>}
      </View>
      {message && (
        <Button style={styles.button} component={CustomLink} to="/game">
          Start New Game
        </Button>
      )}
    </View>
  );
};

Game.propTypes = {
  field: PropTypes.array,
  handleStep: PropTypes.func.isRequired,
  isActiveButton: PropTypes.bool.isRequired,
  winCombination: PropTypes.array,
  message: PropTypes.string
};

export default compose(SocketConnect)(Game);
