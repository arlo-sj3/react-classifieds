import React, {Component} from 'react';
import './App.css';

class Posts extends Component {
  constructor(props) {
    super(props)
    this.state = {}
  }

  render() {
    return (
    <div id = {this.props.id}>
      {this.props.title}
      <br/>
      {this.props.description}
      <br/>
      {this.props.price}
      <br/>
      <img src={this.props.image} alt="boohoo"/>
      <br/>
      <button onClick={()=>{
          this.props.delPost(this.props.id);
        }}>Delete.</button>
      <button>Edit.</button>
      <hr></hr>
    </div>
  )
  }

}

export default Posts;
