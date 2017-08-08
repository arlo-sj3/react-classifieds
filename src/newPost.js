import React, {Component} from 'react';
import './App.css';

class Newpost extends Component {
  constructor(props) {
    super(props)
    this.state = {
      title: '',
      description: '',
      price:0,
      imageUrl: ''
    }
  }

newTitle = () => {
  this.setState({title:this.refs.title.value})
}

newDescription = () => {
  this.setState({description:this.refs.description.value})
}

newPrice = () => {
  this.setState({price:this.refs.price.value})
}

newImage = () => {
  this.setState({imageUrl:this.refs.imageUrl.value})
}

  newPost = () => {
    console.log('hello')
    console.log(this.state)
  }

  render() {
    return (
      <div>
        <button onClick={()=>{this.props.addPost(this.state)}}>New Post!</button>
        <input type='text' onChange = {this.newTitle} placeholder='Title' ref = 'title'/>
        <input type='text' onChange = {this.newDescription} placeholder='Description' ref = 'description'/>
        <input type='text' onChange = {this.newPrice} placeholder='Price' ref = 'price'/>
        <input type='text' onChange = {this.newImage} placeholder='Image URL' ref = 'imageUrl'/>
      </div>
    )
  }

}

export default Newpost;
