import React, { Component } from "react";
import { connect } from "react-redux";
import * as PostAction from "./actions/postActions";
class ShowData extends Component {
  constructor(props) {
    super(props);
    this.state = {
      postItems: [],
      postId: 1
    };
  }

  //getting data from the server (here jsonplaceholder)
  componentDidMount() {
    this.props.getPosts();
  }

  componentDidUpdate(prevProps) {
    if (prevProps.isNewPostReceived !== this.props.isNewPostReceived) {
      this.setState({
        postItems: this.props.posts
      });
    }
  }

 
 // ANSWER TO YOUR QUESTION
  
  //  In order to synchronize the view with database changes we can use sockets, just like the sockets
  //  are used in chat apps to send messages in real time, similarly sockets can be used to 
  // monitor the real time changes. So, as soon as there is a change 
  //  in database a socket event will be emitted using which we can change the view by dispatching 
  // an action every time and updating the state.

  // There is one more way which is mostly a hunch, we can use Pure Component in our app, and dispatch
  //an action every few seconds using setInterval() method. Pure component will render the updated data 
  //in case there is some change in the data otherwise it will not change anything. 


   //changing the post 
   //  since i have 100 posts in the store, so I am generating a random number between 1 and 100 on every
  //  button click. So, every time the button is clicked, a random number is generated and the post 
  //  with that number as its id will be rendered on the display.

  changePost = () => {
    let randomPostId = Math.floor(Math.random() * 100 + 1);
    this.setState({
      postId: randomPostId
    });
  };

  render() {
    console.log("state-->", this.state);
    const { postId } = this.state;
    return (
      <div>
        <div className="posts" style={{ border: "1px solid green" }}>
          {this.state.postItems.map(postItem => {
            if (postItem.id === postId)
              return (
                <span key={postItem.id}>
                  <p>Post Title : {postItem.title}</p>
                  <p>Post Body: {postItem.body}</p>
                </span>
              );
          })}
        </div>
        <button onClick={this.changePost}>Change Post</button>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    posts: state.postReducer.posts,
    isNewPostReceived: state.postReducer.isNewPostReceived
  };
};

export default connect(
  mapStateToProps,
  { ...PostAction }
)(ShowData);
