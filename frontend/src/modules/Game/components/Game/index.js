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
  // field,
  handleStep,
  isActiveButton,
  winCombination,
  message
}) => {
  const gameWrapperClass = classNames(styles.gameField, {
    disabled: !isActiveButton
  });

  const field = [null, null, null, null, null, null, null, null, null];

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Button
          style={styles.link}
          onPress={() => navigation.navigate("HomeScreen")}
        >
          <Text>Back</Text>
        </Button>
        <View style={styles.logo}>
          <Text style={styles.logoZero}>O</Text>
          <Text style={styles.logoCross}>X</Text>
        </View>
      </View>
      <View style={styles.gameWrapper}>
        <View style={gameWrapperClass}>
          {_.map(field, (cell, index) => {
            // const winCell = classNames(styles.cell, {
            //   [styles.winCell]: _.includes(winCombination, index)
            // });

            return _.isNil(cell) ? (
              <Button
                key={index}
                style={styles.cell}
                onPress={() => handleStep(index)}
                disabled={!isActiveButton}
              >
                <Text>&nbsp;</Text>
              </Button>
            ) : (
              <View key={index}>
                {cell === 1 ? (
                  <Text style={styles.cross}>X</Text>
                ) : (
                  <Text style={styles.zero}>O</Text>
                )}
              </View>
            );
          })}
        </View>
      </View>
      <View style={styles.turnName}>
        {isActiveButton ? <Text>Your Turn</Text> : <Text>Opponent Turn</Text>}
        {_.isNil(winCombination) && <Text>{message}</Text>}
      </View>
      {message && (
        <Button style={styles.button} component={CustomLink} to="/game">
          <Text>Start New Game</Text>
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
