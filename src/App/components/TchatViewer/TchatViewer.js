import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import styles from './TchatViewer.module.scss';
import store,{initialState} from '../../reducers/store';
const TchatViewer = (props) => {
  const [messages, setmessages] = useState(initialState.messages);
   //component did mount avec [] reference de changement vide
  useEffect(() => {
   setmessages(store.getState().messages);
   store.subscribe(()=>setmessages(store.getState().messages))
  }, []);
  return (
    <div className={styles.TchatViewer} data-testid="TchatViewer">
      {messages.map((e, i) => <div className="message" key={'message-' + i}>
        {e.dateTime && e.dateTime.split('T')[1].split('.')[0] + ':'}<span style={{ color: e.color }}>{e.text}</span>
        {/*2021-04-23T12:35:00.595*/}
        {JSON.stringify(e)}
      </div>)}
    </div>
  );
}

TchatViewer.propTypes = {};

TchatViewer.defaultProps = {};

export default TchatViewer;