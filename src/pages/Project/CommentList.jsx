import React from "react";
import Avatar from "../../components/Avatar";
import formatDistanceToNow from 'date-fns/formatDistanceToNow'

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
              <p>{formatDistanceToNow(comment.createdAt.toDate(), {addSuffix: true})}</p>
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
