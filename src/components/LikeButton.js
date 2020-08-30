import React, { Component } from 'react';
class LikeButton extends Component {


  state = {
     count :0
   }

   handleLikes() {
     let newCount =
     this.setState({count: this.state.count + 1})
   }

  render() {

    return (
      <div className="customContainer">
        <button className="btn btn-outline-primary btn-sm" onClick={() => this.handleLikes()}>Likes : {this.state.count}</button>&nbsp;
      </div>
    )
  }
}
export default LikeButton
