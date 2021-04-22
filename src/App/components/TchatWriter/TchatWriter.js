import React, { useState } from 'react';
import PropTypes from 'prop-types';
import styles from './TchatWriter.module.scss';
import SelectUser from '../SelectUser/SelectUser'
import Button from '../Button/Button';
const initialState = { text: '', color: '#000000', dest: -1 }

const TchatWriter = (props) => {
  const [message, setmessage] = useState(initialState);
  return (
    <div className={styles.TchatWriter} data-testid="TchatWriter">
      <input value={message.text} type="text" type={{ flexGrow: 1 }} onChange={e => {
        setmessage({ ...message, text: e.target.value })
      }} />
      <input type="color" />
      <SelectUser selectedId={message.dest} users={[]} onuserselectionchange={(id) => { setmessage({ ...message, dest: id }) }}><option value={-1}>Tout le monde</option></SelectUser>
      <Button title="envoyer" onclickbutton={() => { }} />
    </div>
  );
}

TchatWriter.propTypes = {};

TchatWriter.defaultProps = {};

export default TchatWriter;
