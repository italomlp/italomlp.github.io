import React from 'react';
import styled from 'styled-components';

const Post = ({ title, description, link, date, className }) => (
  <div className={className}>
    <div className="post__content">
      <a className="post__link" href={link}>
        <h3>{title}</h3>
      </a>
      <div>{description}</div>
      <div className="post__date">
        Publicado em: {new Date(date).toUTCString()}
      </div>
      <hr />
    </div>
  </div>
);

export default styled(Post)`
  .post__content {
    position: relative;
  }

  h3 {
    margin-bottom: 0;
  }

  .post__link {
    text-decoration: none;
    color: #25303b;
  }

  .post__date {
    color: #bbb;
    font-size: 14px;
  }

  hr {
    margin-top: 16px;
  }
`;
