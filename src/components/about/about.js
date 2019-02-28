import React, { Fragment } from 'react';

export default ({ title = 'sobre', text = '' }) => {
  return (
    <Fragment>
      <h1>{title}</h1>
      <p dangerouslySetInnerHTML={{ __html: text }} />
    </Fragment>
  );
};
