import React from 'react';
import PropTypes from 'prop-types';
import styles from './TchatUser.module.scss';

const TchatUser = () => (
  <div className={styles.TchatUser} data-testid="TchatUser">
    TchatUser Component
  </div>
);

TchatUser.propTypes = {};

TchatUser.defaultProps = {};

export default TchatUser;
