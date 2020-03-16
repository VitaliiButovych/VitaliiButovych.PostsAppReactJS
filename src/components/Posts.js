import React from 'react';
import Post from './Post';

export default Posts;

function Posts({ posts }) {
  return (
    <div className="uk-grid uk-child-width-1-2@s uk-child-width-1-3@m">
      {posts.map(post => (
        <div key={post.id}>
          <Post id={post.id} title={post.title} body={post.body} />
        </div>
      ))}
    </div>
  );
}
