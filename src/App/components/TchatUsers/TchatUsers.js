import React from 'react';
import PropTypes from 'prop-types';
import styles from './TchatUsers.module.scss';

const TchatUsers = () => (
  <div className={styles.TchatUsers} data-testid="TchatUsers">
    TchatUsers Component
  </div>
);

TchatUsers.propTypes = {};

TchatUsers.defaultProps = {};

export default TchatUsers;
