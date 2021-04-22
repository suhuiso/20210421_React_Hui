import React from 'react';
import PropTypes from 'prop-types';
import Button from './components/Button/Button';
import User from './components/User/User';
import FormUser from './components/FormUser/FormUser';
import Tchat from './components/Tchat/Tchat';

class App extends React.Component {
  constructor(props){
    super(props);
    this.state={count:0,users:[]};
  }
  // componentDidMount(){
  //   fetch('http://desorbaix.alexandre.free.fr/phpRest/users/')
  //     .then(e=>e.json(),e=>[])
  //     .then(o=>{
  //       console.log(o);
  //       this.setState({count:o.length, users:o,selectedUser:null})
  //       return o;
  //     })
  // }
  // remove(){
  //   this.setState({count:this.state.count-1});
  //   console.log('remove');
  // }
  render() {
    console.log('render APP',this.state)
    return (
      // <div>
      //   La valeur de count est  { this.state.count }<br/>
      //   <Button title="Add" onclickbutton={()=>{
      //     this.setState({count:this.state.count+1});
      //     console.log('add');
      //   }}/>
      //   <Button bgColor='tomato' title="remove" onclickbutton={()=>{this.remove()}}/>
      //   {this.state.selectedUser && <User user={this.state.selectedUser} onclickuser={()=>{}}/>}
      //   <hr/>
      //     {this.state.selectedUser && <FormUser onchangevalue={(value=>{
      //       this.setState({selectedUser:value});
      //     })} user={this.state.selectedUser} />}
      //   <hr/>
      //   { this.state.users.map((e,i)=><User onclickuser={()=>{this.setState({selectedUser:e})}} key={'user-'+i} user={e} style={{display:'inline-block', border:'1px solid black', margin:'10px', padding:'10px'}}/>)}
      // </div>
      <div>
        <Tchat></Tchat>
      </div>
    );
  }
}


App.propTypes = {

};


export default App;