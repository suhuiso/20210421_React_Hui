import React from 'react';
import PropTypes from 'prop-types';
import styles from './TchatUser.module.scss';

const TchatUser = (props) => (
  <div className={styles.TchatUser} data-testid="TchatUser">
    <img style={{height:'100px',maxWidth:'80px',size:'auto', display:'inline'}} src={props.user.img} alt={'face de '+props.user.login}/>
    {props.user.login}
  </div>
);

TchatUser.propTypes = {user:PropTypes.object.isRequired};

TchatUser.defaultProps = {};

export default TchatUser;