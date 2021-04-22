import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import styles from './TchatViewer.module.scss';
import { REST_ADR } from "../../config/config";

const TchatViewer = (props) => {
  const [messages, setmessages] = useState([]);
  const [lastId, setlastId] = useState(-1);
  const [fetchCount, setfetchCount] = useState(0);
  //component did mount avec [] reference de changement vide
  useEffect(() => {
    fetch(`${REST_ADR}/messages?id_gte=${lastId + 1}`)
      .then(flux => flux.json(), flux => { console.log(flux); return [] })
      .then(jsonArr => {
        setTimeout(() => setfetchCount(fetchCount + 1), 3000);
        if (jsonArr.length <= 0) return jsonArr;
        let last = lastId;
        // get last position id
        jsonArr.forEach(e => {
          if (last < e.id)
            last = e.id
        });
        if (lastId < last) setlastId(last);
        console.log("message initialment recus:" + jsonArr)
        setmessages([...messages, ...jsonArr]);
        return jsonArr;
      })
  }, [fetchCount]);
  return (
    <div className={styles.TchatViewer} data-testid="TchatViewer">
      {messages.map((e, i) => <div className="message" key={"message_" + i}>
        {e.dateTime && e.dateTime.split('T')[1].split('.')[0] + ':'}<span style={{ color: e.color }}>{e.text}</span>
        {/*2021-04-23T12:35:00.595*/}
        {JSON.stringify(e)}</div>)}
    </div>
  );
}

TchatViewer.propTypes = {};

TchatViewer.defaultProps = {};

export default TchatViewer;
