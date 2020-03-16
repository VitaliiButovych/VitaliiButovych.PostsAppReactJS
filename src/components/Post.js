import React from 'react';
import { useFavorites } from '../hooks/useFavorites';

export default Post;

function Post({ id, title, body }) {
  const {fav, setFav} = useFavorites();
  return (
    <div className="uk-card uk-card-default uk-margin-medium-bottom">
      <div className="uk-card-header">
        <h3 className="uk-card-title uk-margin-remove-bottom uk-flex uk-flex-middle uk-flex-between">
          {title} <a href="/" className="uk-icon-link" data-uk-icon="heart" onClick={(e) => {
            e.preventDefault();
            setFav([fav, Date.now()])
          }} />
        </h3>
      </div>
      <div className="uk-card-body">
        <p>{body}</p>
      </div>
      <div className="uk-card-footer">
        <a href="/" className="uk-button uk-button-text">
          Read more
        </a>
      </div>
    </div>
  );
}
