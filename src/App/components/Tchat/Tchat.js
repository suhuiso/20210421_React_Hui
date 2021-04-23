import React, { Component } from 'react';
import PropTypes from 'prop-types';
import style from './Tchat.module.scss';
import TchatViewer from '../TchatViewer/TchatViewer';
import TchatUsers from '../TchatUsers/TchatUsers';
import TchatWriter from '../TchatWriter/TchatWriter';
import { REST_ADR } from "../../config/config";
import store, { TCHAT_ACTIONS } from "../../reducers/store";
import Button from '@material-ui/core/Button';

const initialState = { messages: [], tchatUsers: [] }

class Tchat extends Component {
  constructor(props) {
    super(props);
    this.state = initialState;
  }

  componentDidMount() {
    fetch(`${REST_ADR}/tchatUsers`)
      .then(f => f.json(), f => { console.log(f); return [] })
      .then(jsonArr => { this.setState({ tchatUsers: jsonArr }); return jsonArr; })

  }
  render(props) {
    return (
      <div className={style.Tchat}>
        <h1>Tchat
          <Button variant="contained" color="primar" onClick={e => { store.dispatch({ type: TCHAT_ACTIONS.DISCONNECT_USER }) }}>
            Disconnect</Button>
        </h1>
        <div className={style.horizontal}>
          <TchatViewer users={this.state.tchatUsers}></TchatViewer>
          <TchatUsers users={this.state.tchatUsers}></TchatUsers>
        </div>
        <TchatWriter users={this.state.tchatUsers}></TchatWriter>
        {JSON.stringify(this.state)}
      </div>
    );
  }
}


Tchat.propTypes = {

};


export default Tchat;