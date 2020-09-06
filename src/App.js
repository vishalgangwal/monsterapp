import React from 'react';
import './App.css';
import CardList from './component/card_list.jsx';
//import { Card } from './component/card.component/card';


class App extends React.Component{
constructor(){
  super();
  this.state={
    monsters:[],
    searchField:``
  };
  
}
componentDidMount(){
  fetch('https://jsonplaceholder.typicode.com/users')
   .then(Response=> Response.json())
   .then(users=>  this.setState({monsters:users}));
   
}

render(){
  const {monsters,searchField}= this.state;
  const filteredMonster = monsters.filter( data => {
    return data.name.toLowerCase().includes(searchField.toLowerCase());
  });
  
  
return (
    <div className="App">
      <h1>Monster Rolodex</h1>
      <input type="search" placeholder="search" className="search"
        onChange={(e)=>this.setState({ searchField:e.target.value})} 
       
      />
      {/* <CardList monsters={this.state.monsters} /> */}
      <CardList monsters={filteredMonster} />  
    </div>
  );
}
}

export default App;
