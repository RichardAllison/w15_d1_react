import React, { Component } from "react";
import CommentList from "../components/CommentList"; //UPDATED

class CommentBox extends Component {
  render() {
    return (
      <div className="commentBox">
        <CommentList />
      </div>
    );
  }
}

export default CommentBox;
