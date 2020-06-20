import React from 'react';
import './App.css';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      meaningOfLife: 28
    }   
    this.props = props;
  }

  handleChange = () => {
   this.setState((prevState, PrevProps)=>{
     return {meaningOfLife: prevState.meaningOfLife + PrevProps.increment}
     },
     ()=>console.log(this.state.meaningOfLife)
     
   )
  }

   
  


  render() {
    return (
      <div className="App">
        <button onClick={this.handleChange}>click</button>
        {this.state.meaningOfLife}
      </div>
    );
  }
}

export default App;
