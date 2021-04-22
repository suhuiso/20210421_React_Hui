import React from 'react';
import PropTypes from 'prop-types';
import style from './SelectUser.module.scss';

const SelectUser = (props) => {
  console.log(props);
  return(
  <select className={style.SelectUser} data-testid="SelectUser" value={props.selectedId} onChange={(evt)=>props.onuserselectionchange(parseInt(evt.target.value))}>
    {props.children}
    {props.users.map((e,i)=><option key={'userselect-'+i} value={e.id}>{`${e.id}:${e.login}`}</option>)}
  </select>
);}

SelectUser.propTypes = {
  users:PropTypes.array.isRequired,
  selectedId:PropTypes.number,
  onuserselectionchange:PropTypes.func.isRequired,
};

SelectUser.defaultProps = {};

export default SelectUser;
