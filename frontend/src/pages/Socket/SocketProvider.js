import React from 'react';
import PropTypes from 'prop-types';

import SocketContext from './SocketContext';

const SocketProvider = ({ children, socket }) => {
  return (
    <SocketContext.Provider value={socket}>{children}</SocketContext.Provider>
  );
};

SocketProvider.propTypes = {
  children: PropTypes.node.isRequired,
  socket: PropTypes.object.isRequired,
};

export default SocketProvider;
