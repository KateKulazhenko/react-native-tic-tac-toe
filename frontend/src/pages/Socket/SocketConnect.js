import React from 'react';
import SocketContext from './SocketContext';

export default (Component) => {
  return function SocketComponent(props) {
    return (
      <SocketContext.Consumer>
        {(socket) => {
          return <Component {...props} socket={socket} />;
        }}
      </SocketContext.Consumer>
    );
  };
};
