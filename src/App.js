import React, { Component } from 'react';
import './App.css';
import Posts from './posts.js';
import Newpost from './newPost.js'

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
    fetch('http://localhost:8000/classifieds/' + id , {
      method:'DELETE',
      headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        }
      })
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

  upPost = (id) => {
    fetch('http://localhost:8000/classifieds/' + id , {
      method:'UPDATE',
      headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        }
      })
    console.log(id)
  }

addPost =  async (post) => {
  // console.log(post)
  // let largestId = 0;
  // for (var i = 0; i < this.state.classifieds.length; i++) {
  //   if(this.state.classifieds[i].id > largestId){
  //     largestId = this.state.classifieds[i].id
  //   }
  // }
  // post.id = largestId + 1
  console.log(post.title);
  post.item_image = post.imageUrl
  delete post.imageUrl
  const response = await fetch('http://localhost:8000/classifieds', {
    method:'POST',
    body: JSON.stringify(post),
    headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      }
    })
  const json = await response.json()


  let freshPost = [json];
  for (var i = 0; i < this.state.classifieds.length; i++) {
    freshPost.push(this.state.classifieds[i]);
  }
  this.setState({classifieds:freshPost})
}

  render() {

    var allPosts = this.state.classifieds.map((obj, i)=>{

      return (
      <Posts key = {i} id  = {obj.id} price = {obj.price} description = {obj.description} image = {obj.item_image} delPost = {this.delPost} addPost = {this.addPost} upPost = {this.upPost}/>

      )
    })

    console.log("classifieds: ", this.state.classifieds)
    return (
      <div className="App">
        {allPosts}
        <br/>
        <Newpost addPost = {this.addPost}/>
      </div>
    );
  }
}

export default App;
