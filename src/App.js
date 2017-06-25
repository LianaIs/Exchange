import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';


const p_styling = {
  display : 'flex',
  flexDirection: 'column',
  backgroundColor : 'aliceblue',
  justifyContent: 'space-around',
  alignItems: 'center'
}


const div_styling = {
  textAlign : 'center',
  display : 'flex',
  flex : 1,
  height: '120px',
  width: '100%',
  flexDirection: 'raw',
  justifyContent: 'space-around',
  alignItems: 'center',
  backgroundColor : 'orange',
  boxShadow: '0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)'
}



class App extends Component {


  state = {base: '', date: '', rates: {}}


  changeHandler = (event) => {
  		this.setState({text: event.target.value});
  	}

    fetchHandler = () => {
      console.log(this.state.text);
      const currency = this.state.text;
      this.fetch(currency);

  }

   async fetch (cur) {

   const cur_to_fetch = this.state.text

   try{
   const req = await fetch ('http://api.fixer.io/latest?base=' + cur);
   const data = await req.json();
   console.log(data);
   this.setState({base: data.base, date: data.date, rates: data.rates});
  }
  catch (e) {
    console.error(e);
  }
}


  render() {

    const keysarr = Object.keys(this.state.rates);
    const valuesarr = Object.values(this.state.rates);

    const Obj_arr = () => {
    let obj_arr = [];
    for (let i = 0; i < keysarr.length; ++i)
       { obj_arr.push(`${keysarr[i]}  ${valuesarr[i]}`);
     }
     return obj_arr.map(e => <p>{e}</p>);
    }

    return (
      <div>

      <div style={div_styling} className="App">

        <div style={{border: '1px solid black'}}>
          <input
                 type="text"
                 value={this.state.text}
                 onChange={this.changeHandler}
               />
          <input
                 type="button"
                 value="USD"
                 onClick={this.fetchHandler}
              />
        </div>

       <div style={{border: '1px solid black'}}>
         <input
                type="text"
                value={this.state.text}
                onChange={this.changeHandler}
              />
         <input
                type="button"
                value="EUR"
                onClick={this.fetchHandler}
             />
       </div>

       <div style={{border: '1px solid black'}}>
         <input
                type="text"
                value={this.state.text}
                onChange={this.changeHandler}
              />
         <input
                type="button"
                value="JPY"
                onClick={this.fetchHandler}
             />
       </div>

       <div style={{border: '1px solid black'}}>
         <input
                type="text"
                value={this.state.text}
                onChange={this.changeHandler}
              />
         <input
                type="button"
                value="CHF"
                onClick={this.fetchHandler}
             />
       </div>

      </div>

      <div>
       <p>{this.state.date}</p>
       <p style={p_styling}>{Obj_arr()}</p>
      </div>

      </div>
    );
  }
}

export default App;
