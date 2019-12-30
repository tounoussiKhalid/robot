import React from 'react';
import Header from './components/Header';
import Body from './components/Body';
import Scroll from './components/Scroll';
import './App.css';
class App extends React.Component {
   state = {
     filter : ""
  }
  handleChange = (event) => {
   this.setState(
      {
      "filter" : event.target.value
     }
   )
  }
  render(){
    return (
      <div className="App" style={{textAlign:'center'}}>
        <Header handleChange={this.handleChange}/>
        <Scroll>
            <Body filter={this.state.filter}/>
        </Scroll>
        
       
      </div>
    );
  }
}

export default App;
