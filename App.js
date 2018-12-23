import React, { Component } from 'react';


class App extends Component {
  state = {
    user1 : "" , 
    user2 : "" ,
    message : [ ]
  }
  render() {
    return (
      <div className="App">
       <div>
        {
          this.state.message.map((el , index) => {
            return (
              <div >
                <div style={el.id === 1 ? {float : "right" , color : 'red' } : {flaot : 'left' , color : 'blue'}} >
                  {el.id == 1 ? "user 1 " : "user 2"} {el.message} 
                </div>
                <br/>
                <br/>
              </div>
            )
          })
        }
       </div>

        <input type="text" onChange={(e) => this.setState({user1 : e.target.value})} placeholder="user 1 "/>
        <button type="submit" onClick={() => this.setState({ message : this.state.message.concat({id : 1 , message : this.state.user1}) })}>send user 1 </button>
        <input type="text" onChange={(e) => this.setState({user2 : e.target.value})} placeholder="user 2 "/>
        <button type="submit" onClick={() => this.setState({ message : this.state.message.concat({id : 2 , message : this.state.user2}) })}>send user 1 </button>

       
      </div>
    );
  }
}

export default App;
