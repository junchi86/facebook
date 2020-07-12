import React from 'react';
import { Post, UpLikes } from '../../Types';

interface IProps {
  post: Post;
  upLikes: UpLikes;
}

const CardBody: React.FunctionComponent<IProps> = ({ post, upLikes }) => {
  const thumbUp = (e: React.SyntheticEvent<HTMLButtonElement>): void => {
    e.preventDefault();
    return upLikes(post.seq);
  };
  return (
    <>
      <div className="card-body">
        <h5 className="card-title">{post.writer.name}</h5>
        <h6 className="card-subtitle text-muted">{post.createAt}</h6>
        <p className="card-text">{post.contents}</p>
        <hr />
        <div className="card-info">
          <button onClick={thumbUp} type="button" className="thumb-count">
            <i className="far fa-thumbs-up">{post.likes} 개</i>
          </button>
          <span className="comment-count">
            <i className="far fa-comment-alt">{post.comments} 개</i>
          </span>
        </div>
      </div>
      <style jsx>
        {`
          .card .card-body {
            padding: 40px;
          }
          .card .card-text {
            padding-top: 20px;
            white-space: pre-wrap;
          }
          .card .card-info {
            height: 20px;
          }
          .card .card-info .thumb-count,
          .card .card-info .comment-count {
            display: inline-block;
            margin-right: 24px;
            vertical-align: middle;
            font-size: 12px;
            cursor: pointer;
            padding: 0;
            border: none;
            background-color: transparent;
            transition: color ease-in-out 0.3s;
            transition: margin-top ease-in-out 0.2s;
          }
          .card .card-info .thumb-count:hover,
          .card .card-info .comment-count:hover {
            color: #007bff;
            margin-top: -3px;
          }
          .card .card-info .thumb-count .on {
            color: #007bff;
          }
        `}
      </style>
    </>
  );
};

export default CardBody;
