import React from 'react';
import styled from 'styled-components';

import posts from '../../../data/posts';

import Post from './post';

const Posts = props => {
  return (
    <div className={props.className}>
      <h2>Posts publicados</h2>
      <div className="posts__content">
        {posts.map((post, index) => (
          <Post key={index} {...post} />
        ))}
      </div>
    </div>
  );
};

export default styled(Posts)`
  position: relative;
  .posts__content {
    margin-bottom: 40px;
  }

  hr {
    margin-top: 16px;
  }
`;
