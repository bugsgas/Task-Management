import React from "react";
import Avatar from "../../components/Avatar";

//styles
import './Project.css'

const CommentList = ({ comments }) => {
  // Sort comments by createdAt property in descending order
  const sortedComments = comments.slice().sort((a, b) => b.createdAt - a.createdAt);

  return (
    <ul className="project-comments">
      {sortedComments.length > 0 &&
        sortedComments.map((comment) => (
          <li key={comment.id}>
            <div className="comment-author">
              <Avatar src={comment.photoURL} />
              <p>{comment.displayName}</p>
            </div>
            <div className="comment-date">
              <p>Date here</p>
            </div>
            <div className="comment-content">
              <p>{comment.content}</p>
            </div>
          </li>
        ))}
    </ul>
  );
};

export default CommentList;
