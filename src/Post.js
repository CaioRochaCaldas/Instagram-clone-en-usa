import React, { useState, useEffect, forwardRef } from "react";
import "./Post.css";
import Avatar from "@material-ui/core/Avatar";
import { db } from "./firebase";
import firebase from "firebase";

const Post = forwardRef(
  ({ user, username, postId, imageUrl, caption }, ref) => {
    const [comments, setComments] = useState([]);
    const [comment, setComment] = useState("");

    useEffect(() => {
      let unsubscribe;
      if (postId) {
        unsubscribe = db
          .collection("posts")
          .doc(postId)
          .collection("comments")
          .onSnapshot((snapshot) => {
            setComments(snapshot.docs.map((doc) => doc.data()));
          });
      }

      return () => {
        unsubscribe();
      };
    }, [postId]);

    const postComment = (e) => {
      e.preventDefault();

      db.collection("posts").doc(postId).collection("comments").add({
        text: comment,
        username: user.displayName,
      });
      setComment("");
    };

    return (
      <div className="post" ref={ref}>
        <div className="post__header">
          <Avatar
            className="post__avatar"
            alt={username}
            src="data:image/png;base64,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"
          />
          <h3>{username}</h3>
        </div>

        <img className="post__image" src={imageUrl} alt="post" />
        <h4 className="post__text">
          {username} <span className="post__caption">{caption}</span>
        </h4>

        <div className="post__comments">
          {comments.map((comment) => (
            <p>
              <b>{comment.username}</b> {comment.text}
            </p>
          ))}
        </div>

        {user && (
          <form className="post__commentBox">
            <input
              className="post__input"
              type="text"
              placeholder="Add a comment..."
              value={comment}
              onChange={(e) => setComment(e.target.value)}
            />
            <button
              disabled={!comment}
              className="post__button"
              type="submit"
              onClick={postComment}
            >
              Post
            </button>
          </form>
        )}
      </div>
    );
  }
);

export default Post;
