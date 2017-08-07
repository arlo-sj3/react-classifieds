import React, { Component } from 'react';
import './App.css';
import Posts from './posts.js';

class App extends Component {

constructor(props){
  super(props)
  this.state = {
      classifieds: []
    }
}

  async componentDidMount() {
    const response = await fetch('http://localhost:8000/classifieds')
    const json = await response.json()
    this.setState({classifieds : json})
  }

  delPost = (id) => {
    let gonePost = [];
    for (var i = 0; i < this.state.classifieds.length; i++) {
      if (this.state.classifieds[i].id !== id){
        gonePost.push(this.state.classifieds[i])
      }
    }
    console.log(id);
    console.log(this.state);
    this.setState({classifieds: gonePost})
    console.log(gonePost);
  }

  render() {

    var allPosts = this.state.classifieds.map((obj, i)=>{

      return (
      <Posts key = {i} id  = {obj.id} price = {obj.price} description = {obj.description} image = {obj.item_image} delPost = {this.delPost} />

      )
    })

    console.log("classifieds: ", this.state.classifieds)
    return (
      <div className="App">
        {allPosts}
        <br/>
        <button>New Post!</button>
      </div>
    );
  }
}

export default App;
