import React, { FC } from 'react';
import classnames from 'classnames';
import moment from 'moment';
import CommentList from './CommentList';
import CommentForm from './CommentForm';
import { useDispatch, useSelector } from 'react-redux';
import { likePost } from 'data/posts/actions';
import { PostTypes, CommentEntities, RootReducer, UserTypes } from 'data/rootTypes';
import { DummyUsers } from 'data/Dummy';
import { Link } from 'react-router-dom';

interface IProps {
  post: PostTypes;
}

const Post: FC<IProps> = ({ post }) => {
  const { seq, writer, createdAt, contents, likes, likesOfMe } = post;
  const userIdx = DummyUsers.allId.filter((i) => i === writer)[0];
  if (!userIdx) {
    return null;
  }
  const user = DummyUsers.byId.filter((i) => i.seq === userIdx)[0];
  const name = user.name;
  const rowComments: CommentEntities = useSelector((state: RootReducer) => state.comments);
  const commentList = rowComments.byId.filter((i) => i.postId === seq);
  const datetime = moment(createdAt).fromNow();
  const dispatch = useDispatch();
  const handleClickLikeButton = (e: React.SyntheticEvent<HTMLButtonElement>): void => {
    e.preventDefault();
    dispatch(likePost(seq));
  };

  return (
    <div className="card">
      <div className="card-body">
        <Link to={'/u/' + user.seq} className="nav-link">
          <h5 className="card-title">{name}</h5>
        </Link>
        <h6 className="card-subtitle text-muted">{datetime}</h6>
        <p className="card-text">{contents}</p>
        <hr />
        <div className="card-info">
          <button type="button" className="thumb-count" onClick={handleClickLikeButton}>
            <i
              className={classnames('far fa-thumbs-up', {
                on: likesOfMe,
              })}
            />{' '}
            {likes} 개
          </button>
          <span className="comment-count">
            <i className="far fa-comment-alt" /> {commentList.length} 개
          </span>
        </div>
      </div>
      <CommentList commentList={commentList} />
      <CommentForm userSeq={user.seq} postSeq={seq} />
      <style jsx global>{`
        .card {
          padding: 0;
          margin-top: 50px;
          border: none;
          border-radius: 0.5rem;
        }
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
      `}</style>
    </div>
  );
};

export default Post;
