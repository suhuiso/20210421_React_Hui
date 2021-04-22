import React, { Component } from 'react';
import PropTypes from 'prop-types';
import style from './Tchat.module.scss';
import TchatViewer from '../TchatViewer/TchatViewer';
import TchatUsers from '../TchatUsers/TchatUsers';
import TchatWriter from '../TchatWriter/TchatWriter';
const initialState = { messages: [], tchatUsers: [] }

class Tchat extends Component {
  constructor(props) {
    super(props);
    this.state = initialState;
  }
  render(props) {
    return (
      <div className={style.Tchat}>
        <div className={style.horizontal}>
          <TchatViewer></TchatViewer>
          <TchatUsers></TchatUsers>
        </div>
        <TchatWriter></TchatWriter>
        {JSON.stringify(this.state)}
      </div>
    );
  }
}


Tchat.propTypes = {

};


export default Tchat;